import React, { useContext, useEffect, useState } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import { CreateContext } from "./contextapi";
import Footer from "./footer";

function Dashboard() {
  const [timesheets, setTimesheet] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentpage,setcpage]=useState(1);
  const [perpage,setperpage]=useState(5);

  let data =useContext(CreateContext);

  useEffect(() => {
  setTimesheet(data);
  setFiltered(data);
}, [data]);


  // Filter by date
  const handleDate = (e) => {
    const val = e.target.value;
    if (!val) {
      setFiltered(timesheets);
    } else {
      const dateFiltered = timesheets.filter((item) =>
        item.month?.toLowerCase().includes(val.toLowerCase())
      );
      setFiltered(dateFiltered);
      setcpage(1)
    }
  };

  // Filter by status
  const handleStatus = (e) => {
    const value = e.target.value;
    if (!value) {
      setFiltered(timesheets);
      return;
    }

    const statusFiltered = timesheets.filter((item) => {
      const isCompleted = Number(item.hour) >= 40;
      return value === "completed" ? isCompleted : !isCompleted;
    });

    setFiltered(statusFiltered);
    setcpage(1);
  };

  //pagination

    let lastindex=currentpage * perpage;
    let firstindex=lastindex -  perpage;
    let paginate=filtered.slice(firstindex,lastindex);
    let totalpage=Math.ceil(filtered.length/perpage);
    
    let handlenext=()=>{
      if(currentpage<totalpage) setcpage((next)=>next + 1)
    }
    
     let handleprevious=()=>{
      if(currentpage>1) setcpage((prev)=>prev - 1)
    }

   const handlepage = (e) => {
    setperpage(Number(e.target.value));
    setcpage(1);
  };


  return (
    <div>
      <Header />
      <div className="bg-gray-200 p-4 min-h-screen">
        <div className="bg-white md:mx-auto md:w-[90%] my-5 p-4 rounded-lg shadow">
          <h2 className="font-bold text-xl mb-4">Your Timesheet</h2>

          {/* Filter Section */}
          <div className="pt-2 mb-4">
            <select
              className="border py-1 px-2 rounded-lg text-sm shadow-md mx-1"
              onChange={handleDate}
            >
              <option value="">All Dates</option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              className="border py-1 px-2 rounded-lg text-sm shadow-md mx-1"
              onChange={handleStatus}
            >
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 text-left font-medium text-sm border border-gray-300">WEEK</th>
                  <th className="p-3 text-left font-medium text-sm border border-gray-300">DATE</th>
                  <th className="p-3 text-left font-medium text-sm border border-gray-300">STATUS</th>
                  <th className="p-3 text-left font-medium text-sm border border-gray-300">ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {paginate.map((item) => {
                  const hours = Number(item.hour);
                  const status = hours >= 40 ? "Completed" : "Incomplete";

                  return (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="p-3 border-b border-gray-200 text-sm text-center bg-gray-100">
                        {item.id}
                      </td>
                      <td className="p-3 border-b border-gray-200 text-sm">
                        {item.date} {item.month} {item.year}
                      </td>
                      <td
                        className={`p-3 border-b border-gray-200 text-sm font-medium ${
                          status === "Completed"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {status}
                      </td>
                      <td className="p-3 border-b border-gray-200 text-sm">
                        <Link
                          to={`/weeksheet/${item.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                No records found.
              </p>
            )}

            <div className="flex justify-between">
             <div>
               <select name="" id="" onChange={handlepage} className="border-[1px] rounded-lg border-gray-500 mt-4 py-0.5 px-2 text-sm bg-gray-200">
                <option value="5">5 Per Page</option>
                <option value="10">10 Per Page</option>
                <option value="15">15 Per Page</option>
              </select>
             </div>

              <div>
                <button onClick={handleprevious} className={`border-[1px] rounded-lg border-gray-500 mt-4 py-0.5 px-2 text-sm  ml-1 ${currentpage===1?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white"}`} disabled={currentpage===1}>Previous</button>
                  <span className="text-sm p-1">Page {currentpage} of {totalpage}</span>
                <button onClick={handlenext} className={`border-[1px] rounded-lg border-gray-500 mt-4 py-0.5 px-2 text-sm  ml-1 ${currentpage===totalpage?"bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white"}`} disabled={currentpage===totalpage}>Next</button>
              </div>

            </div>
          </div>
        </div>

          <Footer></Footer>

      </div>
    </div>

  );
}

export default Dashboard;

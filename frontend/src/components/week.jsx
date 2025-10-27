import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CreateContext } from './contextapi';
import Header from './header';
import Footer from './footer';

function Week() {
  let { id } = useParams();
  let [week, setWeek] = useState(null); 
  let data = useContext(CreateContext);

  useEffect(() => {
    let weekData = data.find((item) => item.id == id);
    setWeek(weekData);
  }, [data, id]);

  // If no week data is found
  if (!week) {
    return (
      <div>
        <Header />
        <div className='bg-gray-200 py-10'>
          <div className='bg-white mx-auto w-[90%] p-3'>
            <h2 className="text-center">No Timesheet Found for this Week</h2>
          </div>
        </div>
      </div>
    );
  }

  // Destructure week data
  const { date, month, year, hour } = week;

  // Calculate the progress percentage
  let progress = (hour / 40) * 100;

  let finalProgress = progress > 100 ? 100 : progress;

  return (
    <div>
      <Header />
      <div className='bg-gray-200 py-10 '>
        <div className='bg-white mx-auto w-[90%] p-3 mb-7 rounded-lg'>
          <div className="flex justify-between">
            <div>
              <h2 className='text-xl font-bold'>This Week Timesheet</h2>
              <p className='text-sm text-gray-500 pt-5 pb-3'>{date} {month}, {year}</p>
            </div>
            <div>
              <p className='text-sm'>{hour} / 40hrs</p>
              <div className='w-32 bg-gray-200 h-1 rounded-4xl'>
                <div 
                  className="bg-orange-500 h-1 rounded-4xl"
                  style={{ width: `${finalProgress}%` }} 
                ></div>
              </div>
            </div>
          </div>

            <div>
              {week.week.map((item,index)=>(
                
                    <div className='flex ' key={index}>
                        <div className='flex-1/7'>
                          <h2 className='font-bold text-md md:pl-5'>{item.day}</h2>
                        </div>
                        <div className='border-[1px] border-gray-300 border-double rounded-lg flex-6/7 my-2'>
                           <div className='flex justify-between p-2'>
                              <div>
                                   {item.work.map((e,i)=>(
                                      <h2 className='font-bold'>{e}</h2>
                                    ))}
                              </div>
                              <div>
                                  <h2 className='inline-block text-gray-500 px-2 text-sm'>{item.hour.slice(0,2)} hrs</h2>
                                  <h2 className='inline-block bg-blue-200 p-1 rounded-lg text-sm text-blue-800'>{item.project}</h2>
                              </div>
                           </div>
                        </div>
                    </div>
                  ))}
            </div>

        </div>

        <Footer></Footer>

      </div>
    </div>
  );
}

export default Week;

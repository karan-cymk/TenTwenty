import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/"); // redirect if not logged in
    }
  }, [navigate]);

   const handleSelect = (e) => {
    if (e.target.value === "logout") {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("user");
      navigate("/");
    } else {
      
      e.target.value = user?.name;
    }
}
  };

  return (
    <div>
      <div className="p-5 shadow-md">
        <div className="flex items-center">
          <div className="text-xl basis-1/5 font-bold text-blue-700">ticktock</div>

          <div className="text-gray-700 basis-1/5">Timesheet</div>

          <div className="font-semibold text-blue-600 basis-3/5 text-right">
            <select className="bg-white" onChange={handleSelect}>
                <option value={user?.name} className="bg-white text-black">{user?.name}</option>
                <option value="logout" >Logout</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}

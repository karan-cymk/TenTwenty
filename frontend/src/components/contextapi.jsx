import React, { createContext, useEffect, useState } from 'react';

export const CreateContext = createContext();

function Contextapi({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("http://localhost:5000/timesheet");
        let data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Failed to fetch timesheet:", error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <CreateContext.Provider value={data}>
      {children}
    </CreateContext.Provider>
  );
}

export default Contextapi;

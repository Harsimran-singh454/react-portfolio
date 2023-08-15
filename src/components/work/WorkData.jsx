import React, { useState, useEffect } from "react";
import Work from "./Work";

export default function WorkData() {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    fetch("/work.json")
      .then((response) => response.json())
      .then((data) => setWorkdata(data.work))
      .catch((error) => console.error("Error fetching data:", error));
    }, []);

  return (
    <div>
      {workdata.map((workarray) => (
        <Work 
            key={workarray.id} 
            title={workarray.title}
            company={workarray.company}
            location={workarray.location}
            desc={workarray.desc}
            start_data={workarray.start_date}
            end_date={workarray.end_date}
        />
      ))}
    </div>
  );
};

import React, { useState, useEffect } from "react";
import Education from "./Education";

export default function WorkData() {
  const [workdata, setWorkdata] = useState([]);

  useEffect(() => {
    fetch("/study.json")
      .then((response) => response.json())
      .then((data) => setWorkdata(data.education))
      .catch((error) => console.error("Error fetching data:", error));
    }, []);

  return (
    <div>
      {workdata.map((studyArray) => (
        <Education 
            key={studyArray.id} 
            institution={studyArray.institution}
            location={studyArray.location}
            program={studyArray.program}
            start_data={studyArray.start_date}
            end_date={studyArray.end_date}
        />
      ))}
    </div>
  );
};

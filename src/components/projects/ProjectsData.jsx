import React, { useState, useEffect } from "react";
import Projects from "./Projects";

export default function ProjectsData() {
  const [projectsData, setProjectsData] = useState([]);

useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjectsData(data.projects))
      .catch((error) => console.error("Error fetching data:", error));
        // console.log(data);
    }, []);
return (
    <div>
        {projectsData.map((projectsArray)=>(
            <Projects
                key={projectsArray.id}
                title={projectsArray.title}
                scrcht={projectsArray.scrcht}
                languages={projectsArray.languages}
                desc={projectsArray.desc}
                github={projectsArray.github}
            />
        ))}
    </div>
    );
};
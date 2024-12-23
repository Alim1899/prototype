// ProjectsContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { retrieveData } from "../../../Functions/Functions";

const ProjectsContext = createContext();

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveData(setProjects).then(() => setLoading(false));
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
};

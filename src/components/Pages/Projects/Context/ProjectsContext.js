import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
} from "react";
import { getContextIds, getProjects } from "../../../Functions/Functions";

const ProjectsContext = createContext();
const initialState = {
  data: [],
  projectsLoaded: false,
  ids: [],
  length: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "get/ids":
      return { ...state, ids: action.payload, length: action.payload.length };
    case "get/project":
      return {
        ...state,
        projectsLoaded: true,
        data: [
          ...state.data,
          { id: action.payload.id, value: action.payload.value },
        ],
      };
    default:
      return state;
  }
};
const ProjectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { ids, projectsLoaded, data, length } = state;
  const contextValue = useMemo(
    () => ({ data, projectsLoaded, ids }),
    [data, projectsLoaded, ids]
  );

  useEffect(() => {
    getContextIds(dispatch);
  }, []);

  useEffect(() => {
    if (length === 0) return;
        ids.forEach((id) => {
  
        getProjects(id, dispatch);
        
    });
  }, [length, ids]);
 
  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};

const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};

export { ProjectsProvider, useProjects };

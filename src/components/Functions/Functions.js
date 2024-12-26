import app from "../../firebaseConfig";

import { getDatabase, get, ref } from "firebase/database";
// TESTED WORKING

export const retrieveData = async (setProjects) => {
  const db = getDatabase();
  const projectsRef = ref(db, "projects");
  try {
    const snapshot = await get(projectsRef);
    if (snapshot.exists()) {
      setProjects(Object.entries(snapshot.val()));
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
};

export const getIds = async (dispatch) => {
  const db = getDatabase(app);
  const dbRef = ref(db, `ids`);
  const snapshot = await get(dbRef);
  if (snapshot.exists())
    dispatch({
      type: "getIds",
      payload: Object.keys(snapshot.val(snapshot.val())),
    });
};

export const fetchDataSequentially = async (
  ids,
  setData,
  setProjectsLoaded
) => {
  const projects = [];
  const db = getDatabase();
  for (const id of ids) {
    try {
      const projectsRef = ref(db, `projects/${id}`);
      const snapshot = await get(projectsRef);
      if (snapshot.exists()) {
        projects.push(snapshot.val());
        setData(projects);
        setProjectsLoaded(true);
      } else {
        console.log("No data available for id:", id);
      }
    } catch (error) {
      console.error("Error fetching data for id:", id, error);
    }
  }
};

export const getProject = async (ids, dispatch) => {
  const db = getDatabase();
  for (const id of ids) {
    try {
      const projectsRef = ref(db, `projects/${id}`);
      const snapshot = await get(projectsRef); // Wait for the promise to resolve
      if (snapshot.exists()) {
        dispatch({
          type: "addProject",
          payload: { id: id, value: snapshot.val() },
        });
      } else {
        console.log("No data available for id:", id);
      }
    } catch (error) {
      console.error("Error fetching data for id:", id, error);
    }
  }
};

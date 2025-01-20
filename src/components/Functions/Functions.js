import app from "../../firebaseConfig";
import { getDatabase, get, ref } from "firebase/database";
export const getContextIds = async (dispatch) => {
  const db = getDatabase(app);
  const dbRef = ref(db, `id`);
  const snapshot = await get(dbRef);
  if (snapshot.exists()) dispatch({ type: "get/ids", payload: snapshot.val() });
};

export const getProjects = async (id, dispatch) => {
  const db = getDatabase();

  try {
    const projectsRef = ref(db, `projects/${id}`);
    const snapshot = await get(projectsRef);
    if (snapshot.exists()) {
      dispatch({
        type: "get/project",
        payload: { id: id, value: snapshot.val() },
      });
    } else {
      console.log("No data available for id:", id);
    }
  } catch (error) {
    console.error("Error fetching data for id:", id, error);
  }
};

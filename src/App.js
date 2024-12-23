import Layout from "./components/Layout/Layout";
import { ProjectsProvider } from "./components/Pages/Projects/Project/ProjectsContext";
import './App.css'
const App = () => {
  return (
    <ProjectsProvider>
    <div className="main" style={{ padding: 0, margin: 0 }}>
      <Layout />
    </div>
    </ProjectsProvider>
  );
};

export default App;

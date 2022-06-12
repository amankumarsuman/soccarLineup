import logo from "./logo.svg";
import "./App.css";
// import Body from './components/body/Body';
import CustomizedTables from "./components/table/Table";
import EditForm from "./components/editForm/EditForm";
import { EditFormRenderPage } from "./components/editForm/EditFormToRender";
import Body from "./components/body/Body";
import NotEnoughStarter from "./components/dialogueBox/notEnoughStarter/NotEnoughStarter";
import ImporterDialogue from "./components/dialogueBox/importerDialogue/importerDialogue";
import RoasterDetails from "./components/roasterDetails/RoasterDetails";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>

      {/* <CustomizedTables /> */}
      {/* <EditForm />
      <EditFormRenderPage />
      <Body />
      <ImporterDialogue /> */}
      {/* <Body/> */}
      {/* <RoasterDetails /> */}
      {/* <EditFormRenderPage /> */}
      {/* <EditForm /> */}
      <Routes>
      <Route exact path="/" element={<RoasterDetails />} />
      <Route exact path="home" element={<RoasterDetails />} />
      <Route exact path="playground" element={<Body />} />

      </Routes>
      {/* <Body/> */}
    </div>
  );
}

export default App;

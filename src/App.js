import InitiateEditor from "./utils/editor";
import "./App.css";
import { useEffect } from "react";
import PanelTop from "./component/PanelTop";
import ContentPanel from "./component/ContentPanel";

const App = () => {
  useEffect(() => {
    InitiateEditor();
  }, []);

  return (
    <>
      {/* TOP PANEL SECTION */}
      <PanelTop />
      {/* MAIN EDITOR SECTION */}
      <ContentPanel />
    </>
  );
};

export default App;

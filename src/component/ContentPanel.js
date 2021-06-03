import EditorPanel from "./EditorPanel";

const ContentPanel = () => (
  <div className="editor-row">
    {/* CONTENT SECTION */}
    <div className="editor-canvas">
      <div id="gjs"></div>
    </div>
    {/* EDITOR PANEL SECTION */}
    <EditorPanel />
  </div>
);

export default ContentPanel;

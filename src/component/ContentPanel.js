import EditorPanel from "./EditorPanel";

const ContentPanel = () => (
  <div className="editor-row">
    <div className="editor-canvas">
      <div id="gjs"></div>
    </div>
    <EditorPanel />
  </div>
);

export default ContentPanel;

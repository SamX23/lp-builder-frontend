import EditorPanel from "./EditorPanel";

const ContentPanel = () => (
  <div className="editor-row">
    <div className="editor-canvas">
      <div id="builder-canvas"></div>
      <div className="editor-canvas-mode">
        <div className="panel__devices"></div>
      </div>
    </div>
    <EditorPanel />
  </div>
);

export default ContentPanel;

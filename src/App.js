import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="lp_menu">
        <img src="" alt="logo" />
        <div className="menu_options">
          <button>TEMPLATES</button>
          <button>SAVE</button>
          <button>EXPORT</button>
          <button>IMPORT</button>
          <button>PREVIEW</button>
          <button>SETTINGS</button>
          <button>PUBLISH</button>
          <button>CLOSE</button>
        </div>
      </div>
      <div className="lp_builder">
        <div className="lp_content"></div>
        <div className="lp_block">
          <div className="block_option"></div>
          <div className="block_menu">
            <div className="block_menuButton">
              <p>Content</p>
            </div>
            <div className="block_menuButton">
              <p>Blocks</p>
            </div>
            <div className="block_menuButton">
              <p>Body</p>
            </div>
            <div className="block_menuButton">
              <p>Images</p>
            </div>
            <div className="block_menuButton">
              <p>Uploads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

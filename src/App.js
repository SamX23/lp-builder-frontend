import "./App.css";

function App() {
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  const drop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    let nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = e.target.id;
    e.target.appendChild(nodeCopy);
  };

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
        <div
          className="lp_content"
          onDrop={(e) => drop(e)}
          onDragOver={(e) => allowDrop(e)}
        ></div>
        <div className="lp_block">
          <div className="block_option">
            <button draggable="true" onDragStart={(e) => drag(e)} id="item">
              TEXT
            </button>
            <button draggable="true" onDragStart={(e) => drag(e)} id="item2">
              IMAGE
            </button>
            <button draggable="true" onDragStart={(e) => drag(e)} id="item3">
              FORM
            </button>
            <button draggable="true" onDragStart={(e) => drag(e)} id="item4">
              HTML
            </button>
            <button draggable="true" onDragStart={(e) => drag(e)} id="item5">
              BUTTON
            </button>
            <button draggable="true" onDragStart={(e) => drag(e)} id="item6">
              DIVIDER
            </button>
            <button draggable="true" onDragStart={(e) => drag(e)} id="item7">
              MENU
            </button>
            <button draggable="true" onDragStart={(e) => drag(e)} id="item8">
              SOCIAL
            </button>
            <button draggable="true" onDragStart={(e) => drag(e)} id="item9">
              VIDEO
            </button>
          </div>
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

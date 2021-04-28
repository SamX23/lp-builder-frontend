import "./App.css";
import ButtonMenu from "./component/ButtonMenu";

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
        <div className="lp_logo">
          <img
            src="https://aplikasi.kirim.email/img/icon-email-builder.svg"
            alt="logo"
          />
          <p>PAGE BUILDER</p>
        </div>
        <div className="menu_options">
          <ButtonMenu
            title="TEMPLATES"
            img="https://aplikasi.kirim.email/img/icon-email-template.svg"
            className="templates"
          />
          <ButtonMenu
            title="SAVE"
            img="https://aplikasi.kirim.email/img/icon-email-template.svg"
            className="utility"
          />
          <ButtonMenu
            title="EXPORT"
            img="https://aplikasi.kirim.email/img/icon-email-template.svg"
            className="utility"
          />
          <ButtonMenu
            title="IMPORT"
            img="https://aplikasi.kirim.email/img/icon-email-template.svg"
            className="utility"
          />
          <ButtonMenu
            title="PREVIEW"
            img="https://aplikasi.kirim.email/img/icon-email-template.svg"
          />
          <ButtonMenu
            title="SETTINGS"
            img="https://aplikasi.kirim.email/img/icon-email-template.svg"
          />
          <ButtonMenu
            title="SAVING"
            img="https://aplikasi.kirim.email/img/icon-email-template.svg"
            className="saving"
          />
          <ButtonMenu
            title="X"
            img="https://aplikasi.kirim.email/img/icon-email-template.svg"
          />
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

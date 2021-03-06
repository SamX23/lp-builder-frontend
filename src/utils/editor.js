import grapesjs from "grapesjs";

const InitiateEditor = () => {
  const editor = grapesjs.init({
    container: "#builder-canvas",
    fromElement: true,
    height: "auto",
    width: "auto",
    storageManager: {
      id: "lpb-",
      type: "local",
      autosave: true,
      autoload: true,
      stepsBeforeSave: 1,
      storeComponents: true,
      storeStyles: true,
      storeHtml: true,
      storeCss: true,
    },
    panels: {
      defaults: [
        {
          id: "layers",
          el: ".panel__right",
          resizable: {
            maxDim: 500,
            minDim: 350,
            tc: 0,
            cl: 1,
            cr: 0,
            bc: 0,
            keyWidth: "flex-basis",
          },
        },
        {
          id: "panel-devices",
          el: ".panel__devices",
          buttons: [
            {
              id: "device-desktop",
              label: "<i class='las la-desktop'></i>",
              command: "set-device-desktop",
              active: true,
              togglable: false,
            },
            {
              id: "device-mobile",
              label: "<i class='las la-mobile'></i>",
              command: "set-device-mobile",
              togglable: false,
            },
          ],
        },
        {
          id: "panel-switcher",
          el: ".panel__switcher",
          buttons: [
            {
              id: "show-blocks",
              active: true,
              label: "<i class='las la-shapes'></i>",
              command: "show-blocks",
              togglable: false,
            },
            {
              id: "show-layers",
              active: true,
              label: "<i class='las la-layer-group'></i>",
              command: "show-layers",
              togglable: false,
            },
            {
              id: "show-style",
              active: true,
              label: "<i class='las la-palette'></i>",
              command: "show-styles",
              togglable: false,
            },
            {
              id: "show-traits",
              active: true,
              label: "<i class='las la-cog'></i>",
              command: "show-traits",
              togglable: false,
            },
          ],
        },
      ],
    },
    deviceManager: {
      devices: [
        {
          name: "Mobile",
          width: "320px",
          widthMedia: "480px",
        },
        {
          name: "Desktop",
          width: "95%",
          height: "95%",
          widthMedia: "1280px",
        },
      ],
    },
    blockManager: {
      appendTo: ".blocks-container",
      blocks: [
        {
          id: "image",
          label: "<i class='las la-image'></i><p>IMAGE</p>",
          select: true,
          content: { type: "image" },
          activate: true,
        },
        {
          id: "text",
          label: "<i class='las la-font'></i><p>TEXT</p>",
          content: '<div data-gjs-type="text">Insert text here</div>',
        },
        {
          id: "heading",
          label: "<i class='las la-heading'></i><p>HEADING</p>",
          content: '<h1 data-gjs-type="text">Insert heading here</h1>',
        },
      ],
    },
    layerManager: {
      appendTo: ".layers-container",
    },
    styleManager: {
      appendTo: ".styles-container",
      sectors: [
        {
          name: "Dimension",
          open: false,
          buildProps: ["width", "min-height", "padding", "margin"],
          properties: [
            {
              type: "integer",
              name: "The width",
              property: "width",
              units: ["px", "%"],
              defaults: "auto",
              min: 0,
            },
          ],
        },
        {
          name: "Extra",
          open: false,
          buildProps: ["background", "background-color", "box-shadow"],
          properties: [
            {
              id: "custom-prop",
              name: "Custom Label",
              property: "font-size",
              type: "select",
              defaults: "32px",
              options: [
                { value: "12px", name: "Tiny" },
                { value: "18px", name: "Medium" },
                { value: "32px", name: "Big" },
              ],
            },
          ],
        },
      ],
    },
    traitManager: {
      appendTo: ".traits-container",
    },
    selectorManager: {
      appendTo: ".styles-container",
    },
  });

  const blockManager = editor.BlockManager;
  const commands = editor.Commands;
  const panels = editor.Panels;

  // Adding Blocks
  blockManager.add("div", {
    label: "<i class='las la-folder'></i><p>SECTION</p>",
    content: {
      tagName: "div",
      attributes: { class: "gjs-block-section" },
      style: {
        height: "300px",
      },
      components: [
        {
          tagName: "div",
          content: "Drop your component here.",
        },
      ],
    },
  });
  blockManager.add("google-maps", {
    label: "<i class='las la-map'></i><p>MAPS</p>",
    content: {
      type: "map",
      style: {
        height: "350px",
      },
    },
  });

  // Adding Panels
  panels.addPanel({
    id: "panel-top",
    el: ".panel__top",
  });
  panels.addPanel({
    id: "basic-actions",
    el: ".panel__basic-actions",
    buttons: [
      {
        id: "visibility",
        active: true,
        className: "btn-toggle-borders",
        label: "<i class='las la-eye'></i><span>PREVIEW</span>",
        command: "sw-visibility",
      },
      {
        id: "export",
        className: "btn-open-export",
        label: "<i class='las la-file-code'></i><span>CODE</span>",
        command: "export-template",
        context: "export-template",
      },
      {
        id: "show-json",
        className: "btn-show-json",
        label: "<i class='las la-code'></i><span>JSON</span>",
        context: "show-json",
        command(editor) {
          editor.Modal.setTitle("Components JSON")
            .setContent(
              `<textarea style="width:100%; height: 250px;">
              ${JSON.stringify(editor.getComponents())}
            </textarea>`
            )
            .open();
        },
      },
    ],
  });

  // Adding Commands
  commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  });
  commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile"),
  });
  commands.add("show-blocks", {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getLayersEl(row) {
      return row.querySelector(".blocks-container");
    },
    run(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = "";
    },
    stop(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = "none";
    },
  });
  commands.add("show-layers", {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getLayersEl(row) {
      return row.querySelector(".layers-container");
    },
    run(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = "";
    },
    stop(editor, sender) {
      const lmEl = this.getLayersEl(this.getRowEl(editor));
      lmEl.style.display = "none";
    },
  });
  commands.add("show-styles", {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row");
    },
    getStyleEl(row) {
      return row.querySelector(".styles-container");
    },
    run(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = "";
    },
    stop(editor, sender) {
      const smEl = this.getStyleEl(this.getRowEl(editor));
      smEl.style.display = "none";
    },
  });
  commands.add("show-traits", {
    getTraitsEl(editor) {
      const row = editor.getContainer().closest(".editor-row");
      return row.querySelector(".traits-container");
    },
    run(editor, sender) {
      this.getTraitsEl(editor).style.display = "";
    },
    stop(editor, sender) {
      this.getTraitsEl(editor).style.display = "none";
    },
  });
};

export default InitiateEditor;

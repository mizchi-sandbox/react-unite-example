import React from "react";
import ReactDOM from "react-dom";
import { LayoutData, Windowed, EditableLayout } from "react-unite";

const initialLayoutData: LayoutData = {
  grid: {
    columns: ["1fr", "1fr"],
    rows: ["40px", "1fr", "1fr"],
    areas: [
      ["header", "header"],
      ["preview", "inspector"],
      ["assets", "inspector"]
    ]
  },
  windowMap: {
    "#scene": { displayName: "Scene", id: "#scene" },
    "#project": { displayName: "Project", id: "#project" },
    "#hierachy": { displayName: "Hierachy", id: "#hierachy" },
    "#inspector": { displayName: "Inspector", id: "#inspector" },
    "#services": { displayName: "Services", id: "#services" }
  },
  containers: [
    {
      id: "preview",
      displayName: "Preview",
      selectedId: "#scene",
      windowIds: ["#scene"]
    },
    {
      id: "assets",
      displayName: "Preview",
      selectedId: "#project",
      windowIds: ["#project", "#hierachy"]
    },
    {
      id: "inspector",
      displayName: "Inspector",
      selectedId: "#inspector",
      windowIds: ["#inspector", "#services"]
    }
  ]
};

// To fill window, Set css `html, body { margin: 0;}`
const MyLayout = () => {
  return (
    <Windowed>
      {(width, height) => (
        <EditableLayout
          width={width}
          height={height}
          layout={initialLayoutData}
          renderTab={data => {
            return <span>{data.displayName}</span>;
          }}
          renderWindow={win => {
            return (
              <div>
                {win.id}: {win.displayName}
              </div>
            );
          }}
        />
      )}
    </Windowed>
  );
};

const root = document.querySelector(".root");
ReactDOM.render(<MyLayout />, root);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_unite_1 = require("react-unite");
const initialLayoutData = {
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
    return (react_1.default.createElement(react_unite_1.Windowed, null, (width, height) => (react_1.default.createElement(react_unite_1.EditableLayout, { width: width, height: height, layout: initialLayoutData, renderTab: data => {
            return react_1.default.createElement("span", null, data.displayName);
        }, renderWindow: win => {
            return (react_1.default.createElement("div", null,
                win.id,
                ": ",
                win.displayName));
        } }))));
};
const root = document.querySelector(".root");
react_dom_1.default.render(react_1.default.createElement(MyLayout, null), root);

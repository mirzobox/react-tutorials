import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { jsx as _jsx } from "react/jsx-runtime";

const App = () => {
  // no third param, no working without second obj param
  return _jsx("h1", { id: "title", children: "React app" });
};

// ReactDOM.render(<App />, document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(_jsx(App, {}));

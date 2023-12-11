- Production artifact is dist folder
- Any function can be a component, if return value

- Old api
  import ReactDOM from "react-dom";
  ReactDOM.render(<App />, document.getElementById("root"));

- New api
  import { createRoot } from "react-dom/client";
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);

Brauzerlar JSXni tushunmaydi, tushunishi uchun biz kodimizni transpilation degan processdan o'tkazishimiz kerak.

- Transpilation process
  const App = () => {
  return <h1 id="title">React app</h1>;
  };
  const App = () => {
  return ReactDOM.createElement("h1", { id="title" }, "React app")

  Bu ham bir xil ishlaydi, faqat 3-parametrda kelgani kuchliroq ya'ni yutib chiqadi
  <!-- return ReactDOM.createElement("h1", { id="title", children: "React app" }) -->

  };

  Jarayonda taglar stringda beriladi, componentlarning o'zi reference sifatida beriladi.
  ReactDOM.createElement(App, { id="title" }, "React app")

- New transform JSX
  import { createRoot } from "react-dom/client";
  import { jsx as \_jsx } from "react/jsx-runtime";

  const App = () => {
  return \_jsx("h1", { id: "title", children: "React app" });
  };

  const root = createRoot(document.getElementById("root"));
  root.render(\_jsx(App, {}));a

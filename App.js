import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am h1 tag"),
//     React.createElement("h2", {}, "i am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "i am h1 tag two"),
//     React.createElement("h2", {}, "i am h2 tag two"),
//   ]),
// ]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", class: "heading" },
//   "Hello World from React"
// );

const parent =<h1>Welcome to React with jsx</h1>

const Header =()=>(<><h1>Header</h1><Footer /></>)
const Footer =()=><h1>Footer</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

console.log("parent", parent);
root.render(<Header />);


// root.render(heading);
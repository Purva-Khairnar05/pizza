import { createRoot } from "react-dom/client";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./index.css";

const root = createRoot(document.getElementById("root"));
const pathname = window.location.pathname;

console.log("Current pathname:", pathname);
if(pathname === "/") {
    root.render(<Home/>);
} else if(pathname === "/about") {
    root.render(<About/>);
}else if(pathname === "/contact") {
    root.render(<Contact/>);
}

  


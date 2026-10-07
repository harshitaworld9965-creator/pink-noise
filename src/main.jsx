import React from "react";
import ReactDOM from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import App from "./App.jsx";
import "./index.css";

// Register plugins ONCE, globally.
// useGSAP is registered too so GSAP knows about it for cleanup.
gsap.registerPlugin(ScrollTrigger, useGSAP);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
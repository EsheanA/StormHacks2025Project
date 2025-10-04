import { StrictMode } from "react";
import { createRoot } from "@react-three/fiber";
import "./index.css";
import Game from "./Game"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Game />
    </StrictMode>
)
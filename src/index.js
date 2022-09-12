import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Practise from "./practise";
import UsersPropsParent from "./UsersPropsParent";
import UsersPropsChild from "./UsersPropsChild";
import Usingjsonfile from "./Usingjsonfile";
import PropExample from "./PropExample";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UsersPropsChild />
    <br />
    <br />
    <br />

    <Practise />
    <br />
    <br />
    {/* <Colours /> */}
    <br />

    <UsersPropsParent />
    <br />
    <br />
    <br />

    <PropExample />
    <br />
    <br />
    <br />

    <App />

    <Usingjsonfile />
  </StrictMode>
);

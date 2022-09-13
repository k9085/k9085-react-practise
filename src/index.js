import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Practise from "./practise";
import UsersPropsParent from "./UsersPropsParent";
import UsersPropsChild from "./UsersPropsChild";
import Usingjsonfile from "./Usingjsonfile";
import FuncCompExample from "./FuncCompExample";
import Users from "./UserExampleUsingProps/Users";
import Users1 from "./UserExampleUsingProps/Users1";
import Users2 from "./UserExampleUsingProps/Users2";
import Users3 from "./UserExampleUsingProps/Users3";
import InterestParent from "./PracticeExamples/InterestParent";
import AccessingData from "./UsingJson/AccessingData";
import MethodGet from "./PracticeExamples/MethodGet";
import MethodPost from "./PracticeExamples/MethodPost";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MethodPost />
    <MethodGet />

    <AccessingData />

    <InterestParent />
    <br />
    <br />
    <br />

    <Users3 />
    <br />
    <br />
    <br />

    <Users2 />
    <br />
    <br />
    <br />

    <Users1 />
    <br />
    <br />
    <br />

    <Users />
    <br />
    <br />
    <br />

    <Practise />
    <br />
    <br />
    <br />

    <FuncCompExample />
    <br />
    <br />
    <br />

    <UsersPropsParent />
    <br />
    <br />
    <br />

    <UsersPropsChild />
    <br />
    <br />
    <br />

    <App />

    <Usingjsonfile />
  </StrictMode>
);

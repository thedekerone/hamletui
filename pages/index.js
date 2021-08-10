import { Fragment } from "react";
import { Login } from "../src/components/auth/Login";
import { Home } from "../src/components/Home";

export default function Index() {
  return (
    <Fragment>
      <Login></Login>
      <Home></Home>;
    </Fragment>
  );
}

import { Fragment } from "react";
import MainNaviation from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNaviation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;

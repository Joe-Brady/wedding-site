import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { PageUrl } from "../../../types";

interface Props {
  head: ReactElement;
  headImageSrc: string;
  children: ReactElement;
}

const Template = ({ children, head, headImageSrc }: Props): ReactElement => (
  <div>
    <div>
      <nav>
        <Link to={PageUrl.Home}>Homepage link</Link>
        <Link to={PageUrl.Home}>Homepage link</Link>
        <Link to={PageUrl.Home}>Homepage link</Link>
      </nav>
      <div>{head}</div>
      <img src={headImageSrc} />
    </div>

    <main>{children}</main>
  </div>
);

export default Template;

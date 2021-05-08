import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { PageUrl } from "../../../types";

import { Body, HeadContainer, HeadImage, Main } from "./styles";

interface Props {
  head: ReactElement;
  headImageSrc: string;
  children: ReactElement;
}

const Template = ({ children, head, headImageSrc }: Props): ReactElement => (
  <Body>
    <HeadImage src={headImageSrc} />

    <HeadContainer>
      <nav>
        <Link to={PageUrl.Home}>Homepage link</Link>
        <Link to={PageUrl.Home}>Homepage link</Link>
        <Link to={PageUrl.Home}>Homepage link</Link>
      </nav>
      <div>{head}</div>
    </HeadContainer>

    <Main>{children}</Main>
  </Body>
);

export default Template;

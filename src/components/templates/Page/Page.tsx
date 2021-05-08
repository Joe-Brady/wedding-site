import React, { ReactElement } from "react";
import { PageUrl } from "../../../types";

import { Body, Nav, NavLink, Main, HeadContainer, HeadImage } from "./styles";

interface Props {
  head: ReactElement;
  headImageSrc: string;
  children: ReactElement;
}

const Template = ({ children, head, headImageSrc }: Props): ReactElement => (
  <Body>
    <HeadImage src={headImageSrc} />

    <HeadContainer>
      <Nav>
        <NavLink to={PageUrl.Home}>On the day</NavLink>
        <NavLink to={PageUrl.Home}>Useful information</NavLink>
        <NavLink to={PageUrl.Home}>About us</NavLink>
      </Nav>
      <div>{head}</div>
    </HeadContainer>

    <Main>{children}</Main>
  </Body>
);

export default Template;

import React, { ReactElement } from "react";
import { PageUrl } from "../../../types";

import {
  Body,
  Nav,
  NavLink,
  Main,
  HeadContainer,
  HeadImage,
  HeadImageContainer,
} from "./styles";

interface Props {
  head: ReactElement;
  headImageSrc: string;
  children: ReactElement;
}

const Template = ({ children, head, headImageSrc }: Props): ReactElement => (
  <Body>
    <HeadImageContainer>
      <HeadImage src={headImageSrc} />
    </HeadImageContainer>

    <HeadContainer>
      <Nav>
        <NavLink to={PageUrl.Home}>RSVP</NavLink>
        <NavLink to={PageUrl.OnTheDay}>On the day</NavLink>
        <NavLink to={PageUrl.AboutUs}>About us</NavLink>
      </Nav>
      <div>{head}</div>
    </HeadContainer>

    <Main>{children}</Main>
  </Body>
);

export default Template;

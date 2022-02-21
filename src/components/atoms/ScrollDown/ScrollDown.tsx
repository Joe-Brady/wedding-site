import React, { ReactElement } from "react";
import Typography from "../../core/Typography/Typography";
import { Chevron, ChevronContainer, ScrollDownContainer } from "./styles";

const ScrollDown = (): ReactElement => (
  <ScrollDownContainer>
    <ChevronContainer>
      <Chevron />
    </ChevronContainer>
    <Typography variant="body" text="Scroll down" />
  </ScrollDownContainer>
);

export default ScrollDown;

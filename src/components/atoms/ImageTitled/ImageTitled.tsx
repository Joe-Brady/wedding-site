import React, { ReactElement } from "react";
import styled from "styled-components";
import theme from "../../../theme";
import Typography from "../../core/Typography/Typography";

interface Props {
  src: string;
  title: string;
}

const Container = styled("div")`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  border: 1rem solid ${theme.highlight};
`;

const Overlay = styled("div")`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  transition: 0.5s;
`;

const ImageTitled = ({ src, title }: Props): ReactElement => {
  return (
    <Container>
      <img src={src} width="100%" />
      <Overlay>
        <Typography
          variant="h2"
          text={title}
          style={{ color: "white", textAlign: "center" }}
        />
      </Overlay>
    </Container>
  );
};

export default ImageTitled;

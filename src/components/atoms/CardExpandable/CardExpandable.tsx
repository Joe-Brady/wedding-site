import React, { ReactElement, useState } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardContent, Collapse } from "@mui/material";
import Typography from "../../core/Typography/Typography";
import { ExpandContainer } from "./styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  collapsedContent: ReactElement;
  expandedContent: ReactElement;
}

const CardExpandable = ({
  collapsedContent,
  expandedContent,
}: Props): ReactElement => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <CardContent>
        {collapsedContent}

        <ExpandContainer
          style={{ cursor: "pointer" }}
          onClick={handleExpandClick}
        >
          <Typography
            variant="h3"
            text={expanded ? "Click to minimise" : "Click to read on..."}
            style={{ marginTop: "1rem" }}
          />

          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </ExpandContainer>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {expandedContent}
        </Collapse>
      </CardContent>
    </div>
  );
};

export default CardExpandable;

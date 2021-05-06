import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { PageUrl } from "../../../types";
import Page from "../../templates/Page/Page";
import Typography from "../../core/Typography/Typography";

const RsvpSuccess = (): ReactElement => (
  <Page head={<Typography variant="h1" text="Thank you!" />} headImageSrc="">
    <div>
      <Typography
        variant="body"
        text="You have successfully sent your RSVP. We'd love for you to have a look through the rest of the website..."
      />
      <Link to={PageUrl.OnTheDay}>Show me more!</Link>
    </div>
  </Page>
);

export default RsvpSuccess;

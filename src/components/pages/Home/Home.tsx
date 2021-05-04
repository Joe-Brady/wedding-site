import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { PageUrl } from "../../../types";
import Page from "../../templates/Page/Page";
import Typography from "../../core/Typography/Typography";

const Home = (): ReactElement => (
  <Page head={<h1>Jasmine and Joseph</h1>} headImageSrc="">
    <div>
      <Typography variant="h1" text="Hello!" />
      <Link to={PageUrl.Home}>Homepage link</Link>
    </div>
  </Page>
);

export default Home;

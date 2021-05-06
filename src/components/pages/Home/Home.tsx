import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { PageUrl } from "../../../types";
import Page from "../../templates/Page/Page";
import Typography from "../../core/Typography/Typography";

const Home = (): ReactElement => (
  <Page
    head={<Typography variant="h1" text="Jasmine and Joseph" />}
    headImageSrc=""
  >
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Your Name: <input type="text" name="name" />
        </label>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
        <label>
          Your Role:{" "}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      <Link to={PageUrl.Home}>Homepage link</Link>
    </div>
  </Page>
);

export default Home;

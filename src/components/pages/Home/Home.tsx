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
      <form name="RSVP" method="POST">
        <input type="hidden" name="form-name" value="RSVP" />
        <label>
          Can you attend?{" "}
          <select name="Attending">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          How many people?{" "}
          <input type="number" name="Number of people" min="0" max="50" />
        </label>
        <label>
          Write the names of the people attending{" "}
          <textarea name="Names"></textarea>
        </label>
        <button type="submit">Send RSVP</button>
      </form>
      <Link to={PageUrl.Home}>Homepage link</Link>
    </div>
  </Page>
);

export default Home;

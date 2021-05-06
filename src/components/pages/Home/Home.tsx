import React, { ReactElement, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";

import { PageUrl } from "../../../types";
import Page from "../../templates/Page/Page";
import Typography from "../../core/Typography/Typography";

const Home = (): ReactElement => {
  const history = useHistory();

  function submitRsvp(event: FormEvent) {
    event.preventDefault;
    history.push(PageUrl.RsvpSuccess);
  }

  return (
    <Page
      head={<Typography variant="h1" text="Jasmine and Joseph" />}
      headImageSrc=""
    >
      <div>
        <form name="RSVP" method="POST" onSubmit={submitRsvp}>
          <input type="hidden" name="form-name" value="RSVP" />
          <label>
            Can you attend?
            <select name="Attending">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label>
            How many people can attend?
            <input type="number" name="Number of people" min="0" max="20" />
          </label>
          <label>
            What are your full names?
            <input type="text" name="Names" />
          </label>
          <button type="submit">Send RSVP</button>
        </form>
        <Link to={PageUrl.Home}>Homepage link</Link>
      </div>
    </Page>
  );
};

export default Home;

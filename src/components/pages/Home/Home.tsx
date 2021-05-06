import React, { ReactElement, FormEvent } from "react";
import { Link } from "react-router-dom";

import { PageUrl } from "../../../types";
import Page from "../../templates/Page/Page";
import Typography from "../../core/Typography/Typography";

const Home = (): ReactElement => {
  async function submitRsvp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElements = Array.from(
      event.currentTarget.elements
    ) as HTMLInputElement[];

    const urlEncodedForm: string = formElements
      .filter((elem: HTMLInputElement) => !!elem.value)
      .map(
        (element) =>
          encodeURIComponent(element.name) +
          "=" +
          encodeURIComponent(element.value || "")
      )
      .join("&");

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: urlEncodedForm,
    })
      .then(() => {
        alert("Success!");
      })
      .catch(() => {
        alert("Error occurred. Please try again.");
      });
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

import React, { ReactElement, FormEvent } from "react";
import { Link } from "react-router-dom";

import { PageUrl } from "../../../types";
import Page from "../../templates/Page/Page";
import Typography from "../../core/Typography/Typography";
import TextInput from "../../atoms/TextInput/TextInput";
import NumberInput from "../../atoms/NumberInput/NumberInput";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import { Label, Form } from "./styles";

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
        <Form name="RSVP" method="POST" onSubmit={submitRsvp}>
          <input type="hidden" name="form-name" value="RSVP" />
          <Label>
            <Typography variant="h3" text="Can you attend?" />
            <Select
              name="Attending"
              options={[
                { value: "Yes", text: "Yes" },
                { value: "No", text: "No" },
              ]}
            />
          </Label>
          <Label>
            <Typography variant="h3" text="How many people can attend?" />
            <NumberInput
              name="Number of people"
              size={12}
              placeholder="Number"
              min={0}
              max={20}
            />
          </Label>
          <Label>
            <Typography variant="h3" text="What are your full names?" />
            <TextInput name="Names" placeholder="Names (all attendees)" />
          </Label>
          <Button text="Submit RSVP" disabled={false} />
        </Form>
        <Link to={PageUrl.Home}>Homepage link</Link>
      </div>
    </Page>
  );
};

export default Home;

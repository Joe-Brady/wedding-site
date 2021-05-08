import React, { useState, ReactElement } from "react";
import { Link } from "react-router-dom";

import { PageUrl } from "../../../types";
import Page from "../../templates/Page/Page";
import Typography from "../../core/Typography/Typography";
import TextInput from "../../atoms/TextInput/TextInput";
import NumberInput from "../../atoms/NumberInput/NumberInput";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import { PageTitleContainer, Label, Form } from "./styles";
import { submitRsvp } from "./utils";

const Home = (): ReactElement => {
  const [rsvpStep, setRsvpStep] = useState(1);
  const nextStep = () => setRsvpStep((currentStep) => currentStep + 1);

  return (
    <Page
      head={
        <PageTitleContainer>
          <Typography variant="h1" text="Jasmine" />
          <Typography variant="h2" text="and" />
          <Typography variant="h1" text="Joseph" />
        </PageTitleContainer>
      }
      headImageSrc="https://www.pngkit.com/png/full/3-30878_water-color-background-png-watercolor-background-png-orange.png"
    >
      <div>
        <Typography variant="h2" text="RSVP" style={{ textAlign: "center" }} />

        <Form name="RSVP" method="POST" onSubmit={submitRsvp}>
          <input type="hidden" name="form-name" value="RSVP" />
          {rsvpStep === 1 && (
            <Label>
              <Typography variant="h3" text="Can you attend?" />
              <Select
                name="Attending"
                options={[
                  { value: "Yes", text: "Yes" },
                  { value: "No", text: "No" },
                ]}
              />
              <Button text="Next >" onClick={nextStep} />
            </Label>
          )}

          {rsvpStep === 2 && (
            <Label>
              <Typography variant="h3" text="How many people can attend?" />
              <NumberInput
                name="Number of people"
                size={12}
                placeholder="Number"
                min={0}
                max={20}
              />
              <Button text="Next >" onClick={nextStep} />
            </Label>
          )}

          {rsvpStep === 3 && (
            <Label>
              <Typography variant="h3" text="What are your full names?" />
              <TextInput name="Names" placeholder="Names (all attendees)" />
              <Button text="Submit RSVP" disabled={false} />
            </Label>
          )}
        </Form>

        <Link to={PageUrl.Home}>Homepage link</Link>
      </div>
    </Page>
  );
};

export default Home;

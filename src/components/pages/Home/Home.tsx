import React, { useState, ReactElement } from "react";

import Page from "../../templates/Page/Page";
import Typography from "../../core/Typography/Typography";
import TextInput from "../../atoms/TextInput/TextInput";
import NumberInput from "../../atoms/NumberInput/NumberInput";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import { PageTitleContainer, Label, Form } from "./styles";
import { submitRsvp } from "./utils";
import Tick from "./Tick";

const Home = (): ReactElement => {
  const [rsvpStep, setRsvpStep] = useState(1);
  const [attending, setAttending] = useState(true);

  const nextStep = () => setRsvpStep((currentStep) => currentStep + 1);
  const lastStep = () => setRsvpStep(3);

  const hiddenStyle = { display: "none" };

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

        <Form
          name="RSVP"
          method="POST"
          onSubmit={(e) => {
            submitRsvp(e).then(nextStep);
          }}
        >
          <input type="hidden" name="form-name" value="RSVP" />

          <Label style={rsvpStep !== 1 ? hiddenStyle : {}}>
            <Typography
              variant="h3"
              text="Can you attend?"
              style={{ gridArea: "question", margin: 0, textAlign: "center" }}
            />
            <Select
              name="Attending"
              options={[
                { value: "Yes", text: "Yes" },
                { value: "No", text: "No" },
              ]}
              onChange={(event) =>
                event.target.value === "Yes"
                  ? setAttending(true)
                  : setAttending(false)
              }
            />
            <Button text="Next >" onClick={attending ? nextStep : lastStep} />
          </Label>

          <Label style={rsvpStep !== 2 ? hiddenStyle : {}}>
            <Typography
              variant="h3"
              text="How many people can attend?"
              style={{ gridArea: "question", margin: 0, textAlign: "center" }}
            />
            <NumberInput
              name="Number of people"
              size={12}
              placeholder="Number"
              min={0}
              max={20}
            />
            <Button text="Next >" onClick={nextStep} />
          </Label>

          <Label style={rsvpStep !== 3 ? hiddenStyle : {}}>
            <div style={{ gridArea: "question" }}>
              <Typography
                variant="h3"
                text="What are your names?"
                style={{ margin: 0, textAlign: "center" }}
              />
              {attending && (
                <Typography
                  variant="body"
                  text="Include each person's full name for place settings"
                  style={{ marginBottom: 0, textAlign: "center" }}
                />
              )}
            </div>

            <TextInput name="Names" placeholder="Names" />
            <Button submit text="Submit RSVP" disabled={false} />
          </Label>

          {rsvpStep === 4 && (
            <>
              <Tick />
              <Typography variant="h3" text="Thank you!" />
            </>
          )}
        </Form>

        {/* <Link to={PageUrl.Home}>Homepage link</Link> */}
      </div>
    </Page>
  );
};

export default Home;

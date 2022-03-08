import React, { useState, ReactElement } from "react";

import Typography from "../../core/Typography/Typography";
import Button from "../../atoms/Button/Button";
import Select from "../../atoms/Select/Select";
import {
  PageTitleContainer,
  FormStage,
  Form,
  NamesContainer,
  HomeContainer,
  NavContainer,
} from "./styles";
import { submitRsvp } from "./utils";
import Tick from "./Tick";
import { HeadImage, HeadImageContainer } from "../styles";
import ScrollDown from "../../atoms/ScrollDown/ScrollDown";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";

interface Person {
  fullName: string;
}

const Home = (): ReactElement => {
  const [rsvpStep, setRsvpStep] = useState("CAN_YOU_ATTEND");
  const [attending, setAttending] = useState<boolean>();
  const [people, setPeople] = useState<Person[]>([]);
  const [eveningGuest, setEveningGuest] = useState<boolean>();
  const [
    eveningGuestAttendingCeremony,
    setEveningGuestAttendingCeremony,
  ] = useState<boolean>();

  const hiddenStyle = { display: "none" };

  return (
    <div>
      <HeadImageContainer>
        <HeadImage src="https://res.cloudinary.com/dqqwahudr/image/upload/v1645363106/flowers_wlxnim.png" />
      </HeadImageContainer>

      <PageTitleContainer>
        <NamesContainer>
          <Typography variant="h1" text="Jasmine" smallCaps />
          <Typography variant="h2" text="and" fontStyle="italic" />
          <Typography variant="h1" text="Joe" smallCaps />
        </NamesContainer>

        <Typography variant="h4" text="Sunday 29th May 2022" />
        <Typography variant="h4" text="Bodleian Library, Oxford" />
      </PageTitleContainer>

      <ScrollDown />

      <HomeContainer>
        <Typography
          variant="h2"
          text="Menu"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <NavContainer>
          <Typography variant="h4link" text="RSVP" href="#RSVP" />
          <Typography variant="h4link" text="Travel" href="#TRAVEL" />
          <Typography variant="h4link" text="Accommodation" href="#ACCOM" />
          <Typography variant="h4link" text="Our Story" href="#STORY" />
          <Typography variant="h4link" text="Contact Us" href="#CONTACT" />
          <Typography variant="h4link" text="Our Map of Oxford" href="#MAP" />
        </NavContainer>

        <Typography
          id="RSVP"
          variant="h2"
          text="RSVP"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Form
          name="RSVPFORM"
          method="POST"
          onSubmit={(e) => {
            submitRsvp(e).then((response) => {
              if (response.ok) {
                setRsvpStep("THANK_YOU");
              } else {
                setRsvpStep("ERROR");
              }
            });
          }}
        >
          <input type="hidden" name="form-name" value="RSVPFORM" />

          <FormStage style={rsvpStep !== "CAN_YOU_ATTEND" ? hiddenStyle : {}}>
            <Typography
              variant="h3"
              text="Can you attend?"
              style={{ gridArea: "question", margin: 0, textAlign: "center" }}
            />
            <Select
              name="attending"
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
            <Button
              text="Next >"
              disabled={attending === undefined}
              onClick={
                attending
                  ? () => setRsvpStep("TYPE_OF_GUEST")
                  : () => setRsvpStep("PEOPLE")
              }
            />
          </FormStage>

          <FormStage style={rsvpStep !== "TYPE_OF_GUEST" ? hiddenStyle : {}}>
            <Typography
              variant="h3"
              text="Are you a full-day guest or an evening guest?"
              style={{ gridArea: "question", margin: 0, textAlign: "center" }}
            />
            <Select
              name="type_of_guest"
              options={[
                { value: "Full day", text: "Full day" },
                { value: "Evening", text: "Evening" },
              ]}
              onChange={(event) =>
                event.target.value === "Evening"
                  ? setEveningGuest(true)
                  : setEveningGuest(false)
              }
            />
            <Button
              text="Next >"
              disabled={eveningGuest === undefined}
              onClick={
                eveningGuest
                  ? () => setRsvpStep("EVENING_GUEST_ATTENDING_CEREMONY")
                  : () => setRsvpStep("PEOPLE")
              }
            />
          </FormStage>

          <FormStage
            style={
              rsvpStep !== "EVENING_GUEST_ATTENDING_CEREMONY" ? hiddenStyle : {}
            }
          >
            <div
              style={{ gridArea: "question", margin: 0, textAlign: "center" }}
            >
              <Typography
                variant="h3"
                text="Will you also attend the ceremony?"
              />
              <Typography
                variant="body"
                text="Evening guests are welcome to attend the ceremony (arrive 12-12:30 at Convocation House). Please feel free to have lunch/dinner in Oxford and we will feed you chips and sausage butties around 9pm!"
              />
            </div>

            <Select
              name="evening_guest_attending_ceremony"
              options={[
                { value: "No", text: "No, evening only" },
                { value: "Yes", text: "Yes, ceremony + evening" },
              ]}
              onChange={(event) =>
                event.target.value === "Yes"
                  ? setEveningGuestAttendingCeremony(true)
                  : setEveningGuestAttendingCeremony(false)
              }
            />
            <Button
              text="Next >"
              disabled={eveningGuestAttendingCeremony === undefined}
              onClick={() => setRsvpStep("PEOPLE")}
            />
          </FormStage>

          <FormStage style={rsvpStep !== "PEOPLE" ? hiddenStyle : {}}>
            <div>
              <Typography
                variant="h3"
                text={
                  attending
                    ? "Who is attending?"
                    : "We're sorry you can't make it! Hopefully we can see you another time."
                }
                style={{ margin: 0, marginBottom: "2rem", textAlign: "center" }}
              />

              {!attending && (
                <Typography
                  variant="body"
                  text="Click 'Add person' for each person who can't come"
                  style={{
                    margin: 0,
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                />
              )}
            </div>

            {people.map((person, index) => (
              <div key={`person-details-${index}`}>
                <Typography
                  variant="h4"
                  text={`Person ${index + 1}`}
                  style={{
                    margin: 0,
                    marginBottom: "2rem",
                    textAlign: "center",
                  }}
                />

                <Typography
                  variant="body"
                  text="Full name (including surname):"
                />

                <TextField
                  name={`person_${index}_full_name`}
                  placeholder="e.g. John Smith"
                  required
                  fullWidth
                />

                {eveningGuest === false && attending && (
                  <div style={{ marginBottom: "2rem" }}>
                    <Typography
                      variant="body"
                      text="Dietary requirements for this person:"
                    />

                    <FormGroup>
                      <Checkbox
                        name={`person_${index}_dietary_vegetarian`}
                        label="Vegetarian"
                      />
                      <Checkbox
                        name={`person_${index}_dietary_vegan`}
                        label="Vegan"
                      />
                      <Checkbox
                        name={`person_${index}_dietary_gluten_free`}
                        label="Gluten free"
                      />
                      <Checkbox
                        name={`person_${index}_dietary_nut_free`}
                        label="Nut free"
                      />
                      <Checkbox
                        name={`person_${index}_dietary_dairy`}
                        label="Dairy free"
                      />
                    </FormGroup>

                    <br />
                    <TextField
                      name={`person_${index}_dietary_other`}
                      placeholder="Other (please specify)"
                      fullWidth
                    />
                  </div>
                )}
              </div>
            ))}

            <div>
              <Button
                text={people.length < 1 ? "Add person" : "Add another person"}
                onClick={() =>
                  setPeople((currentPeople) => [
                    ...currentPeople,
                    { fullName: "" },
                  ])
                }
              />

              <Button
                submit
                text="Submit RSVP"
                disabled={people.length === 0}
              />
            </div>
          </FormStage>

          {rsvpStep === "THANK_YOU" && (
            <>
              <Tick />
              <Typography variant="h3" text="Thank you!" />
            </>
          )}

          {rsvpStep === "ERROR" && (
            <>
              <Typography variant="h3" text="Error" style={{ color: "red" }} />
              <Typography
                variant="body"
                text="Oops... something went wrong while submitting the RSVP. Joe's very sorry!"
              />
              <Typography
                variant="body"
                text="Please send us the RSVP directly instead to 07500 058253."
              />
            </>
          )}
        </Form>

        <Typography
          id="TRAVEL"
          variant="h2"
          text="Travel"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          id="ACCOM"
          variant="h2"
          text="Accommodation"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          id="STORY"
          variant="h2"
          text="Our Story"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          id="CONTACT"
          variant="h2"
          text="Contact Us"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          id="MAP"
          variant="h2"
          text="Our Map of Oxford"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          variant="h3"
          text="Everything from restaurants and landmarks, to the locations of our favourite Oxford memories."
          style={{
            textAlign: "center",
            width: "40rem",
            maxWidth: "80%",
            margin: "auto",
            marginBottom: "2rem",
          }}
        />

        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1ryUwhQ-1Age4NVPcpsO7FURnSFa2SHE0&ehbc=2E312F"
          width="100%"
          height="600"
        ></iframe>
      </HomeContainer>
    </div>
  );
};

export default Home;

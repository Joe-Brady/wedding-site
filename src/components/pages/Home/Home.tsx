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
  NavAndImage,
  Tulip,
  Leaf,
  TextBlock,
  AccomContainer,
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
        <HeadImage src="https://res.cloudinary.com/dqqwahudr/image/upload/v1646773057/flowers_zdwe3t.png" />
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
        <NavAndImage>
          <Tulip src="https://res.cloudinary.com/dqqwahudr/image/upload/v1646774796/tulip_mevduy.png" />
          <Leaf src="https://res.cloudinary.com/dqqwahudr/image/upload/v1646775769/leaf_y4g3xt.png" />
          <NavContainer>
            <Typography variant="h4link" text="RSVP" href="#RSVP" />
            <Typography variant="h4link" text="Our Story" href="#STORY" />
            <Typography variant="h4link" text="Photos" href="#PHOTOS" />
            <Typography variant="h4link" text="Travel" href="#TRAVEL" />
            <Typography variant="h4link" text="Accommodation" href="#ACCOM" />
            <Typography variant="h4link" text="Contact Us" href="#CONTACT" />
            <Typography variant="h4link" text="Our Map of Oxford" href="#MAP" />
          </NavContainer>
        </NavAndImage>

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
              document.querySelector("#RSVP")?.scrollIntoView();
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
                  style={{ marginBottom: "1rem" }}
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
          id="STORY"
          variant="h2"
          text="Our Story"
          style={{ textAlign: "center", marginTop: "6rem" }}
        />

        <TextBlock>
          <Typography variant="body" text="TODO" />
        </TextBlock>

        <Typography
          id="PHOTOS"
          variant="h2"
          text="Photos"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          id="PHOTOS"
          variant="h3"
          text="Check back here after the wedding!"
          style={{
            textAlign: "center",
          }}
        />

        <Typography
          id="TRAVEL"
          variant="h2"
          text="Travel"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <TextBlock>
          <Typography variant="h3" text="Arriving by car" />

          <Typography
            variant="body"
            text="Oxford is a tricky city to navigate by car! We strongly recommend using any of the three Park-and-Ride locations (Thornhill, Redbridge, Seacourt). Parking is great value, and there are regular buses to central Oxford."
          />

          <Typography
            variant="body"
            text="Alternatively, if you would like to park in central Oxford (and if your hotel doesn't have its own spaces, which is common), there are three main car parks we'd recommend: Westgate (the main shopping mall, this has the most space and is indoors), Oxpens (a small multi-storey), and Worcester Street (medium-size, outdoors). Expect to pay £25 or more for 24 hours, though!"
          />

          <Typography variant="h3" text="Arriving by train" />

          <Typography
            variant="body"
            text="Oxford's train station is a 15-minute walk from the city centre. Buses are regular from just outside and many go via the centre."
          />

          <Typography variant="h3" text="Getting around the city" />

          <Typography
            variant="body"
            text="Oxford is a fairly small city and easy enough to walk around - just mind the cobbles!"
          />

          <Typography
            variant="body"
            text="For anything outside the main area of central Oxford, Royal Cars are the best taxi service and great value (01865 777333). Download their app for an Uber-like experience. Buses are regular and reasonable value."
          />
        </TextBlock>

        <Typography
          id="ACCOM"
          variant="h2"
          text="Accommodation"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <TextBlock>
          <Typography
            variant="h3"
            text="There are a fair few hotels and AirBnBs around Oxfordshire. Here's a few hotels that we would recommend checking out first."
          />
        </TextBlock>

        <AccomContainer>
          <div>
            <Typography variant="h3" text="Near the ceremony" />
            <Typography variant="body" text="Premier Inn Oxford (££)" />
            <Typography variant="body" text="Vanbrugh House Hotel (£££)" />
            <Typography variant="body" text="Old Parsonage (££££)" />
            <Typography variant="body" text="Old Bank Hotel (££££)" />
          </div>

          <div>
            <Typography variant="h3" text="Near the party" />
            <Typography variant="body" text="Travelodge Oxford Peartree (£)" />
            <Typography variant="body" text="easyHotel Oxford (£)" />
          </div>

          <div>
            <Typography variant="h3" text="Slightly further afield" />
            <Typography variant="body" text="voco Oxford Spires (££)" />
            <Typography variant="body" text="Jurys Inn Oxford (££)" />
            <Typography variant="body" text="Holiday Inn Oxford (££)" />
          </div>
        </AccomContainer>

        <Typography
          id="CONTACT"
          variant="h2"
          text="Contact Us"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <TextBlock>
          <Typography
            variant="h3"
            text="Feel free to drop us a text or a WhatsApp message if you have any questions!"
          />

          <Typography variant="body" text="Joe: 07500 058253" />
          <Typography variant="body" text="Jasmine: 07824 332447" />
        </TextBlock>

        <Typography
          id="MAP"
          variant="h2"
          text="Our Map of Oxford"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          variant="h3"
          text="From restaurants and landmarks, to the locations of our favourite Oxford memories. Each point on the map has a story..."
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

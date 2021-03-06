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
  StoryImage,
  StoryImageTwoUp,
  PolaroidGrid,
  MapIcons,
} from "./styles";
import { submitRsvp } from "./utils";
import Tick from "./Tick";
import { HeadImage, HeadImageContainer } from "../styles";
import ScrollDown from "../../atoms/ScrollDown/ScrollDown";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import CardExpandable from "../../atoms/CardExpandable/CardExpandable";
import theme from "../../../theme";

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
        <HeadImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_1280/v1646773057/flowers_zdwe3t.png" />
      </HeadImageContainer>

      <PageTitleContainer>
        <NamesContainer>
          <Typography variant="h1" text="Jasmine" smallCaps />
          <Typography variant="h2" text="and" fontStyle="italic" />
          <Typography variant="h1" text="Joe" smallCaps />
        </NamesContainer>

        <Typography variant="h4" text="Sunday 29th May 2022" />
        <Typography variant="h4" text="Oxford" />
      </PageTitleContainer>

      <ScrollDown />

      <HomeContainer>
        <NavAndImage>
          <Tulip src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_761/v1646774796/tulip_mevduy.png" />
          <Leaf src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_349/v1646775769/leaf_y4g3xt.png" />
          <NavContainer>
            <Typography variant="h4link" text="RSVP" href="#RSVP" />
            <Typography variant="h4link" text="Our Story" href="#STORY" />
            <Typography variant="h4link" text="On the Day" href="#ON_THE_DAY" />
            <Typography variant="h4link" text="Travel" href="#TRAVEL" />
            <Typography variant="h4link" text="Accommodation" href="#ACCOM" />
            <Typography variant="h4link" text="Contact Us" href="#CONTACT" />
            <Typography variant="h4link" text="Photos" href="#PHOTOS" />
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
                { value: "Evening", text: "Evening (+ ceremony optional)" },
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
                text="Evening guests are welcome to attend the ceremony (arrive 12:30 at Convocation House, ceremony starts at 1pm). Please feel free to have lunch/dinner in Oxford and we will feed you chips and sausage butties around 9pm!"
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
                    : "We are sorry you can't make it! Hopefully we can see you another time."
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
                text="Oops... something went wrong while submitting the RSVP. Joe is very sorry!"
              />
              <Typography
                variant="body"
                text="Please send us the RSVP directly instead to 07500 058253."
              />
            </>
          )}
        </Form>

        <TextBlock style={{ marginTop: "6rem" }}>
          <CardExpandable
            collapsedContent={
              <>
                <Typography
                  id="STORY"
                  variant="h2"
                  text="Our Story"
                  style={{ textAlign: "center" }}
                />

                <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_600/v1647384950/polaroid-venice-3_ieyvub.png" />

                <Typography
                  variant="body"
                  text="Joe and Jasmine were born in the same hospital, Southampton Princess Anne, two years apart."
                />
                <Typography
                  variant="body"
                  text="Jasmine grew up on the south coast and developed a passion for everything academic and art-related. She also spent a toe-numbing amount of time figure skating and enjoyed summers on the local beach, having barbecues and swinging from the most dangerous-looking trees she could find."
                />

                <Typography
                  variant="body"
                  text="Joe grew up near Bristol, loved maths and music, and played a lot of Irish music ??? both with his dad, and with his band One String Loose. He played as many gigs as he could get out of school for, mostly spending summers waking up in a tent at the next folk festival."
                />
              </>
            }
            expandedContent={
              <>
                <StoryImageTwoUp>
                  <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_477/v1647386044/jasmine-drink_gqtgh1.png" />
                  <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_477/v1647386044/joe-young_uceumx.png" />
                </StoryImageTwoUp>

                {/* <StoryImageTwoUp>
                  <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/v1647387156/joe-whistle_jkcqk6.png" />
                  <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/v1647387156/joe-whistle_jkcqk6.png" />
                </StoryImageTwoUp> */}

                <Typography
                  variant="body"
                  text="Fast-forward to 2012. Jasmine had been offered a place at the University of Oxford, studying Classical Archaeology and Ancient History. Joe joined SAE Institute (School of Audio Engineering) just outside Oxford."
                />

                <StoryImageTwoUp>
                  <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_477/v1647384945/polaroid-somerville_crpihe.png" />
                  <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_477/v1647384950/polaroid-sae_zewe48.png" />
                </StoryImageTwoUp>

                <Typography
                  variant="body"
                  text="Joe???s university didn???t really put on a proper fresher???s week, so he got in touch with an old friend of his, Rowan, who he knew from a place called the Hibernia Centre in Avonmouth where Irish music was taught in an echoey community hall. Joe knew Rowan was in her second year at the University of Oxford (studying Classics) and would likely know the ins-and-outs of any University parties."
                />

                <Typography
                  variant="body"
                  text="As it happens, two weeks after the very first Michelmas term started, Rowan hosted a ???Romans versus Barbarians??? themed fancy-dress party in the Ioannou Classics centre and filled it with a whole host of lovely people, scooping cupfuls of probably-not-so-lovely alco-pop from a large bucket. Several hours and a few too many drinks in, Joe had made some great acquaintances in Uxue, Rachel, and Anu, who would later that same night introduce Joe to their friend Jasmine, who lived in the same hall as them in Somerville College."
                />

                <StoryImageTwoUp>
                  <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_477/v1647384945/polaroid-ball_rndrpe.png" />
                  <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_477/v1647384946/polaroid-barbarian_xmh9jm.png" />
                </StoryImageTwoUp>

                <Typography
                  variant="body"
                  text="They immediately clicked. When Joe went home to his housemates in Fairacres Road that night, he told them that he???d just met his dream girl. Nearly ten years later after some incredible times at University, Jasmine and Joe have made a home together in Brixton, where they have hopefully found a balance between enjoying everything London has to offer and watching Ru Paul on Netflix. Despite having spent two years working from home together, they are more in love than ever."
                />
                <Typography
                  variant="body"
                  text="Jasmine worked as an Assistant Curator for a few years at various London museums and galleries and is now nearing the end of her PhD, specialising in Italian Renaissance drawings. She has dreams to be a Curator of drawings, or ideally be director of a museum so that she can add more carrot cake to the caf?? menu. Joe learned to write code and is now a freelance software developer. He has dreams to write code for his own ideas, to travel the world, and to eat as much of Jasmine???s baking as possible."
                />
              </>
            }
          />
        </TextBlock>

        <div style={{ padding: "1rem" }}>
          <div
            style={{
              padding: "2rem 1rem",
              border: `1rem solid ${theme.highlight}`,
              margin: "auto",
              marginTop: "6rem",
              paddingTop: "1rem",
              width: "fit-content",
              maxWidth: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography
              id="ON_THE_DAY"
              variant="h2"
              text="On the Day"
              style={{ textAlign: "center" }}
            />

            <div style={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                text="The Ceremony"
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  paddingBottom: 0,
                }}
              />

              <Typography
                variant="body"
                text="Convocation House"
                style={{ margin: 0 }}
              />
              <Typography
                variant="body"
                text="Bodleian Library"
                style={{ margin: 0 }}
              />
              <Typography
                variant="body"
                text="Broad Street"
                style={{ margin: 0 }}
              />
              <Typography variant="body" text="Oxford" style={{ margin: 0 }} />
              <Typography variant="body" text="OX1 3BG" style={{ margin: 0 }} />

              <a href="https://goo.gl/maps/Ew48J6vdHQaqtT1y9" target="_blank">
                <Typography variant="body" text="Link to location" />
              </a>

              <Typography
                variant="body"
                text="If you are attending the ceremony, arrive at 12:30pm (ceremony starts at 1pm) at Convocation House, which is a room inside the Bodleian Library building. To get there, start on Broad Street, then climb the steps or ramp to the courtyard. Go past the Sheldonian Theatre and look for the door with our signs up!"
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  maxWidth: "40rem",
                  margin: "auto",
                }}
              />
            </div>

            <Typography
              variant="h3"
              text="The Reception"
              style={{ textAlign: "center", padding: "1rem", paddingBottom: 0 }}
            />

            <div style={{ textAlign: "center" }}>
              <Typography
                variant="body"
                text="The Perch events marquee (in the garden)"
                style={{ margin: 0 }}
              />
              <Typography
                variant="body"
                text="Binsey Lane"
                style={{ margin: 0 }}
              />
              <Typography variant="body" text="Oxford" style={{ margin: 0 }} />
              <Typography variant="body" text="OX2 0NG" style={{ margin: 0 }} />

              <a href="https://goo.gl/maps/fYNK6GqS1c9Ysozg6" target="_blank">
                <Typography variant="body" text="Link to location" />
              </a>

              <Typography
                variant="body"
                text="If you are a full-day guest, we will take you to The Perch after the ceremony. If you are an evening guest, your best bet is to get a taxi. The Perch is a 15-minute drive from central Oxford and has very limited parking on site, so give Royal Cars a call in advance!"
                style={{
                  textAlign: "center",
                  padding: "1rem",
                  maxWidth: "40rem",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>

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
            text="Alternatively, if you would like to park in central Oxford (and if your hotel does not have its own spaces, which is common), there are three main car parks we would recommend: Westgate (the main shopping mall, this has the most space and is indoors), Oxpens (a small multi-storey), and Worcester Street (medium-size, outdoors). Expect to pay ??25 or more for 24 hours, though!"
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
            variant="body"
            text="There are a fair few hotels and AirBnBs around Oxfordshire. Here are a few hotels that we would recommend checking out first."
          />
        </TextBlock>

        <AccomContainer>
          <div>
            <Typography variant="h3" text="Near the ceremony" />
            <Typography variant="body" text="Premier Inn Oxford (????)" />
            <Typography variant="body" text="Vanbrugh House Hotel (??????)" />
            <Typography variant="body" text="Old Parsonage (????????)" />
            <Typography variant="body" text="Old Bank Hotel (????????)" />
          </div>

          <div>
            <Typography variant="h3" text="Near the party" />
            <Typography variant="body" text="Travelodge Oxford Peartree (??)" />
            <Typography variant="body" text="easyHotel Oxford (??)" />
          </div>

          <div>
            <Typography variant="h3" text="Slightly further afield" />
            <Typography variant="body" text="voco Oxford Spires (????)" />
            <Typography variant="body" text="Jurys Inn Oxford (????)" />
            <Typography variant="body" text="Holiday Inn Oxford (????)" />
          </div>
        </AccomContainer>

        <div style={{ padding: "1rem" }}>
          <div
            style={{
              padding: "2rem 1rem",
              border: `1rem solid ${theme.highlight}`,
              margin: "auto",
              marginTop: "8rem",
              paddingTop: "1rem",
              width: "fit-content",
              maxWidth: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography
              id="CONTACT"
              variant="h2"
              text="Contact Us"
              style={{ textAlign: "center" }}
            />

            <TextBlock>
              <Typography
                variant="body"
                text="Feel free to drop us a text or a WhatsApp message if you have any questions!"
              />

              <Typography variant="body" text="Joe: 07500 058253" />
              <Typography variant="body" text="Jasmine: 07824 332447" />
            </TextBlock>
          </div>
        </div>

        <Typography
          id="PHOTOS"
          variant="h2"
          text="Photos"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          variant="h3"
          text="Check back here after the wedding!"
          style={{
            textAlign: "center",
            padding: "0 1rem",
          }}
        />
        <Typography
          variant="body"
          text="In the meantime, here are a few snaps from our trip to Oxford in January..."
          style={{
            textAlign: "center",
            padding: "0 1rem",
          }}
        />

        <PolaroidGrid>
          <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_500/v1647206415/oxford-radcam_vklc7f.png" />
          <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_500/v1647206414/oxford-bod_tu1rg0.png" />
          <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_500/v1647206416/oxford-gate_mfhwnv.png" />
          <StoryImage src="https://res.cloudinary.com/dqqwahudr/image/upload/c_scale,w_500/v1647206414/oxford-bridge_pungjx.png" />
        </PolaroidGrid>

        <Typography
          id="MAP"
          variant="h2"
          text="Our Map of Oxford"
          style={{ textAlign: "center", marginTop: "8rem" }}
        />

        <Typography
          variant="body"
          text="Discover restaurants, landmarks, and the locations of our favourite Oxford memories..."
          style={{
            textAlign: "center",
            width: "40rem",
            maxWidth: "80%",
            margin: "auto",
            marginBottom: "2rem",
          }}
        />

        <Typography
          variant="body"
          text="Look for these icons to open the list of locations / go full screen..."
          style={{ textAlign: "center", padding: "0 2rem" }}
        />

        <MapIcons>
          <img src="https://res.cloudinary.com/dqqwahudr/image/upload/v1647209016/list-icon_lqxhnw.png" />
          <img src="https://res.cloudinary.com/dqqwahudr/image/upload/v1647209016/full-screen-icon_guqwdw.png" />
        </MapIcons>

        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1ryUwhQ-1Age4NVPcpsO7FURnSFa2SHE0&ehbc=2E312F"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </HomeContainer>
    </div>
  );
};

export default Home;

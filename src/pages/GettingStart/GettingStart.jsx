import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import StyledInfo from "../../components/StyledInfo/StyledInfo";
import images from "../../constant/images";
import Footer from "../../components/Footer/Footer";
const GettingStartContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FAQContainer = styled.div`
  width: 80%;
`;
const FAQ = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;
const Question = styled.h1`
  font-size: var(--fontlg);
`;
const Answer = styled.p`
  font-size: var(--fontmd);
  color: var(--grey);
  margin-top: 10px;
  line-height: 1.5em;
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const PolicyContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 888px) {
    flex-direction: column;
  }
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;
const PolicyTitle = styled.h3`
text-align: center;
  width: 35%;  
  @media screen and (max-width: 888px) {
    width: 100%;
  }
  font-size: var(--fontlg);
  letter-spacing: 5px;
`;
const PolicyContentContainer = styled.ul`
  width: 60%;
  font-size: var(--fontmd);
  color: var(--grey);
  margin-top: 10px;
  line-height: 1.5em;
  list-style-type: none;
`;
const PolicyContent = styled.li`
margin-bottom: 10px;
  &::before {
    content: "•";
    color: rgb(179, 163, 105);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const GettingStart = () => {
  return (
    <div>
      <Navbar alwayson={false} active="Start"/>
      <GettingStartContainer>
        <StyledInfo
          bg={images.getting_started}
          title="Getting Started"
          content="BEGIN HERE"
        />
        <FAQContainer>
          <FAQ>
            <Question>Who can be involved with the space?</Question>
            <Answer>
              Any active student, faculty, or staff of Georgia Tech can join the
              Makerspace. All users must agree to the {""}
              <u>Makerspace User Agreement</u> and complete the{" "} 
              <u>Safety Training</u> before using the space.
            </Answer>
          </FAQ>
          <FAQ>
            <Question>How do I get involved?</Question>
            <Answer>
              <i>Active Students:</i> First, you must complete the safety
              training. Then, you can come to the space during open hours and
              ask a staff member to help you get started. The MakerSpace door
              shall only be locked and unlocked by MakerSpace staff.
            </Answer>
            <Answer>
              <i>Faculty and Staff: </i>Please give us 2 weeks' notice so that
              we can work with you to accommodate your class. We can help
              provide machine trainings and organize resources. We will also add
              your class time to our calendar to notify other users. This
              ensures that the Makerspace remains accessible to everyone.
              Classes that utilize the Makerspace without proper notification
              will be asked to leave until they submit a request through the
              appropriate channels, allowing us to assess how the Makerspace can
              best fulfill their needs.
            </Answer>
          </FAQ>
          <FAQ>
            <Question>
              When is the space open and How can I make an appointment?
            </Question>
            <Answer>
              You can come to the space during open hours (Monday - Friday, 9AM
              - 5 PM) and ask a staff member to help you get started. If you
              want to come outside of these hours, you can request access by
              sending a message to the StingersLab Wechat Group.
            </Answer>
            <Img src={images.wechat} alt="wechat" />
          </FAQ>
        </FAQContainer>
        <StyledInfo
          bg={images.policy}
          title="Policies"
          content="Know and follow these rules:"
        />
        <PolicyContainer>
          <PolicyTitle>SAFETY & BEHAVIOR</PolicyTitle>
          <PolicyContentContainer>
            <PolicyContent>
              Familiarize yourself with and comply with the lab safety policies
              outlined in the safety training.
            </PolicyContent>
            <PolicyContent>
              Receive training on every tool you use in the space.
            </PolicyContent>
            <PolicyContent>
              Seek clarification by asking questions if you are uncertain about
              any aspect of a tool's operation.
            </PolicyContent>
            <PolicyContent>
              Report any hazardous situations or potential risks to manager.
            </PolicyContent>
          </PolicyContentContainer>
        </PolicyContainer>
        <PolicyContainer>
          <PolicyTitle>RESPECT THE SPACE</PolicyTitle>
          <PolicyContentContainer>
            <PolicyContent>
              Maintain cleanliness by cleaning up after yourself. This
              demonstrates consideration for others and enhances safety.
            </PolicyContent>
            <PolicyContent>
              Enter the space only when a superuser or the lab manager is
              present. Please adhere to the specified opening and closing times
              as indicated on the calendar.
            </PolicyContent>
            <PolicyContent>
              Do not bypass or violate any space policy or safety procedure.
            </PolicyContent>
          </PolicyContentContainer>
        </PolicyContainer>

        <PolicyContainer>
          <PolicyTitle>RESPECT YOUR COLLEAGUES</PolicyTitle>
          <PolicyContentContainer>
            <PolicyContent>
              Show consideration for other users and superusers in the space.
            </PolicyContent>
            <PolicyContent>
              Share the available tools and resources cooperatively.
            </PolicyContent>
          </PolicyContentContainer>
        </PolicyContainer>

        <PolicyContainer>
          <PolicyTitle>RESPECT EQUIPMENTS</PolicyTitle>
          <PolicyContentContainer>
            <PolicyContent>
              Refrain from borrowing tools from the space.
            </PolicyContent>
            <PolicyContent>
              Use tools solely for their intended purposes.
            </PolicyContent>
            <PolicyContent>
              Return tools and materials to their designated locations after
              use.
            </PolicyContent>
            <PolicyContent>Refill empty tools as needed.</PolicyContent>
            <PolicyContent>
              Inform the manager on duty if the space is running low on or
              depleted of a specific material.
            </PolicyContent>
          </PolicyContentContainer>
        </PolicyContainer>
      </GettingStartContainer>
      <Footer />
    </div>
  );
};

export default GettingStart;

import React from "react"
import styled from "styled-components"
// import theme from "../styles/theme"
import media from "../styles/media"
import { Row, largeText, normalText } from "../styles/common"

const Container = styled.section`
  padding: 5rem 0 0 0;
`
const ColLeft = styled.div`
  float: left;
  width: 50%;
  ${media.tablet`
    width: 100%;
  `}
`

const ColRight = styled.div`
  float: right;
  width: 50%;
  ${media.tablet`
    width: 100%;
  `}
`
const Title = styled.h2`
  ${largeText}
  max-width: 326px;
  margin-bottom: 1rem;

  ${media.tablet`
    max-width: none;
  `}
`

const Desc = styled.p`
  ${normalText}
  max-width: 464px;

  ${media.tablet`
    max-width: none;
  `}
`

const Icons = styled.div`
  max-width: 320px;
  margin-left: -10px;
  img {
    width: 40px;
    height: 40px;
    margin: 10px;
  }
  ${media.tablet`
    max-width: none;
    img{
      margin:4px;
    }
  `}
`

const TextsWrap = styled.div`
  &.tw-1 {
    padding-left: 4rem;
    padding-top: 7rem;
  }
  &.tw-2 {
    padding-top: 2rem;
  }
  &.tw-3 {
    padding-left: 4rem;
    padding-top: 6rem;
  }
  &.tw-4 {
    padding-top: 3rem;
  }

  ${media.tablet`
    padding: 0 !important;
  `}

  > img {
    display: none;
    ${media.tablet`
      display: block;
   `}
  }
`

const Image = styled.img`
  ${media.tablet`
    display:none;
  `}

  &.img-1 {
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  }
  &.img-2 {
    margin-left: 4rem;
    box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.1);
  }
  &.img-3 {
  }
  &.img-4 {
    margin-left: 4rem;
    box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.1);
  }
`

const Features = () => (
  <Container>
    <Row>
      <ColRight>
        <Image
          src={"images/slack_site.png"}
          className="img-1"
          alt="slack_site"
        />
      </ColRight>
      <ColRight>
        <TextsWrap className="tw-1">
          <img src={"images/organized-convos.png"} alt="organized-convos" />
          <Title>Create a channel for every conversation</Title>
          <Desc>
            In Slack, conversations happen in channels — organized by topic,
            project, team, or whatever makes sense for your company. With
            channels, the right people don’t get left out and information
            doesn’t get lost.
          </Desc>
        </TextsWrap>
      </ColRight>
    </Row>
    <Row>
      <ColLeft>
        <Image
          src={"images/img-integrations.png"}
          className="img-2"
          alt="integrations"
        />
      </ColLeft>
      <ColLeft>
        <TextsWrap className="tw-2">
          <img src={"images/apps-gears.png"} alt="apps-gears" />
          <Title>Integrate with the services you already use</Title>
          <Desc>
            Slack integrates with the apps and services you and your team
            already use every day. Information flows into the stream of
            conversation so everyone can see it — or act on it — inside Slack.
          </Desc>
          <Icons>
            <img src={"images/gdrive@2x.png"} alt="gdrive" />
            <img src={"images/dropbox_alt@2x.png"} alt="dropbox_alt" />
            <img src={"images/asana@2x.png"} alt="asana" />
            <img src={"images/zoom_alt@2x.png"} alt="zoom_alt" />
            <img src={"images/trello@2x.png"} alt="trello" />
            <img src={"images/salesforce_alt@2x.png"} alt="salesforce_alt" />
            <img src={"images/github@2x.png"} alt="github" />
            <img src={"images/jira_alt@2x.png"} alt="jira_alt" />
            <img src={"images/marketo@2x.png"} alt="marketo" />
            <img src={"images/zendesk_alt@2x.png"} alt="zendesk_alt" />
          </Icons>
        </TextsWrap>
      </ColLeft>
    </Row>
    <Row>
      <ColRight>
        <Image src={"images/img-calls.png"} className="img-3" alt="calls" />
      </ColRight>
      <ColRight>
        <TextsWrap className="tw-3">
          <img src={"images/face-to-face.png"} alt="face-to-face" />
          <Title>
            Collaborate with voice calls, video calls and screen sharing
          </Title>
          <Desc>
            Voice calls and video calls built into Slack make it easier to work
            as effectively online as you do in person, and if you need to show
            your work, you can share your screen within a video call, too.
          </Desc>
        </TextsWrap>
      </ColRight>
    </Row>
    <Row>
      <ColLeft>
        <Image src={"images/search.png"} className="img-4" alt="search" />
      </ColLeft>
      <ColLeft>
        <TextsWrap className="tw-4">
          <img src={"images/search-binoculars.png"} alt="search-binoculars" />
          <Title>Find what you need quickly</Title>
          <Desc>
            Everything in public channels — including messages, files, and
            integrations — become searchable in Slack. Find what you need to get
            up to speed, catch up on past decisions, and tap into your company's
            collective knowledge.
          </Desc>
        </TextsWrap>
      </ColLeft>
    </Row>
  </Container>
)
export default Features

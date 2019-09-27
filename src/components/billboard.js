import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import media from "../styles/media"
import { Row, largestText, normalText } from "../styles/common"

const Container = styled.section`
  padding: 7rem 0 3rem;
  overflow: hidden;
`
const Col1 = styled.div`
  float: left;
  width: 50%;
  padding-top: 4rem;

  ${media.phone`
    width: 100%;
    padding-top: 0;
  `}

  h1 {
    ${largestText}
    margin-bottom: 0.5rem;
  }

  p {
    ${normalText}
    max-width: 32rem;
    margin-bottom: 2rem;
    ${media.phone`
        max-width: none;
    `}
  }

  a {
    &:link,
    &:visited {
      display: inline-block;
      background: ${props => props.theme.primary};
      color: ${props => props.theme.white};
      border: none;
      cursor: pointer;
      border-radius: 4px;
      text-align: center;
      font-family: Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI",
        Tahoma, Arial, sans-serif;
      font-weight: 700;
      line-height: 1.28571429;
      letter-spacing: 0.8px;
      font-size: 0.875rem;
      text-transform: uppercase;
      text-decoration: none;
      padding: 19px 40px 20px;

      ${media.phone`
        width: 100%;
      `}
    }
  }
`
const Col2 = styled.div`
  float: left;
  width: 50%;
  margin-left: -96px;

  ${media.desktop`
    margin-left:0;
  `}

  ${media.phone`
    width: 100%;
    margin:2rem 0 0;
    img{
        width: 100%;
    }
  `}
`

const Billboard = () => (
  <Container>
    <Row>
      <Col1 theme={theme}>
        <h1>Slack is where work happens</h1>
        <p>
          Slack is a collaboration hub, where the right people and the right
          information come together, helping everyone get work done.
        </p>
        <a href="#">GET STARTED</a>
      </Col1>
      <Col2>
        <img src={"images/devices.png"} alt="devices" />
      </Col2>
    </Row>
  </Container>
)
export default Billboard

import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { Row, largeText } from "../styles/common"

const Container = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.primary};
  text-align: center;
`

const Title = styled.h2`
    ${largeText}
    color : ${props => props.theme.white};
    margin-bottom: 1rem;
`
const Button = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.white};
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    text-align: center;
    font-family: Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI",
      Tahoma, Arial, sans-serif;
    font-weight: 700;
    padding: 10px 40px;
    letter-spacing: 0.8px;
    font-size: 0.875rem;
  }
`

const Signup = () => (
  <Container theme={theme}>
    <Row>
      <Title theme={theme}>Try Slack with your team for free</Title>
      <Button href="#" theme={theme}>
        Get Started
      </Button>
    </Row>
  </Container>
)
export default Signup

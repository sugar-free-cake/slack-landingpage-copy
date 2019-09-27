import React, { useEffect, useCallback, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { darken } from "polished"
import theme from "../styles/theme"
import { Row } from "../styles/common"

const slideInDown = keyframes`
0% {
  transform: translateY(-100%);
}
100% {
  transform: translateY(0);
}
`

const Container = styled.header`
  height: 70px;
  padding: 20px 0;
  width: 100%;
  position: absolute;

  ${props =>
    props.headerType === "fixed" &&
    css`
      position: fixed;
      border-bottom: none;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
      background-color: ${props => props.theme.white};
      animation: ${slideInDown} 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
      z-index: 10;
    `}
`

const Logo = styled.a`
  display: inline-block;
  margin-top: 5px;

  float: left;
`

const Button = styled.button`
  display: inline-block;
  background: ${props => props.theme.primary};
  text-decoration: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  line-height: 1;
  color: ${props => props.theme.white};
  padding: 10px;
  float: right;
  transition: all 0.5s;

  &:hover {
    background: ${props => darken(0.1, props.theme.primary)};
  }
`

const Header = () => {
  const [headerType, setHeaderType] = useState("absolute")

  const onScroll = useCallback(() => {
    if (window.scrollY > 360) {
      setHeaderType("fixed")
    } else {
      setHeaderType("absolute")
    }
  })

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  }, [])

  return (
    <Container theme={theme} headerType={headerType}>
      <Row>
        <Logo href="/">
          <img src={"images/logo1.svg"} attr="slack" />
        </Logo>
        <Button theme={theme}>Your Workspaces</Button>
      </Row>
    </Container>
  )
}

export default Header

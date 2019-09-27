import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { Row } from "../styles/common"

const Container = styled.section`
  padding: 1rem 0;
  background-color: ${props => props.theme.grey};
`

const LogoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  div {
    max-width: 170px;
    margin: 10px;
    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
  }
`

const Logos = () => (
  <Container theme={theme}>
    <Row>
      <LogoList>
        <div>
          <img src={"images/airbnb-logo.png"} alt="airbnb" />
        </div>
        <div>
          <img src={"images/latimes-alt.png"} alt="latimes" />
        </div>
        <div>
          <img src={"images/target-logo.png"} alt="target" />
        </div>
        <div>
          <img src={"images/ameritrade-logo.png"} alt="ameritrade" />
        </div>
        <div>
          <img src={"images/oracle-logo.png"} alt="oracle" />
        </div>
        <div>
          <img src={"images/electronic-arts-logo.png"} alt="electronic-arts" />
        </div>
      </LogoList>
    </Row>
  </Container>
)
export default Logos

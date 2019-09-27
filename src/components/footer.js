import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { Row } from "../styles/common"

const Container = styled.footer`
  height: 132px;
`
const Logo = styled.a`
  margin-top: 2.5rem;
  float: left;
`

const Sns = styled.div`
  float: right;
  margin-top: 3.5rem;
  a {
    margin-left: 16px;
  }

  svg {
    fill: ${props => props.theme.black};
    transition: all 0.5s;

    &:hover {
      fill: ${props => props.theme.blue};
    }
  }
`

const Footer = () => (
  <Container>
    <Row>
      <Logo href="/">
        <img src={"images/logo2.svg"} alt="logo" />
      </Logo>
      <Sns theme={theme}>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            title="Twitter"
            class="c-nav--footer__svgicon svg-replaced"
            shape-rendering="geometricPrecision"
          >
            <path d="M31.993 6.077c-1.177.523-2.44.876-3.77 1.033 1.355-.812 2.396-2.098 2.887-3.63-1.27.75-2.673 1.3-4.168 1.592C25.744 3.797 24.038 3 22.15 3c-3.626 0-6.563 2.938-6.563 6.563 0 .514.057 1.016.17 1.496C10.3 10.783 5.464 8.17 2.227 4.2c-.565.97-.89 2.098-.89 3.3 0 2.28 1.16 4.287 2.92 5.465-1.076-.035-2.088-.33-2.973-.82v.08c0 3.182 2.26 5.835 5.264 6.438-.55.15-1.13.23-1.73.23-.423 0-.833-.04-1.233-.117.834 2.606 3.26 4.504 6.13 4.558-2.245 1.76-5.075 2.81-8.15 2.81-.53 0-1.053-.03-1.566-.09C2.905 27.914 6.355 29 10.062 29c12.072 0 18.675-10 18.675-18.675 0-.284-.008-.568-.02-.85 1.283-.925 2.395-2.08 3.276-3.398z"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 16 16"
            width="20"
            title="Facebook"
            class="c-nav--footer__svgicon svg-replaced"
            shape-rendering="geometricPrecision"
          >
            <path
              d="M15.115 0H.885A.883.883 0 0 0 0 .885v14.23c0 .49.395.885.885.885h7.659V9.803h-2.09v-2.4h2.09V5.62c0-2.069 1.27-3.189 3.104-3.189.875 0 1.643.053 1.867.096v2.155h-1.291c-1.003 0-1.184.469-1.184 1.173v1.547h2.379l-.31 2.4H11.04V16h4.075c.49 0 .885-.395.885-.885V.885A.883.883 0 0 0 15.115 0z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            title="YouTube"
            class="c-nav--footer__svgicon svg-replaced"
            shape-rendering="geometricPrecision"
          >
            <path d="M31.67 9.18s-.312-2.354-1.27-3.39c-1.218-1.358-2.58-1.366-3.206-1.443C22.717 4 16.002 4 16.002 4h-.015s-6.715 0-11.19.347c-.626.077-1.988.085-3.206 1.443C.635 6.826.32 9.18.32 9.18S0 11.94 0 14.7v2.59c0 2.762.32 5.522.32 5.522s.312 2.352 1.27 3.386c1.22 1.358 2.816 1.317 3.528 1.46 2.56.26 10.877.342 10.877.342s6.722-.012 11.2-.355c.624-.08 1.987-.088 3.204-1.446.956-1.036 1.27-3.388 1.27-3.388s.32-2.76.32-5.523V14.7c0-2.76-.32-5.522-.32-5.522z"></path>
            <path fill="#FFF" d="M12 10v12l10-6"></path>
          </svg>
        </a>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 16 16"
            width="20"
            title="LinkedIn"
            class="c-nav--footer__svgicon svg-replaced"
            shape-rendering="geometricPrecision"
          >
            <path
              d="M14.816 0C15.466 0 16 .512 16 1.152v13.696c0 .63-.533 1.152-1.184 1.152H1.184C.534 16 0 15.477 0 14.848V1.152C0 .512.533 0 1.184 0zM3.563 4.96a1.382 1.382 0 0 0 0-2.763c-.768 0-1.376.619-1.376 1.376 0 .768.608 1.387 1.376 1.387zm10.069 4.49c0-2.058-.437-3.637-2.848-3.637-1.152 0-1.92.63-2.24 1.227h-.032V5.995H6.24v7.637h2.368V9.856c0-.992.181-1.963 1.419-1.963 1.216 0 1.237 1.142 1.237 2.027v3.712h2.368zM2.368 13.633h2.379V5.995H2.368z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </a>
      </Sns>
    </Row>
  </Container>
)

export default Footer

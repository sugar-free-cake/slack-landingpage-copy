import React from "react"
import styled, { keyframes } from "styled-components"
// import theme from "../styles/theme"
import media from "../styles/media"
import { Row, largeText } from "../styles/common"

const moveCustomerStories = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-2900px);
  }
`

const Container = styled.section`
  padding: 8rem 0 3rem;
`

const ItemsWrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 410px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      #fff 0,
      rgba(255, 255, 255, 0) 15%,
      rgba(255, 255, 255, 0) 85%,
      #fff 100%
    );
    height: 410px;
    width: 100%;
    pointer-events: none;
  }
`

const Title = styled.h2`
  ${largeText}
  text-align: center;
  ${media.tablet`
    text-align: left;
  `}
`

const Item = styled.a`
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  color: #696969;
  width: 240px;
  min-height: 150px;
  padding: 1rem;
  border: 0;
  margin-left: 25px;
  margin-right: 25px;
  text-decoration: none;

  span {
    line-height: 1.2rem;
  }

  img {
    margin-top: 1rem;
    align-self: flex-start;
  }

  &:hover span,
  &:hover img,
  &:hover:before {
    opacity: 1 !important;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 55px;
    left: 25px;
    background-repeat: no-repeat;
    background-size: contain;
    width: 234px;
    height: 182px;
    background-image: url(${"images/blob-1.png"});
  }

  &:nth-child(even):before {
    top: auto;
    bottom: 50px;
  }

  &:nth-child(5n + 1):before {
    background-image: url(${"images/blob-2.png"});
  }

  &:nth-child(5n + 2):before {
    background-image: url(${"images/blob-3.png"});
    top: auto;
    bottom: 30px;
  }

  &:nth-child(5n + 3):before {
    background-image: url(${"images/blob-4.png"});
  }

  &:nth-child(5n + 4):before {
    background-image: url(${"images/blob-5.png"});
  }
`

const Items = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  width: calc(5250px);
  height: 410px;
  transform: translate3d(0, 0, 0);
  animation: ${moveCustomerStories} 50s linear infinite;
  &:hover {
    animation-play-state: paused;
  }

  &:hover ${Item} span,
  &:hover ${Item} img,
  &:hover ${Item}:before {
    opacity: 0.4;
    transition: opacity 0.5s;
  }
`

const Companies = () => (
  <Container>
    <Row>
      <Title>Companies that collaborate in Slack</Title>

      <ItemsWrap>
        <Items>
          <Item href="#">
            <span>Faster real-time coverage from the field to the fans</span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/stories/21stcenturyfox/21stcenturyfox.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/stories/21stcenturyfox/21stcenturyfox.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/21stcenturyfox/21stcenturyfox@2x.png 2x"
              alt="21st Century Fox"
            />
          </Item>
          <Item href="#">
            <span>
              Reimagining online education and student engagement with Slack
            </span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/stories/rmit/rmit.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/stories/rmit/rmit.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/rmit/rmit@2x.png 2x"
              alt="RMIT"
            />
          </Item>
          <Item href="#">
            <span>Revving up marketing campaigns and giving back.</span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar@2x.png 2x"
              alt="Zipcar"
            />
          </Item>
          <Item href="#">
            <span>
              eCommerce platform deploys super bot to enable glitch-free
              purchases.
            </span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-shopify.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-shopify.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-shopify@2x.png 2x"
              alt="Shopify"
            />
          </Item>
          <Item href="#">
            <span>Mission-critical sales work at Lyft Business</span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft@2x.png 2x"
              alt="Lyft"
            />
          </Item>
          <Item href="#">
            <span>
              Travel site’s people-first culture inspires employee survey
              automation in Slack
            </span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/stories/trivago/trivago.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/stories/trivago/trivago.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/trivago/trivago@2x.png 2x"
              alt="Trivago"
            />
          </Item>
          <Item href="#">
            <span>
              Delighting home cooks and uniting global teams with Slack.
            </span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-hello-fresh.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-hello-fresh.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-hello-fresh@2x.png 2x"
              alt="HelloFresh"
            />
          </Item>
          <Item href="#">
            <span>Slack is the way we get business done. Period.</span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo_zapier@2x.png 2x"
              alt="Zapier"
            />
          </Item>
          <Item href="#">
            <span>Space-age software development all in one place.</span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-nasa-jpl.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-nasa-jpl.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-nasa-jpl@2x.png 2x"
              alt="NASA Jet Propulsion Laboratory"
            />
          </Item>
          <Item href="#">
            <span>
              We work across two floors so we have a physical gap—but we use
              Slack as a bridge to keep everyone in the loop.
            </span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-timesuk@2x.png 2x"
              alt="The Times and Sunday Times, UK"
            />
          </Item>
          <Item href="#">
            <span>Faster real-time coverage from the field to the fans</span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/stories/21stcenturyfox/21stcenturyfox.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/stories/21stcenturyfox/21stcenturyfox.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/21stcenturyfox/21stcenturyfox@2x.png 2x"
              alt="21st Century Fox"
            />
          </Item>
          <Item href="#">
            <span>
              Reimagining online education and student engagement with Slack
            </span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/stories/rmit/rmit.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/stories/rmit/rmit.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/rmit/rmit@2x.png 2x"
              alt="RMIT"
            />
          </Item>
          <Item href="#">
            <span>Revving up marketing campaigns and giving back.</span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-zipcar@2x.png 2x"
              alt="Zipcar"
            />
          </Item>
          <Item href="#">
            <span>
              eCommerce platform deploys super bot to enable glitch-free
              purchases.
            </span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-shopify.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-shopify.png 1x, https://a.slack-edge.com/80588/marketing/img/logos/testimonials/logo-shopify@2x.png 2x"
              alt="Shopify"
            />
          </Item>
          <Item href="#">
            <span>Mission-critical sales work at Lyft Business</span>
            <img
              src="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png"
              srcSet="https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft.png 1x, https://a.slack-edge.com/80588/marketing/img/stories/lyft/lyft@2x.png 2x"
              alt="Lyft"
            />
          </Item>
        </Items>
      </ItemsWrap>
    </Row>
  </Container>
)
export default Companies

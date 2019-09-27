import styled, { css } from "styled-components"
import media from "./media"

export const clearfix = css`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`

export const Row = styled.div`
  max-width: 1230px;
  margin: 0 auto;

  ${clearfix};

  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  ${media.desktop`
    padding: 0 4vw;
    overflow-x: hidden;
  `}

  ${media.tablet`
    padding: 0 4vw;
  `}
`

export const largestText = css`
  font-family: Slack-Larsseit, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma,
    Arial, sans-serif;
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.8px;
  font-size: 3.5rem;
  ${media.tablet`
    font-size: 2rem;
  `}
`
export const largeText = css`
  font-family: Slack-Larsseit, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma,
    Arial, sans-serif;
  font-weight: 700;
  line-height: 1.1875;
  letter-spacing: -0.3px;
  font-size: 1.5rem;
`

export const normalText = css`
  font-family: Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI",
    Tahoma, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.44444444;
  letter-spacing: -0.2px;
  font-size: 1.25rem;
`

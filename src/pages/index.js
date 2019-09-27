import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Bilboard from "../components/billboard"
import Logos from "../components/logos"
import Features from "../components/features"
import Companies from "../components/companies"
import Signup from "../components/signup"

const IndexPage = () => (
  <>
    <SEO />
    <Layout>
      <Bilboard />
      <Logos />
      <Features />
      <Companies />
      <Signup />
    </Layout>
  </>
)

export default IndexPage

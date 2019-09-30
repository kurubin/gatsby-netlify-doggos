import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "bulma/css/bulma.min.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Doggo Home" />
    <div className="has-text.centered" style={{ marginTop: "20%" }}>
      <h1 className="is-size-2">Welcome to Doggo image gallery! Here you have an emoji: 😹</h1>
      <p className="is-size-5" style={{ marginTop: "2%" }}>
        A fire doggo infinite image gallery built with Gatsby, and
        Images served using Netlify functions from Unsplash. Perfecto!
      </p>
      <button className="button is-dark is-large" style={{ marginTop: "10%" }}>
        <Link className="has-text-white" to="/gallery/">
          Go to Gallery
        </Link>
      </button>
    </div>
  </Layout>
);

export default IndexPage;

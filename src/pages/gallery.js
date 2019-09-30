import React from "react";
import Layout from "./../components/layout";
import SEO from "./../components/seo";
import ImageGallery from "../components/ImageGallery";

const Gallery = () => (
  <Layout>
    <SEO title="Doggo Gallery" />
    <h1 className="is-size-3">Images fetched from Unsplash</h1>
    <p style={{ marginBottom: "5%" }}>
      Start scrolling down to fetch images of
      doggos dyanmically from Unsplash endpoint.
    </p>
    <ImageGallery />
  </Layout>
);

export default Gallery;

import React, { useEffect, useState } from "react";
import InifiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import "./imageGallery.css";

const useInfiniteImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = "/.netlify/functions/fetch";
  const fetchImages = () => {
    axios(endpoint)
      .then(res => {
        setImages(images => [...images, ...(res.data.images || [])]);
        setLoading(false);
      })
      .catch(e => console.error(`Error fetching images: ${e}`));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return [images, loading, fetchImages];
};

const ImageGallery = () => {
  const [images, loading, fetchImages] = useInfiniteImages();

  return (
    <InifiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={
        <p style={{ textAlign: "center", marginTop: "1%" }}>
          Loading more doggos...
          <span role="img" aria-label="Dog">
            🐕
          </span>
          <span role="img" aria-label="Dog">
            🐕
          </span>
        </p>
      }
    >
      <div className="image-grid">
        {!loading
          ? images.map(image => (
              <div className="grid-item" key={image.id}>
                <img
                  alt={image.alt_description}
                  className="image"
                  src={image.urls.regular}
                />
              </div>
            ))
          : null}
      </div>
    </InifiniteScroll>
  );
};

export default ImageGallery;

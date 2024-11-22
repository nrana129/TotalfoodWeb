import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/api";

const FoodVideo = () => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup

  const fetchVideoData = () => {
    getData("staticblock/brandvideo/video_banner")
      .then((response) => {
        if (response?.status === true) {
          setVideoData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching video data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!videoData) {
    return <p>Failed to load video data</p>;
  }

  return (
    <div className="FoodVideo">
      <div className="container">
        <h2>{videoData.title || "From Farm to your door"}</h2>
        <div className="vdo-cont">
          <img
            src={videoData.video_banner}
            alt="Video Poster"
            onClick={() => setIsPopupOpen(true)} // Open popup on click
          />
          <div className="overlay btn-popup">
            <img
              src={videoData.video_icon}
              alt="play"
              onClick={() => setIsPopupOpen(true)} // Open popup on play icon click
            />
          </div>
        </div>
      </div>

      {isPopupOpen && ( // Show popup only when isPopupOpen is true
        <div className="vdoyt vdpopup">
          <div
            className="overlay"
            onClick={() => setIsPopupOpen(false)} // Close popup on overlay click
          ></div>

          <div className="video_section">
            <div className="vdo-iframe">
              <div className="widget block block-static-block">
                <div
                  data-content-type="html"
                  data-appearance="default"
                  data-element="main"
                  data-decoded="true"
                >
                  <iframe
                    width="100%"
                    height="315"
                    src={videoData.video_url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
            <span
              className="close-icon"
              onClick={() => setIsPopupOpen(false)} // Close popup on close icon click
            >
              close
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodVideo;

import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/api"; 

const FoodVideo = () => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchVideoData = () => {
    getData("staticblock/brandvideo/video_banner") // API endpoint
      .then((response) => {
        if (response?.status === true) {
          setVideoData(response.data); // Set the data in state
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
    <div className="FoodVideo container">
      <h2>{videoData.title || "From Farm to your door"}</h2>
      <div className="container vdo-cont">
        <img src={videoData.video_banner} alt="Video Poster" />
        <div className="overlay btn-popup">
          <img src={videoData.video_icon} alt="play" />
        </div>
        {/* Video Popup */}
        <div className="vdoyt vdpopup">
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
          <span className="close-icon">close</span>
        </div>
      </div>
    </div>
  );
};

export default FoodVideo;

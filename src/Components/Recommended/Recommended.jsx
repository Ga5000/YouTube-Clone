import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY } from "../../Api/ApiKey";
import { value_converter } from "../../Api/data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const relatedVideo_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=BR&videoCategoryId=${categoryId}&key=${API_KEY}`;

    try {
      const response = await fetch(relatedVideo_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setApiData(data.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [categoryId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="recommended">
        {!loading &&
          !error &&
          apiData.map((item, index) => (
            <Link
              to={`/video/${item.snippet.categoryId}/${item.id}`}
              key={index}
              className="side-video-list"
            >
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="video-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} Views</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Recommended;

import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import { value_converter } from "../../Api/data";
import moment from "moment";
import { useParams } from "react-router-dom";

import dotenv from 'dotenv';


dotenv.config({ path: '../../config/.env' }); 
const PlayVideo = () => {


    const {videoId} = useParams();
    const apiKey = process.env.REACT_APP_API_KEY;

    const [apiData,setApiData] = useState([]);
    const [channelData,setChannelData] = useState([]);
    const [commentData,setCommentData] = useState([]);
    
    const fetchVideoData = async () => {
        // fech videos data
        const videoDetails_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
        await fetch(videoDetails_URL).then(res => res.json()).then(data => setApiData(data.items[0]))

    };

    const fetchOtherData = async () => {
        const channelData_URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData && apiData.snippet ? apiData.snippet.channelId : ""}&key=${API_KEY}`;
        
        try {
            const response = await fetch(channelData_URL);
            const data = await response.json();
    
            if (data.items && data.items.length > 0) {
                setChannelData(data.items[0]);
            }
        } catch (error) {
            console.error("Error fetching channel data:", error);
        }
    
        const comment_URl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
        try {
            const commentResponse = await fetch(comment_URl);
            const commentData = await commentResponse.json();
    
            if (commentData.items && commentData.items.length > 0) {
                setCommentData(commentData.items);
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    const removeHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    };
    

    useEffect(() => {
        fetchVideoData();
    },[videoId]);

    useEffect(() => {
        fetchOtherData();
    },[apiData]);


    return(
        <>
            <div className="play-video">
                <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h3>{apiData && apiData.snippet ? apiData.snippet.title : "Title Here"}</h3>
                <div className="play-video-info">
                <p>{apiData && apiData.statistics ? value_converter(apiData.statistics.viewCount) : "0"} Views &bull; {apiData && apiData.snippet ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
                    <div>
                        <span><img src={like} alt="like" /> {apiData && apiData.statistics ? value_converter(apiData.statistics.likeCount) : 155}</span>
                        <span><img src={dislike} alt="dislike" /></span>
                        <span><img src={share} alt="share" />Share</span>
                        <span><img src={save} alt="save" />Save</span>
                    </div>
                </div>
                <hr />
                <div className="publisher">
                <img src={channelData && channelData.snippet ? channelData.snippet.thumbnails.default.url : ""} alt="" />

                    <div>
                        <p>{apiData && apiData.snippet ? apiData.snippet.channelTitle : "Channel Title Here"}</p>
                        <span>{channelData && channelData.statistics ? value_converter(channelData.statistics.subscriberCount) : ""} Subscribers</span>
                    </div>
                    <button>Subscribe</button>
                </div>

                <div className="vid-description">
                    <p>{apiData && apiData.snippet ? apiData.snippet.description.slice(0,250) : "Description Here"}</p>
                    <hr />
                    <h4>{apiData && apiData.statistics ? value_converter(apiData.statistics.commentCount ) : "Comments"} Comments</h4>
                    {commentData.map((item, index) => {
                        const commentText = removeHtmlTags(item.snippet.topLevelComment.snippet.textDisplay);

                        return (
                            <div key={index} className="comment">
                             <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user-profile" />
                 <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day</span></h3>
                            <p>{commentText}</p>
                <div className="comment-action">
                    <img src={like} alt="like" />
                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="dislike" />
                </div>
            </div>
        </div>
    );
})}
                </div>
            </div>
        </>
    );
};

export default PlayVideo
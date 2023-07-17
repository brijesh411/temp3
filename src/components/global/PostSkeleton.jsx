import React from "react";
import "../../styles/global/skeleton.css";

const PostSkeleton = () => {
  return (
    <div className="card">
      <div className="top">
        <div className="user-details">
          <div className="user-profile_img">
            <img alt="cover" className="skeleton cover" />
          </div>
          <span
            className="skeleton skeleton-text"
            style={{ width: "100px" }}
          ></span>
        </div>
        <div className="dot">
          <i className="bx bx-dots-vertical-rounded"></i>
        </div>
      </div>
      <div className="imageBx">
        <img alt={""} className="skeleton cover" />
      </div>
      <span style={{ width: "50px" }} className="skeleton likes"></span>
      <span className="skeleton skeleton-text message" style={{ width: "100%", height: "20px" }}>
        
      </span>
      <div className="add-comment">
        <div className="user-img">
          <img className="skeleton cover" alt="" />
        </div>
        <input
          className="skeleton skeleton-footer input-text"
          type="text"
        />
      </div>
      <span className="skeleton skeleton-text post-time" style={{ width: "150px" }}></span>
    </div>
  );
};

export default PostSkeleton;

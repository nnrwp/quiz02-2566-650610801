import React from "react";
export const PostOwner = ({ name, id, status, likeNum }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/me.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">
          {name} {id}
        </span>
      </div>

      <span className="text-white">{status}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}> {likeNum} คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};

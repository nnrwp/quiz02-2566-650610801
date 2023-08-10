import React from "react";
import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div className="d-flex gap-2 my-2">
      <img
        src={userImagePath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <div
        className="rounded rounded-3 p-2"
        style={{ backgroundColor: "#3A3B3C" }}
      >
        <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
          {username}
        </span>
      </div>
      <br />
      <span style={{ color: "#E4E6EB" }}> {commentText} </span>
      {likeNum !== 0 ? (
        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span style={{ color: "#B0B3B8" }}> {likeNum} คน</span>
        </div>
      ) : (
        ""
      )}
      {replies.map((rp) => (
        <Reply
          key={rp.likeNum}
          userImagePath={rp.userImagePath}
          username={rp.username}
          replyText={rp.replyText}
          likeNum={rp.likeNum}
        />
      ))}
    </div>
  );
};

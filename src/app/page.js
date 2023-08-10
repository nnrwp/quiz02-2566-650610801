"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          name="Rawipa Samhuay"
          id="650610801"
          status="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          likeNum="100"
        />

        {comments.map((ment, i) => {
          <Comment
            key={i}
            userImagePath={ment.userImagePath}
            username={ment.username}
            commentText={ment.commentText}
            likeNum={ment.likeNum}
            replies={ment.replies}
          />;
        })}
      </div>
    </div>
  );
}

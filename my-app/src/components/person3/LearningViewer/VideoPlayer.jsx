// VideoPlayer.jsx
import React from "react";

export default function VideoPlayer({ youtubeId }) {
  if (!youtubeId) return <p>No video available.</p>;

  return (
    <div className="w-full rounded-xl overflow-hidden border">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

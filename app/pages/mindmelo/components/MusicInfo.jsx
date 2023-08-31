import React from "react";
import Modal from "@/Components/Modal";
const MusicInfo = ({ modelData, modelActive, setModelActive }) => {
  const songData = modelData[0];

  return (
    <Modal modelActive={modelActive} setModelActive={setModelActive}>
      <h3 className="musicInfo-title">{songData.title}</h3>
      <p className="musicInfo-owner">By: {songData.source}</p>
      <p className="musicInfo-desc">{songData.desc}</p>
      <div className="musicInfo-tags">
        {songData.tags.map((tag) => (
          <p className="musicInfo-tag">{tag}</p>
        ))}
      </div>
      <iframe
        className="musicInfo-embed-video"
        height="400"
        src={songData.link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Modal>
  );
};

export default MusicInfo;

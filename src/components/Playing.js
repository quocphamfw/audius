import React, { useContext, forwardRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

function Playing(props, ref) {
  const { song, handleSetSong } = useContext(Songs);
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPrev = () => {
    handleSetSong(song.id - 1);
  };

  return (
    <div>
      <AudioPlayer
        ref={ref}
        className="player-music"
        src={song.url}
        // layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        onEnded={() => handleClickNext()}
      />
    </div>
  );
}
export default forwardRef(Playing);

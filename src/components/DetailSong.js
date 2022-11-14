import React, { useContext, forwardRef } from "react";
import { Songs } from "../Context";

function DetailSong(props, ref) {
  const { song } = useContext(Songs);
  return (
    <div className="col-span-1 p-3 flex flex-col">
      <div className="mt-8">
        <h2 className="text-cyan-400 font-semibold text-center mb-2">
          Now Playing
        </h2>
        <h2 className="text-neutral-500 text-3xl text-center ">{song.name}</h2>
      </div>
      <div className="w-[240px] m-auto">
        <img
          className="w-full rounded-[50%]"
          src={song.links}
          alt="avatar"
          ref={ref}
        ></img>
      </div>
      <div className="text-2xl mb-8 text-stone-300 text-center font-semibold">
        {song.author}
      </div>
    </div>
  );
}

export default forwardRef(DetailSong);

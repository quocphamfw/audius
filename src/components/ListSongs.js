import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
import icon from "../img/playing.gif";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);

  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  // const rowRef = useRef();

  // function handleBackClick() {
  //   rowRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full relative">
        <thead className="sticky top-0 h-12 text-teal-300 bg-slate-700">
          <tr>
            <th className="w-[10%] min-w-[30px]">
              <img className="ml-10" src={icon} alt="gif"></img>
            </th>
            <th className="w-[60%] text-left">Songs</th>
            <th className="w-[20%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody className="mt-4 h-full">
          {DataSongs.map((song, index) => (
            <tr
              // ref={rowRef}
              key={index}
              className={`bg-slate-800 h-12 cursor-pointer text-gray-500 hover:bg-slate-600  ${
                idSong === song.id && "text-teal-400 bg-slate-600"
              }`}
              onClick={() => {
                handlePlaySong(song.id);
                // handleBackClick();
              }}
            >
              <td className={"text-center"}>{index + 1}</td>
              <td className="">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

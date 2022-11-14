import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import { useEffect, useRef, useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) {
      setSong(DataSongs[0]);
    } else {
      setSong(song);
    }
  };

  //use forwardRef to get ref of img and audio in Detail comp and Playing comp
  const thumbRef = useRef();
  const audioRef = useRef();

  useEffect(() => {
    //img element
    const thumbRefElement = thumbRef.current;

    //animation spin (pause default)
    const thumbAnimate = thumbRefElement.animate(
      [{ transform: "rotate(360deg)" }],
      {
        duration: 10000,
        iterations: Infinity,
      }
    );
    thumbAnimate.pause();

    // console.log(thumbRef.current);
    // console.log(audioRef.current.audio.current);

    //audio element
    const audioRefElement = audioRef.current.audio.current;

    //rotate when click play
    audioRefElement.onplay = () => {
      thumbAnimate.play();
    };

    //stop when click pause
    audioRefElement.onpause = () => {
      thumbAnimate.pause();
    };
  }, []);

  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <DetailSong ref={thumbRef} />
          <ListSongs />
        </div>
        <Playing ref={audioRef} />
      </Songs.Provider>
    </div>
  );
}

export default App;

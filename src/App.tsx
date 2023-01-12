import React, { useEffect, useRef } from "react";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [totalTime, setTotalTime] = React.useState(0);

  const ref = useRef<HTMLAudioElement>(null);

  function handlePlayPause() {
    setIsPlaying(!isPlaying);
    if (ref.current?.paused) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }

  function timeUpdate() {
    setProgress(ref.current?.currentTime || 0);
    setTotalTime(ref.current?.duration || 0);
  }

  return (
    <div className="App">
      <h1>Desafio 01 - Player de Música</h1>

      <div className="content-container">
        <div style={{ flex: 1, display: "flex" }}>
          <MusicPlayer
            isPlaying={isPlaying}
            progress={progress}
            totalTime={totalTime}
            onClickPlay={handlePlayPause}
          />
        </div>

        <aside>
          <MusicPlayer
            isPlaying={isPlaying}
            progress={progress}
            totalTime={totalTime}
            onClickPlay={handlePlayPause}
            compact
          />
          <MusicPlayer
            isPlaying={isPlaying}
            progress={progress}
            totalTime={totalTime}
            onClickPlay={handlePlayPause}
            compact
            showProgress={false}
          />
        </aside>
      </div>

      <audio ref={ref} onTimeUpdate={timeUpdate} onCanPlay={timeUpdate}>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </audio>
    </div>
  );
}

export default App;

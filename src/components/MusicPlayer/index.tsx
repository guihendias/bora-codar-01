import React from "react";

import { Container, Controls, Footer, Header, Progress } from "./styles";

import play from "../../assets/play.svg";
import pause from "../../assets/pause.svg";
import playBack from "../../assets/play-back.svg";
import playForward from "../../assets/play-forward.svg";

interface Props {
  compact?: boolean;
  showProgress?: boolean;
  isPlaying?: boolean;
  onClickPlay?: () => void;
  progress?: number;
  totalTime?: number;
}

const MusicPlayer: React.FC<Props> = ({
  compact,
  progress = 0,
  totalTime = 0,
  isPlaying = false,
  showProgress = true,
  onClickPlay
}) => {
  const str_pad_left = (time: number, pad: string, length: number) => {
    return (new Array(length + 1).join(pad) + time).slice(-length);
  };

  const getTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
  };

  const handleOnPlayPause = () => {
    onClickPlay && onClickPlay();
  };

  return (
    <Container>
      <Header compact={compact}>
        <img
          src="https://regards.com.br/wp-content/uploads/2008/06/nightmare.jpg"
          alt="cover"
        />

        <main>
          <strong>Acorda Devinho</strong>
          <span>Banda Rocketseat</span>
        </main>
      </Header>

      <Footer>
        <Controls>
          <button>
            <img src={playBack} alt="back" />
          </button>
          <button onClick={handleOnPlayPause}>
            <img src={isPlaying ? pause : play} alt="play" />
          </button>
          <button>
            <img src={playForward} alt="forward" />
          </button>
        </Controls>

        {showProgress && (
          <>
            <Progress id="progress" value={progress} max={totalTime} />

            <div>
              <span>{getTime(progress)}</span>
              <span>{getTime(totalTime)}</span>
            </div>
          </>
        )}
      </Footer>
    </Container>
  );
};

export default MusicPlayer;

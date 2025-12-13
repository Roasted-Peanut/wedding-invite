import { useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef();

  return (
    <div style={{ position: "fixed", top: 16, right: 16, zIndex: 10 }}>
      <button
        onClick={() => audioRef.current.play()}
      >
        🔊
      </button>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

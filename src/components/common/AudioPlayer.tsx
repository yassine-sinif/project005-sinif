import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    // Event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} preload="metadata"></audio>
      
      <div className="audio-controls">
        <button 
          className="play-pause-btn" 
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        
        <div className="time-control">
          <span className="time current">{formatTime(currentTime)}</span>
          <input 
            type="range" 
            className="timeline" 
            min="0" 
            max={duration || 0} 
            value={currentTime} 
            onChange={handleTimeChange}
            step="0.01"
          />
          <span className="time duration">{formatTime(duration)}</span>
        </div>
        
        <div className="volume-control">
          <button 
            className="volume-btn" 
            onClick={() => setShowVolumeControl(!showVolumeControl)}
            aria-label="Volume"
          >
            {volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
          </button>
          
          {showVolumeControl && (
            <input 
              type="range" 
              className="volume-slider" 
              min="0" 
              max="1" 
              value={volume} 
              onChange={handleVolumeChange}
              step="0.01"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;

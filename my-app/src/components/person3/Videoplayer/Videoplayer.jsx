import React, { useRef, useState } from "react";
import { Box, Button, Typography, Select, MenuItem } from "@mui/material";

const Videoplayer = ({ title, videoUrl }) => {
  const videoRef = useRef();
  const [speed, setSpeed] = useState(1);

  const handlePlayPause = () => {
    if (videoRef.current.paused) videoRef.current.play();
    else videoRef.current.pause();
  };

  const handleSpeedChange = (e) => {
    const value = parseFloat(e.target.value);
    setSpeed(value);
    videoRef.current.playbackRate = value;
  };

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <video ref={videoRef} width="100%" controls style={{ marginTop: "10px" }}>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <Box mt={2} display="flex" alignItems="center" gap={2}>
        <Button variant="contained" onClick={handlePlayPause}>
          Play/Pause
        </Button>
        <Typography>Speed:</Typography>
        <Select value={speed} onChange={handleSpeedChange} size="small">
          <MenuItem value={0.5}>0.5x</MenuItem>
          <MenuItem value={1}>1x</MenuItem>
          <MenuItem value={1.5}>1.5x</MenuItem>
          <MenuItem value={2}>2x</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default Videoplayer;

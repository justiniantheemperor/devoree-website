import React, { useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";

const YouTubeButton = () => {
  const href = "https://www.youtube.com/@devoreeellis2437";

  const [iconStyle, setIconStyle] = useState({
    fill: "white",
    transition: "fill 600ms ease",
  });

  const iconHoverStyle = {
    fill: "#ff0000", // Red color
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <YouTubeIcon
        onMouseOver={() => {
          setIconStyle(iconHoverStyle);
        }}
        onMouseOut={() => {
          setIconStyle({ fill: "white" });
        }}
        style={{
          fill: iconStyle.fill,
          transition: "fill 600ms ease",
        }}
      />
    </a>
  );
};

export default YouTubeButton;

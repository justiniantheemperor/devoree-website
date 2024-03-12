import React, { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const InstagramButton = () => {
  const href = "https://www.instagram.com/devoree_/";

  const [iconStyle, setIconStyle] = useState({
    fill: "white",
    transition: "fill 600ms ease",
  });

  const iconHoverStyle = {
    fill: "url(#gradient)",
  };

  const gradientColors = [
    { offset: "0%", color: "#fdf497", opacity: 1 },
    { offset: "5%", color: "#fdf497", opacity: 1 },
    { offset: "45%", color: "#fd5949", opacity: 1 },
    { offset: "60%", color: "#d6249f", opacity: 1 },
    { offset: "90%", color: "#285AEB", opacity: 1 },
  ];

  const gradientId = "gradient";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <InstagramIcon
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
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <radialGradient id={gradientId} cx="30%" cy="107%" r="100%">
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={color.offset}
                style={{ stopColor: color.color, stopOpacity: color.opacity }}
              />
            ))}
          </radialGradient>
        </defs>
      </svg>
    </a>
  );
};

export default InstagramButton;

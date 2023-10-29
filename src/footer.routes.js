// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

// Sections
import HeadshotsPage from "layouts/pages/headshots";
import ReelsPage from "layouts/pages/reels";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Devoree Ellis",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <InstagramIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Reels",
      items: [
        { name: "Headshots", route: "/pages/headshots", component: <HeadshotsPage />, },
        { name: "Reels", route: "/pages/reels", component: <ReelsPage />, },
      ],
    },
    {
      name: "Headshots",
      items: [
        { name: "Headshots", route: "/pages/headshots", component: <HeadshotsPage />, },
        { name: "Reels", route: "/pages/reels", component: <ReelsPage />, },
      ],
    },
    {
      name: "Social Media",
      items: [
        { name: "Instagram", href: "https://iradesign.io/" },
        { name: "Youtube", href: "https://www.creative-tim.com/bits" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};

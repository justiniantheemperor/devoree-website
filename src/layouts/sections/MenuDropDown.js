/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function MenuDropDown() {
  const [dropdown, setDropdown] = useState(null);
  const [isCloseIcon, setIsCloseIcon] = useState(false);

  const openDropdown = ({ currentTarget }) => {
    setDropdown(currentTarget);
    setIsCloseIcon(!isCloseIcon);
  };

  const closeDropdown = () => {
    setDropdown(null);
    setIsCloseIcon(!isCloseIcon);
  };

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50; // Adjust this value as needed
      const isDropdownOpen = Boolean(dropdown);

      if (window.scrollY > threshold && isDropdownOpen) {
        setIsCloseIcon(true);
      } else if (isCloseIcon) {
        setIsCloseIcon(false);
        setDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdown, isCloseIcon]);

  // Styles
  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = {
    transform: isCloseIcon ? "rotate(90deg)" : "rotate(0)",
    marginLeft: 0,
    margin: 0,
    ...iconStyles,
  };

  return (
    <>
      {/* Menu */}
      <Menu
        anchorEl={dropdown}
        open={Boolean(dropdown)}
        onClose={closeDropdown}
      >
        <MenuItem onClick={closeDropdown}>
          <HashLink smooth to="#about">
            About
          </HashLink>
        </MenuItem>
        <MenuItem onClick={closeDropdown}>
          <HashLink smooth to="#reels">
            Reels
          </HashLink>
        </MenuItem>
        <MenuItem onClick={closeDropdown}>
          <HashLink smooth to="#voiceover">
            Voiceover
          </HashLink>
        </MenuItem>
        <MenuItem onClick={closeDropdown}>
          <HashLink smooth to="#resume">
            Resume
          </HashLink>
        </MenuItem>
        <MenuItem onClick={closeDropdown}>
          <HashLink smooth to="#gallery">
            Gallery
          </HashLink>
        </MenuItem>
        <MenuItem onClick={closeDropdown}>
          <HashLink smooth to="#testimonials">
            Testimonials
          </HashLink>
        </MenuItem>
        <MenuItem onClick={closeDropdown}>
          <HashLink smooth to="#contact">
            Contact
          </HashLink>
        </MenuItem>
      </Menu>
      {/* Button */}
      <MKButton
        variant="outlined"
        color="white"
        sx={{ display: { xs: "block", lg: "none" }, ml: "auto" }}
        onClick={openDropdown}
      >
        <MKBox
          color="white"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon sx={dropdownIconStyles}>{isCloseIcon ? "close" : "menu"}</Icon>
        </MKBox>
      </MKButton>
    </>
  );
}

export default MenuDropDown;

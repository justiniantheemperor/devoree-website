import React from "react";
import Carousel from "react-material-ui-carousel";
import "layouts/styles/carousel.css";

import { useMediaQuery, Card, CardMedia, Grid, Container } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Headshots
import hs1 from "assets/images/headshots/1.jpg";
import hs2 from "assets/images/headshots/2.jpg";
import hs3 from "assets/images/headshots/3.jpg";
import hs4 from "assets/images/headshots/4.jpg";
import hs5 from "assets/images/headshots/5.jpg";
import hs6 from "assets/images/headshots/6.jpg";
import hs7 from "assets/images/headshots/7.jpg";
import hs8 from "assets/images/headshots/8.jpg";
import hs9 from "assets/images/headshots/9.jpg";
import hs10 from "assets/images/headshots/10.jpg";
import hs11 from "assets/images/headshots/11.jpg";
import hs12 from "assets/images/headshots/12.jpg";
import hs13 from "assets/images/headshots/13.jpg";
import hs14 from "assets/images/headshots/14.jpg";
import hs15 from "assets/images/headshots/15.jpg";
import hs16 from "assets/images/headshots/16.jpg";
import hs17 from "assets/images/headshots/17.jpg";
import hs18 from "assets/images/headshots/18.jpg";



function Gallery(props) {
  const isSmallScreen = useMediaQuery("(max-width:770px)");

  const totalItems = props.length ? props.length : 3;
  const mediaLength = isSmallScreen ? 1 : totalItems;

  let items = [];

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / mediaLength} key={i}>
        <CardMedia
          className="Media"
          image={item.Image}
          title={item.Name}
        ></CardMedia>
      </Grid>
    );

    items.push(media);
  }

  return (
    <Container className="Gallery">
      <Grid container spacing={0} className="GalleryGrid">
        {items}
      </Grid>
    </Container>
  );
}

const items = [
  {
    Items: [
      {
        Image: hs1,
      },
      {
        Image: hs2,
      },
      {
        Image: hs3,
      },
    ],
  },
  {
    Items: [
      {
        Image: hs4,
      },
      {
        Image: hs5,
      },
      {
        Image: hs6,
      },
    ],
  },
  {
    Items: [
      {
        Image: hs7,
      },
      {
        Image: hs8,
      },
      {
        Image: hs9,
      },
    ],
  },
  {
    Items: [
      {
        Image: hs10,
      },
      {
        Image: hs11,
      },
      {
        Image: hs12,
      },
    ],
  },
  {
    Items: [
      {
        Image: hs13,
      },
      {
        Image: hs14,
      },
      {
        Image: hs15,
      },
    ],
  },
  {
    Items: [
      {
        Image: hs16,
      },
      {
        Image: hs17,
      },
      {
        Image: hs18,
      },
    ],
  }
];

class BannerExample extends React.Component {
  state = {
    autoPlay: true,
    animation: "slide",
    indicators: true,
    timeout: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
  };

  toggleAutoPlay = () => {
    this.setState({
      autoPlay: !this.state.autoPlay,
    });
  };

  toggleIndicators = () => {
    this.setState({
      indicators: !this.state.indicators,
    });
  };

  toggleNavButtonsAlwaysVisible = () => {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible,
    });
  };

  toggleNavButtonsAlwaysInvisible = () => {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible,
    });
  };

  toggleCycleNavigation = () => {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation,
    });
  };

  changeAnimation = (event) => {
    this.setState({
      animation: event.target.value,
    });
  };

  changeTimeout = (event, value) => {
    this.setState({
      timeout: value,
    });
  };

  render() {
    return (
      <MKBox
        component="section"
        position="relative"
        px={{ xs: 2, lg: 0 }}
        mx={-2}
      >
        <Container>
          <Grid item xs={12} md={8} sx={{ mb: 2, textAlign: "center" }}>
            <MKTypography variant="h3" color="white">
              Gallery
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              See more of my headshots and photos from previous projects.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ mb: 6, textAlign: "center" }}>
            <Card
              sx={{background: "linear-gradient(195deg, #5C1E2C, #1F0A0F)",}}
            >
              <Carousel
                className="Example"
                autoPlay={this.state.autoPlay}
                animation={this.state.animation}
                indicators={this.state.indicators}
                timeout={this.state.timeout}
                cycleNavigation={this.state.cycleNavigation}
                navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                duration={400}
                activeIndicatorIconButtonProps={{
                  style: {
                    color: "#E7827F",
                  },
                }}
              >
                {items.map((item, index) => {
                  return <Gallery item={item} key={index} />;
                })}
              </Carousel>
            </Card>
          </Grid>
        </Container>
      </MKBox>
    );
  }
}

export default BannerExample;

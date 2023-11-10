import React from "react";
import Carousel from "react-material-ui-carousel";
import "pages/Home/styles/gallery.css";

import { Card, CardMedia, Grid, Container } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Headshots
// import main1 from "assets/images/headshots/Devoree.1a.jpg";
// import main2 from "assets/images/headshots/Devoree.1b.jpg";
// import main3 from "assets/images/headshots/Devoree.1c.jpg";

// import dark1 from "assets/images/headshots/Devoree.2a.jpg";
// import dark2 from "assets/images/headshots/Devoree.2b.jpg";
// import dark3 from "assets/images/headshots/Devoree.2c.jpg";
// import dark4 from "assets/images/headshots/Devoree.2d.jpg";
// import dark5 from "assets/images/headshots/Devoree.2e.jpg";
// import dark6 from "assets/images/headshots/Devoree.2f.jpg";
// import dark7 from "assets/images/headshots/Devoree.2g.jpg";

// import happy1 from "assets/images/headshots/Devoree.3a.jpg";
// import happy2 from "assets/images/headshots/Devoree.3b.jpg";
// import happy3 from "assets/images/headshots/Devoree.3c.jpg";
// import happy4 from "assets/images/headshots/Devoree.3d.jpg";

function Banner(props) {
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems;

  let items = [];

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={i}>
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
    <Container raised className="Banner">
      <Grid container spacing={0} className="BannerGrid">
        {items}
      </Grid>
    </Container>
  );
}

const items = [
  {
    Items: [
      {
        Image: "https://source.unsplash.com/featured/?macbook",
      },
      {
        Image: "https://source.unsplash.com/featured/?iphone",
      },
      {
        Image: "https://source.unsplash.com/featured/?vacuum,cleaner",
      },
    ],
  },
  {
    Items: [
      {
        Image: "https://source.unsplash.com/featured/?washingmachine",
      },
      {
        Image: "https://source.unsplash.com/featured/?macbook",
      },
      {
        Image: "https://source.unsplash.com/featured/?vacuum,cleaner",
      },
    ],
  },
  {
    Items: [
      {
        Image: "https://source.unsplash.com/featured/?lamp",
      },
      {
        Image: "https://source.unsplash.com/featured/?vase",
      },
      {
        Image: "https://source.unsplash.com/featured/?macbook",
      },
    ],
  },
];

class BannerExample extends React.Component {
  state = {
    autoPlay: true,
    animation: "fade",
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
      // <MKBox
      //   component="section"
      //   variant="gradient"
      //   bgColor="dark"
      //   position="relative"
      //   py={6}
      //   px={{ xs: 2, lg: 0 }}
      //   mx={-2}
      // >
        <Container>
          <Grid item xs={12} md={8} sx={{ mb: 6, textAlign: "center" }}>
            <MKTypography variant="h3" color="white">
              Gallery
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              See more of my headshots and photos from previous productions.
            </MKTypography>
          </Grid>
          <Card>
            <Carousel
              className="Example"
              autoPlay={this.state.autoPlay}
              animation={this.state.animation}
              indicators={this.state.indicators}
              timeout={this.state.timeout}
              cycleNavigation={this.state.cycleNavigation}
              navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
              navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
            >
              {items.map((item, index) => {
                return <Banner item={item} key={index} />;
              })}
            </Carousel>
          </Card>
        </Container>
      // </MKBox>
    );
  }
}

export default BannerExample;

import React from "react";
import Carousel from "react-material-ui-carousel";
import "layouts/styles/carousel.css";

import { useMediaQuery, Card, CardMedia, Grid, Container } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import HorizontalTeamCard from "components/HorizontalTeamCard";

// Headshots
import testimonial1 from "assets/images/testimonial/testim-1.jpeg";
import testimonial2 from "assets/images/testimonial/testim-2.png";
import testimonial3 from "assets/images/testimonial/testim-3.png";
import testimonial4 from "assets/images/testimonial/testim-4.jpg";
import testimonial5 from "assets/images/testimonial/testim-5.jpg";
import testimonial6 from "assets/images/testimonial/testim-6.jpg";
import testimonial7 from "assets/images/testimonial/testim-7.png";
import testimonial8 from "assets/images/testimonial/testim-8.jpg";

const items = [
  {
    Items: [
      {
        Image: testimonial1,
        Name: (
          <>
            Makamae, director, <i>Invitation</i>
          </>
        ),
        Description: (
          <>
            “<strong>Devoree gives consistently beautiful performances.</strong>{" "}
            She acts with such intellect and emotion, it makes her one of my
            favorite actresses to collaborate with and direct.{" "}
            <strong>She does her research</strong> to understand what building
            blocks make up a character, and then uses scores of{" "}
            <strong>empathy</strong> to bring that person to life. It is truly a
            privilege to witness and a joy to get to work with.”
          </>
        ),
      },
    ],
  },
  {
    Items: [
      {
        Image: testimonial2,
        Name: (
          <>
            <i>The Utah Theater Bloggers</i>
          </>
        ),
        Description: (
          <>
            “Doña Ana was played by Devoree Ellis and{" "}
            <strong>stole each moment she was on stage</strong>. Her reactions
            seemed <strong>sincere</strong> and <strong>genuine</strong> when
            she learned that her plans were being thwarted in lengthy
            narratives. I was impressed how she managed to have such a{" "}
            <strong>distinct range of suited reactions</strong> in each moment.
            Her cadence was unique and allowed individual words to stand on
            their own. I loved her sentences that would start with 'if', have a
            pause to reflect, and then aggressively pursue an objective. Ana is
            manipulative and Ellis was <strong>eager to play tactics</strong>{" "}
            that would impact those around her.{" "}
            <strong>Ana owned the story and Ellis owned the stage</strong>.”
          </>
        ),
      },
    ],
  },
  {
    Items: [
      {
        Image: testimonial3,
        Name: (
          <>
            <i>The Orange County Register </i>{" "}upon her recipient of the title
            “Orange County Actor of the Year”
          </>
        ),
        Description: (
          <>
            “When watching her, you{" "}
            <strong>never felt like she was putting on a performance</strong>.
            Not only is she an <strong>honest</strong> and{" "}
            <strong>connected performer</strong>, but she is also a{" "}
            <strong>talented playwright</strong>.”
          </>
        ),
      },
    ],
  },
  {
    Items: [
      {
        Image: testimonial4,

        Name: (
          <>
            Tom Russell, director, <i>Escape From Planet Death!</i>
          </>
        ),
        Description: (
          <>
            “Directors know that casting has as much to do with the{" "}
            <strong>personality </strong>
            of the actors as anything — life’s too short to be miserable each
            day for a few months. Obviously, the actor has to be talented,
            prepared, and right for the part as well. Devoree checked all those
            boxes on our show: <strong>smart, funny, talented, collaborative, and just a blast to be
              around</strong>.”
          </>
        ),
      },
    ],
  },
  {
    Items: [
      {
        Image: testimonial5,

        Name: (
          <>
            Timothy Threlfall, director, <i>Fight or Flight.</i>
          </>
        ),
        Description: (
          <>
            “Devoree Ellis has been a delight to work with… I was able to watch
            Devoree's significant progress in electronic medium performance and
            enjoy her <strong> positive and affirming personality</strong>. I am
            continually impressed with her{" "}
            <strong>talent, work ethic and positivity.</strong>”
          </>
        ),
      },
    ],
  },
  {
    Items: [
      {
        Image: testimonial6,
        Name: (
          <>
            Melanie Mckay Cartwright, director, <i>Matilda the Musical</i>
          </>
        ),
        Description: (
          <>
            “As a <strong>hard-working </strong>artist, Devoree brings a
            variety of choices to the table and{" "}
            <strong> takes direction with ease</strong>. She elevates every
            performance with her passion and creativity.”
          </>
        ),
      },
    ],
  },
  {
    Items: [
      {
        Image: testimonial7,

        Name: (
          <>
            Regan Whimpey, director, <i>The Wizard of Oz</i>
          </>
        ),
        Description: (
          <>
            “One word describes Devoree: <strong>Directable</strong>. Passionate
            about her craft. She makes good use of her instincts to make good
            choices on stage. She is a <strong> natural talent</strong>. She is{" "}
            <strong> incredibly versatile</strong>.”
          </>
        ),
      },
    ],
  },
  {
    Items: [
      {
        Image: testimonial8,

        Name: (
          <>
            Joanna Noall, director, <i>The 39 Steps</i>
          </>
        ),
        Description: (
          <>
            “Devoree is fantastic! She is{" "}
            <strong> passionate, inventive, and humble</strong>. She
            <strong> builds strong relationships</strong> with cast mates, and
            is a <strong> team player</strong>. Her performances are{" "}
            <strong>authentic</strong> and <strong>engaging</strong>. She's a
            pleasure to work with!”
          </>
        ),
      },
    ],
  },
];

function Testimonial(props) {
  const isSmallScreen = useMediaQuery("(max-width:770px)");

  const totalItems = props.length ? props.length : 1;
  const mediaLength = isSmallScreen ? 1 : totalItems;

  let items = [];

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / mediaLength} key={i}>
        <MKBox mb={1} sx={{ width: "100%", overflow: "hidden" }}>
          <HorizontalTeamCard
            image={item.Image}
            name={item.Name}
            position={{ color: "info", Name: item.Name }}
            description={item.Description}
          />
        </MKBox>
      </Grid>
    );

    items.push(media);
  }

  return (
    <Container className="Testimonial">
      <Grid container spacing={3} className="CarouselGrid">
        {items}
      </Grid>
    </Container>
  );
}

class Testimonials extends React.Component {
  state = {
    autoPlay: false,
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
        py={6}
        mx={-2}
        mb={0}
      >
        <Container>
          <Grid item xs={12} md={8} sx={{ mb: 6, textAlign: "center" }}>
            <MKTypography variant="h3" color="white">
              Testimonials
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              See more of my headshots and photos from previous projects.
            </MKTypography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ textAlign: "center" }}>
            <Card
              sx={{
                background: "linear-gradient(195deg, #5C1E2C, #1F0A0F)",
                paddingTop: "20px",
              }}
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
                  return <Testimonial item={item} key={index} />;
                })}
              </Carousel>
            </Card>
          </Grid>
        </Container>
      </MKBox>
    );
  }
}

export default Testimonials;

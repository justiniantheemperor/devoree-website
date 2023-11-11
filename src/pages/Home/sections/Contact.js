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

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// @mui material components
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/graphics/happy.jpg";

function Contact() {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "right",
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47uja95",
        "template_1dcwtoi",
        form.current,
        "3U6prVDQaI5ojnfSd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSnackbarMessage("Message sent successfully!");
          setSnackbarSeverity("success");
          setOpenSnackbar(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSnackbarMessage("Error sending message. Please try again.");
          setSnackbarSeverity("error");
          setOpenSnackbar(true);
        }
      );
  };

  return (
    <React.Fragment>
      <MKBox component="section" py={{ xs: 0, lg: 6 }}>
        <Container>
          <Grid container item>
            <MKBox
              width="100%"
              bgColor="white"
              borderRadius="xl"
              shadow="xl"
              mb={6}
              sx={{ overflow: "hidden" }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  position="relative"
                  px={0}
                  sx={backgroundImageStyle}
                ></Grid>
                <Grid item xs={12} lg={7}>
                  <MKBox component="form" p={2} ref={form} onSubmit={sendEmail}>
                    <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                      <MKTypography variant="h2" mb={1}>
                        Say Hi!
                      </MKTypography>
                      <MKTypography variant="body1" color="text" mb={2}>
                        I&apos;d love to talk with you.
                      </MKTypography>
                    </MKBox>
                    <MKBox pt={0.5} pb={3} px={3}>
                      <Grid container>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            required
                            type="text"
                            name="user_name"
                            variant="standard"
                            label="Your full name"
                            placeholder="Tom Hanks"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            required
                            type="email"
                            name="user_email"
                            variant="standard"
                            label="Your email"
                            placeholder="tomhanks123@gmail.com"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} pr={1} mb={6}>
                          <MKInput
                            required
                            type="text"
                            name="message"
                            variant="standard"
                            label="Your message"
                            placeholder="I want to work with you because..."
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            multiline
                            rows={6}
                            inputProps={{ minLength: 12 }}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        justifyContent="flex-end"
                        textAlign="right"
                        ml="auto"
                      >
                        <MKButton
                          variant="gradient"
                          color="info"
                          type="submit"
                          value="Send"
                        >
                          Send Message
                        </MKButton>
                      </Grid>
                    </MKBox>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </React.Fragment>
  );
}

export default Contact;

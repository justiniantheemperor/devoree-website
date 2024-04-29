import PropTypes from "prop-types";
import { useMediaQuery, Card, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function HorizontalTeamCard({ image, name, position, description }) {
  const isSmallScreen = useMediaQuery("(max-width:990px)");

  return (
    <Card sx={{ position: "relative", height: "auto" }}> 
      <Grid container>
        {!isSmallScreen && (
          <Grid
            item
            xs={3}
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "md",
              minHeight: "100%", 
              aspectRatio: "1 / 1", // Maintain the aspect ratio
              borderBottomLeftRadius: "10px",
              borderTopLeftRadius: "10px"
            }}
          />
        )}
        <Grid item xs={!isSmallScreen ? 9 : 12} sx={{ minHeight: "100%", display: "flex", alignItems: "center" }} >
          <MKBox
            pt={{ xs: 3, lg: 2.5 }}
            py={2.5}
            px={4}
            lineHeight={1}
            textAlign="justify"
          >
            <MKTypography variant="body3" color="text">
              {description}
            </MKTypography>
            <MKTypography variant="h6" my={1} sx={{ textAlign: "right" }}>
              {name}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;

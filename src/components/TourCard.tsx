import { AccessTime } from "@mui/icons-material";
import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface Props {
  tour: {
    name: string;
    price: number;
    rating: number;
    image: string;
  };
}

const TourCard: React.FC<Props> = ({ tour }) => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
        ],
      },
    },
  });

  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt="image" className="img" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="span" marginLeft={1}>
                5 hours ago
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                value={tour.rating}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="span" marginLeft={1}>
                4.5
              </Typography>
              <Typography variant="body3" component="span" marginLeft={1}>
                (650 reviews)
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;

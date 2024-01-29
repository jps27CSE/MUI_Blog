import { Container, Grid, Typography } from "@mui/material";
import "./App.css";
import TourCard from "./components/TourCard";
import SearchAppBar from "./components/AppBar";
import cities from "./data.json";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginBottom={3}
              marginTop={5}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}

export default App;

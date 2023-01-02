import React from "react";
import { Box, CssBaseline, useMediaQuery, Container } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { appTheme } from "./theme";
import images from "./assets/index";
import LayoutList from "./LayoutList";

const App = () => {
  let theme = createTheme(appTheme);
  theme = responsiveFontSizes(theme);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: "20vh",
            backgroundImage: matches
              ? `url(${images.bgHeaderMobile})`
              : `url(${images.bgHeaderDesktop})`,
            backgroundSize: "cover",
            backgroundColor: theme.palette.primary.main,
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Container
          fixed
          sx={{
            px: 4,
          }}
        >
          <LayoutList />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;

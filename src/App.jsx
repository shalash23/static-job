import React, { useContext } from "react";
import {
  Box,
  CssBaseline,
  useMediaQuery,
  Container,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { appTheme } from "./theme";
import images from "./assets/index";
import LayoutList from "./LayoutList";
import { FilteredState, FilterContext } from "./FilterContext";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [filteredState, setFilteredState] = useContext(FilterContext);
  const [filteredItems] = useContext(FilteredState);
  console.log(filteredItems);
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
          {filteredState.length > 0 && (
            <AnimatePresence mode="popLayout">
              <Paper
                component={motion.div}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ type: "spring", stifness: 80 }}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  mt: -2,
                  p: 4,
                  gap: 2,
                }}
              >
                <AnimatePresence mode="popLayout">
                  {Array.from(filteredItems).map((items) => {
                    return (
                      <React.Fragment key={items}>
                        <Chip
                          label={items}
                          component={motion.div}
                          initial={{ opacity: 0.4, y: 100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{
                            type: "spring",
                            stifness: 150,
                          }}
                          layout
                          variant="outlined"
                          size="medium"
                          sx={{
                            fontSize: 14,
                            textAlign: "center",
                            fontWeight: "700",
                            color: theme.palette.primary.main,
                            backgroundColor: "hsl(180, 31%, 95%)",
                            "&:focus": {
                              color: "white",
                            },
                            "&:hover": {
                              color: "white",
                            },
                            "&:active": {
                              color: "white",
                            },
                          }}
                          onDelete={(e) => {
                            const itemTarget =
                              e.target.closest("div").textContent;
                            setFilteredState((items) => {
                              return items.filter(
                                (item) => item !== itemTarget
                              );
                            });
                          }}
                        />
                      </React.Fragment>
                    );
                  })}
                </AnimatePresence>
              </Paper>
            </AnimatePresence>
          )}
          <LayoutList />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;

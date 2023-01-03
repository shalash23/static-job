import React, { useContext } from "react";
import { Paper, Typography, Box, Chip, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion } from "framer-motion";
import { FilterContext } from "../../FilterContext";

const CardDesktop = ({
  name,
  logo,
  newItem,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const theme = useTheme();
  const [_, setFilters] = useContext(FilterContext);
  return (
    <Paper
      component={motion.div}
      layout
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        type: "spring",
        duration: 0.8,
        stifness: 50,
        default: { ease: "linear" },
      }}
      sx={{
        mt: 8,
        mb: 3,
        boxShadow: featured
          ? `-8px 0px 0px 0px ${theme.palette.primary.main}, 0px 0px 27px 1.9px rgba(0,0,0,0.28)`
          : "0px 0px 28px 1.5px rgba(0,0,0,0.4)",

        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 4,
        alignContent: "center",
        p: 3,
      }}
      elevation={24}
    >
      <img
        src={logo}
        alt={name}
        height="80px"
        width="80px"
        style={{
          marginLeft: "2em",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          alignContent: "center",
          ml: 1,
          minWidth: "max-content",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component="h2"
            variant="subtitle1"
            color={theme.palette.primary.main}
            sx={{
              mr: 2,
            }}
          >
            {name}
          </Typography>
          {newItem && (
            <Chip
              label="NEW!"
              color="primary"
              sx={{
                color: "white",
                fontSize: 14,
                textAlign: "center",
                py: 1,
                mr: 2,
              }}
              size={"small"}
            />
          )}
          {featured && (
            <Chip
              label="FEATURED"
              sx={{
                color: "white",
                fontSize: 14,
                textAlign: "center",
                py: 1,
                backgroundColor: "hsl(180, 14%, 20%)",
              }}
              size={"small"}
            />
          )}
        </Box>
        <Typography
          variant="body1"
          component="h3"
          noWrap={true}
          sx={{
            fontWeight: "700",
            my: 1,
          }}
        >
          {position}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // alignContent: "center",
            justifyContent: "space-between",
            gap: 1,
            minWidth: "100%",
          }}
        >
          <Typography variant="subtitle2" component="p" color="secondary">
            {postedAt}
          </Typography>
          <FiberManualRecordIcon
            color="secondary"
            sx={{
              fontSize: 7,
            }}
          />
          <Typography variant="subtitle2" component="p" color="secondary">
            {contract}
          </Typography>
          <FiberManualRecordIcon
            color="secondary"
            sx={{
              fontSize: 8,
            }}
          />
          <Typography variant="subtitle2" component="p" color="secondary">
            {location}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          gap: 2,
          ml: "auto",
          mr: 2,
        }}
      >
        <Button
          disableElevation
          variant="contained"
          size="small"
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
          onClick={(e) => {
            setFilters((prevFilters) => [...prevFilters, e.target.textContent]);
          }}
        >
          {role}
        </Button>
        <Button
          disableElevation
          variant="contained"
          size="small"
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
          onClick={(e) => {
            setFilters((prevFilters) => [...prevFilters, e.target.textContent]);
          }}
        >
          {level}
        </Button>

        {languages.map((language) => {
          return (
            <React.Fragment key={language}>
              <Button
                disableElevation
                variant="contained"
                size="small"
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
                onClick={(e) => {
                  setFilters((prevFilters) => [
                    ...prevFilters,
                    e.target.textContent,
                  ]);
                }}
              >
                {language}
              </Button>
            </React.Fragment>
          );
        })}

        {tools.map((tool) => {
          return (
            <React.Fragment key={tool}>
              <Button
                disableElevation
                variant="contained"
                size="small"
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
                onClick={(e) => {
                  setFilters((prevFilters) => [
                    ...prevFilters,
                    e.target.textContent,
                  ]);
                }}
              >
                {tool}
              </Button>
            </React.Fragment>
          );
        })}
      </Box>
    </Paper>
  );
};

export default CardDesktop;

import React from "react";
import { Paper, Typography, Box, Chip, Divider, Button } from "@mui/material";
import images from "../../assets/index";
import { useTheme } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Card = ({
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
  return (
    <Paper
      elevation={24}
      sx={{
        padding: 3,
        mt: 12,
        mb: 5,
        borderLeft: featured
          ? `6px solid ${theme.palette.primary.main}`
          : "none",
      }}
    >
      <img
        src={logo}
        alt={name}
        height="55px"
        width="55px"
        style={{
          transform: "translate(-10%,-85%)",
          position: "absolute",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mt: 2,
        }}
      >
        <Typography
          component="h2"
          variant="subtitle1"
          color={theme.palette.primary.main}
          sx={{
            mt: 1,
            mr: 3,
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
        sx={{
          mt: 2,
          fontWeight: "700",
        }}
      >
        {position}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          gap: "0.5em",
          my: 2,
        }}
      >
        <Typography variant="subtitle2" component="p" color="secondary">
          {postedAt}
        </Typography>
        <FiberManualRecordIcon
          color="secondary"
          sx={{
            fontSize: 8,
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
      <Divider />
      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
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
          }}
        >
          {level}
        </Button>

        {languages.map((language) => {
          return (
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
              }}
            >
              {language}
            </Button>
          );
        })}

        {tools.map((tool) => {
          return (
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
              }}
            >
              {tool}
            </Button>
          );
        })}
      </Box>
    </Paper>
  );
};

export default Card;

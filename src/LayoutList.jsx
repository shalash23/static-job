import React from "react";
import Card from "./components/Layouts/Card";
import images from "./assets/index";
import data from "../../data.json";
import { useMediaQuery, useTheme } from "@mui/material";
import CardDesktop from "./components/Layouts/CardDesktop";

const LayoutList = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const cardMobile = data.map((item) => {
    const { logo } = item;
    return (
      <React.Fragment key={item.id}>
        <Card
          name={item.company}
          logo={images[logo]}
          newItem={item.new}
          featured={item.featured}
          position={item.position}
          role={item.role}
          level={item.level}
          postedAt={item.postedAt}
          contract={item.contract}
          location={item.location}
          languages={item.languages}
          tools={item.tools}
        />
      </React.Fragment>
    );
  });
  const cardDesktop = data.map((item) => {
    const { logo } = item;
    return (
      <React.Fragment key={item.id}>
        <CardDesktop
          name={item.company}
          logo={images[logo]}
          newItem={item.new}
          featured={item.featured}
          position={item.position}
          role={item.role}
          level={item.level}
          postedAt={item.postedAt}
          contract={item.contract}
          location={item.location}
          languages={item.languages}
          tools={item.tools}
        />
      </React.Fragment>
    );
  });

  return <>{matches ? cardMobile : cardDesktop}</>;
};

export default LayoutList;

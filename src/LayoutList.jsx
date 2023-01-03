import React, { useContext } from "react";
import Card from "./components/Layouts/Card";
import images from "./assets/index";
import { useMediaQuery, useTheme } from "@mui/material";
import CardDesktop from "./components/Layouts/CardDesktop";
import { AnimatePresence } from "framer-motion";
import { JobsContext, FilteredState } from "./FilterContext";

const LayoutList = () => {
  const [data] = useContext(JobsContext);
  const [filters] = useContext(FilteredState);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const filteredArray = data.filter((item, _, arr) => {
    if ([...filters].length === 0) return arr;
    if ([...filters].includes(item.role)) return item;
    if ([...filters].includes(item.level)) return item;
    if (item.tools.find((tool) => [...filters].includes(tool))) return item;
    if (item.languages.find((language) => [...filters].includes(language)))
      return item;
  });

  console.log(filteredArray);
  const cardMobile = filteredArray.map((item) => {
    const { logo } = item;
    return (
      <React.Fragment key={item.id}>
        <AnimatePresence>
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
        </AnimatePresence>
      </React.Fragment>
    );
  });
  const cardDesktop = filteredArray.map((item) => {
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

  return (
    <>
      <AnimatePresence>{matches ? cardMobile : cardDesktop}</AnimatePresence>
    </>
  );
};

export default LayoutList;

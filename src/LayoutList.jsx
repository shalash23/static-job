import React from "react";
import Card from "./components/Layouts/Card";
import images from "./assets/index";
import data from "../../data.json";

const LayoutList = () => {
  const cards = data.map((item) => {
    const { logo } = item;
    return (
      <Card
        key={item.id}
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
    );
  });

  return <>{cards}</>;
};

export default LayoutList;

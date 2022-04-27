import React from "react";
import Element from "components/Element";
import content from "database/content.json";

import "./app.scss";

const App = () => (
  <>
    {content.map((item: any) => (
      <Element key={item.name} item={item} />
    ))}
  </>
);

export default App;

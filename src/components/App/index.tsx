import React from "react";
import Element from "components/Element";
import content from "database/content.json";

import "./app.scss";

function App() {
  return (
    <>
      {content.map((item: any) => (
        <article key={item.name} className="content">
          <Element item={item} />
        </article>
      ))}
    </>
  );
}

export default App;

import QuestionGroup from "components/QuestionGroup";
import content from "database/content.json";
import React from "react";
import "./app.scss";

const App = () => (
  <>
    <QuestionGroup title="Mode multiple" items={content} mode="multiple" />
    <QuestionGroup title="Mode multiple" items={content} mode="single" />
  </>
);

export default App;

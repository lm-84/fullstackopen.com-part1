import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = (props) => {
  return <h1>{props.text}</h1>;
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Stat = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };
  const increaseBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Title text="statistics" />
      <Stat text="good" value={good} />
      <Stat text="neutral" value={neutral} />
      <Stat text="bad" value={bad} />
      <Stat text="all" value={good + neutral + bad} />
      <Stat
        text="average"
        value={
          good + neutral + bad == 0 ? 0 : (good - bad) / (good + neutral + bad)
        }
      />
      <Stat
        text="positive"
        value={
          good + neutral + bad == 0
            ? "no data"
            : 100 * (good / (good + neutral + bad)) + " %"
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

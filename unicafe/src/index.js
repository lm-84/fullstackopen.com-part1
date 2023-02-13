import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = (props) => {
  return <h1>{props.text}</h1>;
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.bad} />
      <Statistic text="all" value={props.good + props.neutral + props.bad} />
      <Statistic
        text="average"
        value={
          (props.good - props.bad) / (props.good + props.neutral + props.bad)
        }
      />
      <Statistic
        text="positive"
        value={
          100 * (props.good / (props.good + props.neutral + props.bad)) + " %"
        }
      />
    </div>
  );
};

const Statistic = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

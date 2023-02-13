import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = (props) => {
  return <h1>{props.text}</h1>;
};

const Anecdote = (props) => {
  return (
    <div>
      <div>{anecdotes[props.which]}</div>
    </div>
  );
};

const Points = (props) => {
  return <div>has {props.points} votes </div>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const getRandomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const getMostVotedAnecdoteId = () => {
    let mostVoted = 0;
    for (let i = 0; i < points.length; i++) {
      if (points[i] > points[mostVoted]) {
        mostVoted = i;
      }
    }
    return mostVoted;
  };

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote which={selected} />
      <Points points={points[selected]} />
      <div>
        <button onClick={vote}>vote</button>
        <button onClick={getRandomAnecdote}>next anecdote</button>
      </div>
      <Title text="Anecdote whit most votes" />
      <Anecdote which={getMostVotedAnecdoteId()} />
      <Points points={points[getMostVotedAnecdoteId()]} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));

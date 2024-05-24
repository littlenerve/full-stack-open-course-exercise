import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [points, setPoint] = useState([0, 0, 0, 0, 0, 0, 0])

  const vote = (selected, points) => () => {
    const copy = [...points]
    copy[selected] += 1;
    setPoint(copy);
  }

  let res = findIndexOfMaxAndMax([...points])
  const max = res[1];
  const maxIndex = res[0];
  return (
    <div>
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <Button handleClick={vote(selected, points)} text={"vote"}></Button>
        <Button handleClick={() => setSelected(getRandomInteger(0, 6))} text={"next anecdote"}></Button>
      </div>
      <div>
        <p>Anecdote with most votes</p>
        <p> {anecdotes[maxIndex]}</p>
        <p>has {max} votes</p>
      </div>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findIndexOfMaxAndMax(arr) {
  if (arr.length === 0) {
    return -1; // 返回-1表示数组为空
  }

  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return [maxIndex, max];
}



export default App
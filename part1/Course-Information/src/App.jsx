import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = good + neutral + bad
  let average = (good - bad) / all;
  let positive = (good / all) * 100;
  return (
    <div>
      <Head text={"give feed back"}></Head>
      <Button handleClick={() => setGood(good + 1)} text={"good"}></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
      <Button handleClick={() => setBad(bad + 1)} text={"bad"}></Button>
      <Statics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}></Statics>
    </div>
  )
}

const Statics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        <Head text={"statics"}></Head>
        <Head text={"no feadback"}></Head>
      </div>
    )
  }
  return (
    <div>
      <Head text={"statics"}></Head>
      <Show desc={"good"} socre={good}></Show>
      <Show desc={"neutral"} socre={neutral}></Show>
      <Show desc={"bad"} socre={bad}></Show>
      <Show desc={"all"} socre={all}></Show>
      <Show desc={"average"} socre={average}></Show>
      <Show desc={"positive"} socre={positive + "%"}></Show>
    </div>
  )
}

const Head = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Show = ({ desc, socre }) => {
  if (socre !== socre) {
    return (
      <div>
        <p>{desc}</p>
      </div>
    )
  } else {
    return (<div>
      <p>{desc} {socre}</p>
    </div>
    )
  }

}


export default App
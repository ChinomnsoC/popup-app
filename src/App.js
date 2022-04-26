import React from 'react'
import Joke from './Joke'
import './App.css'

function App() {
  return (
    <div >
      <Joke punchline="Who is in the garden?"/>
      <Joke question="Who is a boy?" punchline="Ade is a boy!"/>
      <Joke question="Who is a girl?" punchline="Simbi is a girl!"/>
      <Joke question="Who is a boy?" punchline="Adebayo is a boy!"/>
      <Joke question="Who is a girl?" punchline="Simisola is a girl!"/>
      

    </div>
  );
}

export default App

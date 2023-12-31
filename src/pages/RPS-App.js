import { useState } from 'react';
import './rps-app.css'

import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandLizard } from "react-icons/fa";
import { FaRegHandSpock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const RPS_App = () => {
  const [selectionPlayer,setSelectionPlayer] = useState([true,true,true,true,true])
  const [selectionNPC , setSelectionNPC] = useState([false,false,false,false,false])
  const [winner , setWinner] = useState('')
  const [npcScore, setNPCscore] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)

  const playerSelected = (e) => {
    const id = e.target.parentNode.id
    if(id === '1') setSelectionPlayer([true,false,false,false,false])
    else if(id === '2') setSelectionPlayer([false,true,false,false,false])
    else if(id === '3') setSelectionPlayer([false,false,true,false,false])
    else if(id === '4') setSelectionPlayer([false,false,false,true,false])
    else if(id === '5') setSelectionPlayer([false,false,false,false,true])
    const randomNumberForNPC = Math.floor(Math.random() * (26 - 21) + 21);
    nowNPCSelecting(randomNumberForNPC , +id)
  }

  const nowNPCSelecting = (num , id) => {
    let i = 1
    let j = 1
    const callback = () => {
      if(i === 1) setSelectionNPC([true,false,false,false,false])
      else if(i === 2) setSelectionNPC([false,true,false,false,false])
      else if(i === 3) setSelectionNPC([false,false,true,false,false])
      else if(i === 4) setSelectionNPC([false,false,false,true,false])
      else if(i === 5) {
        i = 0
        setSelectionNPC([false,false,false,false,true])
      }

      i = i + 1
      j = 1 + j
      if (j === num+1) {
        whosTheWinner(j-21, id)
        stopSelecting()
      }
    }
  
  const stopSelecting =() => {
    clearInterval(selecting)
  }
  
  const selecting = setInterval(callback, 50)
}

const whosTheWinner = (npc , p) => {
  console.log(npc, p)
  if (npc === p) setWinner('Draw')
  else if (npc === 1) {
      if (p === 4 || p === 3) {
        const score = npcScore + 1
        setNPCscore(score)
        setWinner('NPC Won!')}
      else {
        const score = playerScore + 1
        setPlayerScore(score)
        setWinner('YOU Won!')
      }
    }
    else if (npc === 2) {
      if (p === 1 || p === 5) {
        const score = npcScore + 1
        setNPCscore(score)
        setWinner('NPC Won!')}
      else {
        const score = playerScore + 1
        setPlayerScore(score)
        setWinner('YOU Won!')
      }
    }
    else if (npc === 3) {
      if (p === 2 || p === 4) {
        const score = npcScore + 1
        setNPCscore(score)
        setWinner('NPC Won!')}
      else {
        const score = playerScore + 1
        setPlayerScore(score)
        setWinner('YOU Won!')
      }
    }
    else if (npc === 4) {
      if (p === 2 || p === 5) {
        const score = npcScore + 1
        setNPCscore(score)
        setWinner('NPC Won!')}
      else {
        const score = playerScore + 1
        setPlayerScore(score)
        setWinner('YOU Won!')
      }
    }
    else if (npc === 5) {
      if (p === 1 || p === 3) {
        const score = npcScore + 1
        setNPCscore(score)
        setWinner('NPC Won!')}
      else {
        const score = playerScore + 1
        setPlayerScore(score)
        setWinner('YOU Won!')
      }
    }

}


  return (
    <div className="rps_app">

      <span className='navvigateHome'><Link to='/'>Home</Link></span>

      <div className='gameBoard'>

        <div className='gameBoard__npc'>
        <div className='gameBoard__npc__item' style={{color: selectionNPC[0] ? 'white' : '#3b3b3b'}}>
            <FaRegHandRock/>
            <span>Rock</span>
          </div>

          <div className='gameBoard__npc__item' style={{color: selectionNPC[1] ? 'white' : '#3b3b3b'}}>
            <FaRegHandPaper/>
            <span>Paper</span>
          </div>

          <div className='gameBoard__npc__item' style={{color: selectionNPC[2] ? 'white' : '#3b3b3b'}}>
            <FaRegHandScissors/>
            <span>Scissors</span>
          </div>

          <div className='gameBoard__npc__item' style={{color: selectionNPC[3] ? 'white' : '#3b3b3b'}}>
            <FaRegHandLizard/>
            <span>Lizard</span>
          </div>

          <div className='gameBoard__npc__item' style={{color: selectionNPC[4] ? 'white' : '#3b3b3b'}}>
            <FaRegHandSpock/>
            <span>Spock</span>
          </div>
        </div>

        <div className='gameBoard__score'>

          <div className='gameBoard__score__player'>
            <span>{playerScore}</span>
            <p>You</p>
          </div>

          <div className='gameBorad__score__whoWins'>{winner ? winner : 'Choose'}</div>

          <div className='gameBoard__score__npc'>
            <span>{npcScore}</span>
            <p>NPC</p>
          </div>

        </div>

        <div className='gameBoard__player'>

          <div className='gameBoard__player__item'  style={{color: selectionPlayer[0] ? 'white' : '#3b3b3b'}}>
            <div id='1'>
            <FaRegHandRock id='1' onClick={playerSelected}/>
            </div>
            <span>Rock</span>
          </div>

          <div className='gameBoard__player__item'  style={{color: selectionPlayer[1] ? 'white' : '#3b3b3b'}}>
            <div id='2'>
              <FaRegHandPaper id='2' onClick={playerSelected}/>
            </div>
            <span>Paper</span>
          </div>

          <div className='gameBoard__player__item'  style={{color: selectionPlayer[2] ? 'white' : '#3b3b3b'}}>
            <div id='3'>
            <FaRegHandScissors id='3' onClick={playerSelected}/>
            </div>
            <span>Scissors</span>
          </div>

          <div className='gameBoard__player__item' style={{color: selectionPlayer[3] ? 'white' : '#3b3b3b'}}>
            <div id='4'>
            <FaRegHandLizard id='4' onClick={playerSelected}/>
            </div>
            <span>Lizard</span>
          </div>

          <div className='gameBoard__player__item' style={{color: selectionPlayer[4] ? 'white' : '#3b3b3b'}}>
            <div id='5'>
            <FaRegHandSpock id='5' onClick={playerSelected}/>
            </div>
            <span>Spock</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RPS_App
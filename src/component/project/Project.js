import React, { Component } from 'react'
import hangman from '../../assets/images/technics-q-c-640-480-1.jpg'
import rpg from '../../assets/images/technics-q-c-640-480-2.jpg'
import trivia from '../../assets/images/technics-q-c-640-480-5.jpg'
import rps from '../../assets/images/technics-q-c-640-480-9.jpg'
import rutgers from '../../assets/images/technics-q-c-640-480-7.jpg'

class Project extends Component {
  render() {
    return (
        <div className=" col-md-12 col-lg-8">
        <article>
          <h2>Projects</h2>
          
          <div className="card-group">
            <a href="#" target="_blank" className="card">
              <img src={hangman} alt="hangman"/>
              <p className="m-0">Hangman Game</p>
            </a>
            <a href="#" target="_blank" className="card">
              <img src={rpg} alt="RPG Game"/>
              <p className="m-0">RPG Game</p>
            </a>
            <a href="#" target="_blank" className="card">
              <img src={trivia} alt="Trivia Game"/>
              <p className="m-0">Trivia Game</p>
            </a>
            <a href="#" target="_blank" className="card">
              <img src={rps} alt="Rock Paper Scissors"/>
              <p className="m-0">Rock Paper Scissors</p>
            </a>
            <a href="#" target="_blank" className="card">
              <img src={rutgers} alt="Rutgers Info Widget"/>
              <p className="m-0">Rutgers Info Widget</p>
            </a>
          </div>
        </article>
      </div>
    )
  }
}

export default Project
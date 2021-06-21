import React from 'react'

import './About.css'

export default function About() {

  return (
    <div className="about ">
      <div style={{ textAlign: 'center' }}>
        <h1 className="about__title">Sobre</h1>
        <article className="about__content">
          <p>Projeto desenvolvido como solução de um <a href="https://github.com/Apiki/front-end-challenge">desafio</a> front end.  </p>
          <ul>
            <li><a href="https://github.com/emersonhenriquedev">Github</a></li>
            <li><a href="www.linkedin.com/in/emerson-henrique-macedo-dos-santos-9397a2186/">Linkedin</a></li>
          </ul>
        </article>
      </div>
    </div>
  )
}

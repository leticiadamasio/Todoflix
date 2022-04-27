import React, { Component } from "react"
import { createGlobalStyle } from 'styled-components'
import Heart from '../img/Heart.png'
import styled from 'styled-components'
import Lupa from '../img/Icon.png'
import State from '../Movies.json'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style:none;
  text-decoration:none;
  color: white;
}
`
const LargeContainer = styled.section`
   background-color: #000000;
   min-height:100vh;
   height: auto;
`
const Container = styled.div`
   min-height:100vh;
   height: auto;
   width: 85%;
   display:flex;
   flex-wrap:wrap;
   margin-left: 7vw;
   justify-content: space-evenly;
`
const Busca = styled.input`
   background-color: #2C2C2C;
   border: none;
   height: 5vh;
   width: 25vw;
   position: absolute;
   bottom: 92.45vh;
   margin-left: 66.75vw;
   padding-left: 2.2vw;
   border-radius: 2px;
   background-image: url(${Lupa});
   background-repeat:no-repeat;
   background-position-y: center;
   background-position-x: 8px;
`
const Subtitle = styled.h2`
   font-family: Arial, Helvetica, sans-serif;
   font-size: 4vh;
   padding-top: 4vh;
   margin-left:23.2vh;
   height: auto;
   width: 12vw;

`
const Info = styled.section`
   background-color: #000000;
   width: 24vw;
   height: auto;
   margin-top: 2vh;
   margin-bottom: 5vh;
 
   p{
    font-family: 'Lato', sans-serif;
    font-size: 2.5vh;
    margin-top: 0.5vh;
    margin-bottom: 1vh;  
   }
`
const Image = styled.img`
   width: 100%; 
   height: 35vh;
`
const Icon = styled.img`
   cursor: pointer;
   width: 1.5vw;
   position: absolute;
   margin-left: -2vw;
   margin-top: 1vh;
   margin-bottom: 1vh; 
`
const Title = styled.h3`
   font-family: 'Lato', sans-serif;
   font-size: 2.8vh;
   width:85%;
`
const Text = styled.p`
   font-family: 'Lato', sans-serif;
   font-size: 2.5vh;
   width: 23.5vw;
   height: 15vh;
   text-align: justify;
   overflow: auto;
   cursor: pointer;
   
   ::-webkit-scrollbar {
     width: 2vh;
   }
   
   ::-webkit-scrollbar-track {
     background: #370617;
   }
   
   ::-webkit-scrollbar-thumb {
     
     background-color:#000000;
     border: 3px solid #370617;
   }

`
const Inform = styled.div`
    display:flex;
    width: 100%;
    align-items: center;
    p{
      font-family: 'Lato', sans-serif;
      font-size: 2.5vh;
      margin-left: 10px;
      margin-right: 5px;
    }
`

export default class Todos extends Component {
  state = {
    movies: State,
    filterFilms: [],
  }
  render(){
    return(
    <LargeContainer>
      <GlobalStyle />
      <Busca type='text' placeholder='Pesquisar' onChange={this.filterFilms} />
      <Subtitle>Adicionados</Subtitle>
      </LargeContainer>
    )
  }
}
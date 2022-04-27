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
  handleClick = () => {
    this.setState({
      IsFavorito: !this.state.IsFavorito,
    })
  }
  async componentDidMount() {
    this.movies()
  }
  movies = async () => {
    const FilmsFilter = this.setState({
      filterFilms: this.state.movies
    })
  }
  filterFilms = (e) => {
    const { movies } = this.state

    if (e.target.value === "") {
      this.setState({
        filterFilms: movies
      })
      return
    }
    const FilmsConvert = movies.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true
      }
    })

    this.setState({
      filterFilms: FilmsConvert
    })
  }
    render() {
      return (
        <LargeContainer>
          <GlobalStyle />
          <Busca type='text' placeholder='Pesquisar' onChange={this.filterFilms} />
          <Subtitle>Todos</Subtitle>
          <Container>
            {this.state.filterFilms.map((item) => (
              <Info>
                <Image
                  src={item.poster} alt={`Poster do filme ${item.title}`} />
                <Icon onClick={this.handleClick} style={this.state.IsFavorito === false ?
                  { filter: 'brightness(0.5)' } : { filter: '-shadowdrop(1px 1px 10px rgba(255,255,255,0.5))' }} src={Heart} alt='heart Icon' />
                <p>{item.IsVisto === false ? '' : 'Visto Recentemente'}</p>
                <Inform>
                  <Title>{item.title}</Title>
                 <p>{item.vote_average}/5</p>
                  <svg id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                    <rect id="Box" width="17" height="17" fill="none"/>
                    <path id="Path_1994" data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" fill="white" style={item.vote_average >= 5 ? {fill:'#0B3B0B'} : item.vote_average === 4 ? {fill:'#64FE2E'} : item.vote_average === 3 ? {fill:'yellow'} : {fill:'red'}} />
                  </svg>
                </Inform>
                <Text>{item.overview}</Text>
              </Info>
            ))}
          </Container>
        </LargeContainer>
      )
    }
  }
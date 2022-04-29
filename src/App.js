import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import styled from 'styled-components'
import Todos from './pages/Todos'
import Favoritos from './pages/Favoritos'
import Vistos from './pages/Vistos'
import Login from './img/Login.png'
import Lupa from './img/Icon.png'
import Home from './pages/Home'
import Modal from './pages/Modal'

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

const Container = styled.section`
  background-color: #000000; 
  display:flex;
  height: 100% 
`
const Menu = styled.ul`
  display:flex;
  width: 30vw;
  height: 10vh;
  padding-left: 2vh;
  justify-content: space-evenly;
  align-items: center;
`
const Title = styled.li`
   color: #E71B27;
   font-family: 'Bebas Neue', cursive;
   font-size: 5.2vh;
`
const Subtitle = styled.li`
   color: #FFFFFF;
   font-family: 'Lato', sans-serif;
   font-size: 2.2vh;
`
const Details = styled.details`
   width: 15vw;
`
const Summary = styled.summary`
   display:flex;
   font-family: 'Lato', sans-serif;
   font-size: 2.2vh;
    &:hover{
      font-weight: bolder;
      cursor: pointer;
    }
     p {
      padding-left: 0.5vw;
     }
`
const Contlist = styled.ul`
  background-color: #000000;
  display: flex; 
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  width: 10vw;
  height: 22vh;
   li {
    font-family: 'Lato', sans-serif;
    font-size: 2.5vh;
       &:hover{
        cursor: pointer;
        text-decoration: underline;
       }
   }
`
const Navegation = styled.nav`
   display:flex;
   width: 50vw;
   height: 10vh;
   margin-left: 25vw;
   justify-content: space-evenly;
   align-items: center;

`
const Add = styled.button`
   background-color: #E71B27;
   border: none;
   height: 5vh;
   width: 8vw;
   font-family: 'Lato', sans-serif;
   font-size: 2.2vh;
   border-radius: 2px;
   cursor: pointer;
`
const Busca = styled.input`
   background-color: #2C2C2C;
   border: none;
   height: 5vh;
   width: 25vw;
   padding-left: 2.2vw;
   border-radius: 2px;
   background-image: url(${Lupa});
   background-repeat:no-repeat;
   background-position-y: center;
   background-position-x: 8px;
`
const Box = styled.div`
   display:flex;
   width: 3.5vw;
   align-items: center;
   justify-content:center;
`
const Image = styled.img`
   margin-right: 0.5vw;
`

export default class Header extends Component {
  state = {
    statemodal: false,
    butonmodal: false
  }    
  openmodal = () => {
    this.setState({ statemodal: !this.state.statemodal })
  }
  render() {
    return (
      <Router>
        <Container>
        <GlobalStyle/>
          <nav>
            <Menu>
              <Title>Todoflix</Title>
              <Link to='/'><Subtitle>Início </Subtitle></Link>
              <Details>
                <Summary>Categorias <p>&#9662;</p></Summary>
                <Contlist>
                  <li>
                    <Link to='/todos'>Todos</Link>
                  </li>
                  <li>
                    <Link to='/favoritos'>Favoritos</Link>
                  </li>
                  <li>
                    <Link to='/vistos'>Já vistos</Link>
                  </li>
                </Contlist>
              </Details>
            </Menu>
          </nav>
          <Navegation>
            <Add onClick={this.openmodal}>Adicionar Filme</Add> {this.state.statemodal && <Modal />} 
            <Busca type='text' placeholder='Pesquisar'/>
            <Box>
              <Image src={Login} />
              <p>&#9662;</p>
            </Box>
          </Navegation>
        </Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/vistos' element={<Vistos />} />
        </Routes>
      </Router>
    )
  }
}

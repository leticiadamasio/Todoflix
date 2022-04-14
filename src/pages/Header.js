import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Todos from './Todos'
import Favoritos from './Favoritos'
import Vistos from './Vistos'
import Login from '../img/Login.png'
import Lupa from '../img/Icon.png'

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
   display: flex; 
   flex-direction: column;
`
const Summary = styled.summary`
   color: #FFFFFF;
   font-family: 'Lato', sans-serif;
   font-size: 2.2vh;
   font-weight: bolder;
`
const Contlist = styled.ul`
  background-color: #000000;
  margin-top: 20vh;
  height: 15vh;
  width: 8vw;
  display: flex; 
  flex-direction: column;
  justify-content: space-evenly;
   li {
       &hover: 
       cursor: point;
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
`
const Busca = styled.input`
   background-color: #2C2C2C;
   border: none;
   height: 5vh;
   width: 25vw;
   border-radius: 2px;
   background-image: url(${Lupa});
   background-repeat:no-repeat;
   background-position-y: center;
   background-position-x: 8px;
`
export default class Header extends Component {
    render() {
        return (
            <Router>
                <GlobalStyle />
                <Container>
                    <nav>
                        <Menu>
                            <Title>Todoflix</Title>
                            <Subtitle>Início</Subtitle>
                            <Details>
                                <Summary>Categorias</Summary>
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
                        <Add>Adicionar Filme</Add>
                        <Busca type='text' placeholder='         Pesquisar'/>
                        <img src={Login} />
                    </Navegation>
                </Container>
                <Routes>
                    <Route path='/todos' element={<Todos />} />
                    <Route path='/favoritos' element={<Favoritos />} />
                    <Route path='/vistos' element={<Vistos />} />
                </Routes>
            </Router>

        )
    }
}
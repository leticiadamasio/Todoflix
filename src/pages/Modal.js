import React from 'react'
import styled from 'styled-components'
import Image from '../img/Image.png'
import ReactStars from 'react-rating-stars-component'
import '../App.css'

const info = {
    color: '#2C2C2C',
    value: 0,
    size: 35,
    activeColor: '#FFFFFF',
    isHalf: true,
    a11y: true,
    count: 5,
    a11y: true
}
const Container = styled.section`
    width:45vw;
    height:80vh;
    background-color: #000000;
    border: 1px solid #808080;
    box-shadow:(1px 1px 10px rgba(255,255,255,0.5));
    position:absolute;
    top:10vh;
    left:26%;
    z-index: 5;
`
const Info = styled.section`
   display: flex;
`
const Select = styled.label`
   background-color: #FFFFFF;
   color: black;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 2.4vh;
   padding: 5px;
   position: relative;
   bottom: 4vh;
   margin-left: 26.7vw;
   border-radius: 2px;
   cursor: pointer;
`
const Radio = styled.div`
   width: 25vw;
   align-items:center;
   padding-top: 0.5vw;
   margin-left: 3vw;
   padding-bottom: 1.5vw;
`
const Name = styled.label`
   margin-right: 3vw;
   padding-left: 0.3vw;
   width: 15vw;
`
const Box = styled.div`
    display: flex;
    flex-direction:column;
    width: 55%;
    height: 35vh;
    padding-top: 1.5vh;
    padding-left: 3vw;
`
const Busca = styled.input`
   background-color: #2C2C2C;
   border: none;
   height: 5vh;
   width: 21.25vw;
   margin-top: 2vh;
   padding-left: 0.5vw;
   border-radius: 2px;
`
const Comment = styled.input`
   background-color: #2C2C2C;
   border: none;
   height: 13vh;
   width: 21.25vw;
   margin-top: 2vh;
   padding-left: 0.5vw;
   border-radius: 2px;
`
const Subtitle = styled.label`
   font-family: Arial, Helvetica, sans-serif;
   font-size: 2.8vh;
   padding-top: 2vh;
   height: auto;
   width: 12vw;
`
const Sub = styled.label`
   font-family: Arial, Helvetica, sans-serif;
   font-size: 2.8vh;
   margin-left: 3vw;
   display: flex;
   flex-direction: column;
`
const Sinal = styled.p`
    margin-left: 43vw;
    font-size: 3.5vh;
    cursor: pointer;
`
const Title = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3.8vh;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
    padding-left: 3vw;
`
const BoxImg = styled.div`
    width: 15.3vw;
    height: 25vh;
    margin-top: 3vh;
    margin-left: 2vw;
`
const Ponto = styled.svg`
    position: relative;
    top: 3vh;
    left: 7vw;
`
const Imagens = styled.div`
    border: solid 1px #585858;
    border-radius: 4px;
    margin-top: 1.5vh;
    width: 15.1vw;
    height: 22vh;
`
const Imagem = styled.img`
    position: relative;
    bottom: 2.25vh;
    width: 15vw;
`
const Note = styled.div`
    width: 12vw;
    margin-left: 2.5vw;

    label{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2.8vh;
        margin-left: 0.5vw;  
    }
`
const Buttons = styled.div`
   margin-left: 15vw;
   margin-top: 2vh;
`
const Cancel = styled.button`
   background-color:#000000;
   border: none;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 2.5vh;
   height: 5vh;
   width: 7vw;
   border-radius: 2px;
   cursor: pointer;

`
const Confirm = styled.button`
   background-color:#E71B27;
   border: none;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 2.5vh;
   height: 5vh;
   width: 7vw;
   border-radius: 2px;
   cursor: pointer;

`
export default class App extends React.Component {
    state = {
        statemodal: false,
    }    
    closemodal = () => {
        this.setState({statemodal: !this.state.statemodal })
    }
    render() {
        return (
            <Container>
                <form action="">
                    <div>
                        <Sinal onClick={this.closemodal}>x</Sinal>
                        <Title>Adicionar Filme</Title>
                    </div>
                    <Info>
                        <Box>
                            <Subtitle>Nome</Subtitle>
                            <Busca type="text" name="nome" id="nome" />
                            <Subtitle>Descrição</Subtitle>
                            <Comment name="descricao" id="comentarios" maxlength="200" data-ls-module="charCounter" />
                        </Box>
                        <BoxImg>
                            <Subtitle>Imagem de capa </Subtitle>
                            <Imagens>
                                <Ponto xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g id="Ellipse_13" data-name="Ellipse 13" fill="none" stroke="none" stroke-width="1">
                                        <circle cx="12" cy="12" r="12" stroke="none" />
                                        <circle cx="12" cy="12" r="11.5" fill="#2C2C2C" />
                                    </g>
                                </Ponto>
                                <Imagem src={Image} />
                            </Imagens>
                        </BoxImg>
                    </Info>
                    <Select for="file_upload">Selecionar Imagem</Select>
                    <input id="file_upload" name="name_upload" type="file" accept=".png, .jpg, .jpeg"/>
                    <Sub>Status</Sub>
                    <Radio>
                        <input id="assisti" type="radio" name="status" value="Assisti" />
                        <Name for="assisti">Já assisti</Name>
                        <input id="não assistido" type="radio" name="status" value="Não assisti" />
                        <Name for="não assistido" >Ainda não assisti</Name>
                    </Radio>
                    <Note>
                        <label>Nota</label>
                        <ReactStars {...info} />
                    </Note>
                    <Buttons>
                        <Cancel>Cancelar</Cancel>
                        <Confirm>Confirmar</Confirm>
                    </Buttons>
                </form>
            </Container>
        )
    }
}
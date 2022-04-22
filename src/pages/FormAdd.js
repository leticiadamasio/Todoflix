import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component"
import styled from 'styled-components'

const info = {
    isHalf: true,
    size: 40,
    count: 5,
    a11y: true
}

export default class Form extends Component {
    render() {
        return (
            <div>
                <button>x</button>
                <h1>Adicionar filme</h1>
                <form>
                    <label>Nome</label>
                    <input type='text' name='nome' id='name' />
                    <label>Descrição</label>
                    <textarea name='comentarios' id='comentarios'></textarea>
                    <label>Imagem de capa</label>
                    <input type='file' name='arquivo' id='arquivo' />
                    <label>Status</label>
                    <label>Já assisti</label>
                    <input type='radio' name='status' value='Já assisti' />
                    <label>Ainda não assisti</label>
                    <input type='radio' name='status' value='Ainda não assisti' />
                    <label>Nota</label>
                    <ReactStars {...info}/>
                    <button>Cancelar</button>
                    <button>Confirmar</button>
                </form>
            </div>
        )
    }
}
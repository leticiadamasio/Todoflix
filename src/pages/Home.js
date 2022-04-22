import React, {Component} from "react"
import { createGlobalStyle } from 'styled-components'
import Main from "./Main"

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
export default class Home extends Component {
  render(){
    return(
      <div>
       <GlobalStyle/>
       <Main/>
      </div>
    )
  }
}
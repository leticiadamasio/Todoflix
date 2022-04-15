import React, {Component} from "react"
import { createGlobalStyle } from 'styled-components'
import Header from "./pages/Header"
import Main from "./pages/Main"

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
export default class App extends Component {
  render(){
    return(
      <div>
       <GlobalStyle/>
       <Header/>
       <Main/>
      </div>
    )
  }
}

import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }

  .secondCardTypography {
    margin-left: 900px;
  }

  img {
    margin-left: 10px; 
    width: 30px;
  }

  footer {
    background-color: rgba(0, 0, 0, .5);
    min-height: 40px;
    text-align: center;
    margin-top: 40px;
    line-height: 40px;
  }

  footer h3, footer p {
    color: #FFF;
    font-family: Elvetica;
    text-transform: uppercase;
    font-weight: 500;
  }

`

export default globalStyle

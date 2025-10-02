import React from "react"
import ReactDom from "react-dom/client"
import app from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const reactElement = {
//     type : 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     Children:'click me to visit google'
// }
const anotherElement = (
  <a href="https://google.com" target="_blank">VISIT google</a>
)

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com' , target: '_blank'},
  'click me to visit google1'
)
ReactDom.createRoot(document.getElementById('root')).
render(

    reactElement
)

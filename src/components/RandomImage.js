import memesData from './memesData.js'
import React from "react"

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }
  return <div className="LastButton">
    <button onClick={getMemeImage} className="generate">Create a new meme image 🖼</button>
    <img className="RandomImage" src={memeImage} alt="Meme" />
  </div>
}
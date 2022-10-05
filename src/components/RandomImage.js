import memesData from './memesData.js'
import React from "react"

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }
  return <div className="LastButton">
    <button onClick={getMemeImage} className="generate">Create a new meme image 🖼</button>
    <img className="RandomImage" src={meme.randomImage} alt="Meme" />
  </div>
}
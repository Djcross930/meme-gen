import React from "react"

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState("")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState("")
  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data))
  })

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return <div>
    <div className="buttons">
      <form>
        <input placeholder="Top text" className="buttonOne" type="text" name="topText" value={meme.topText} onChange={handleChange} />
        <input placeholder="Bottom Text" className="buttonTwo" type="text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
      </form>
    </div>
    <div className="lastThing">
      <button onClick={getMemeImage} className="generate">Create a new meme image 🖼</button>
    </div>
    <div className="meme">
      <img className="RandomImage" src={meme.randomImage} alt="Meme" />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
  </div>
}
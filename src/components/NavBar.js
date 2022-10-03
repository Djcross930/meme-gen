import TrollFace from './TrollFace.png'



export default function MyNav() {
  return <nav className="NavBar">
    <img className="TrollFace" src={TrollFace} alt="Troll" />
    <h2 className="title">Meme Generator</h2>
    <h4 className="project">React Course-Project 3</h4>
  </nav>
}
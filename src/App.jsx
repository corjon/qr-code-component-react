import './App.css'
import image from './assets/image-qr-code.png'

function App() {
  return (
    <main className="App">
      <img src={image} alt="QR code to Frontend Mentor" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </main>
  )
}

export default App
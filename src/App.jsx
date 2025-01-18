
import { useState } from 'react'
import lampada from './assets/Lâmpada.png'
import genio from './assets/Gênio.png'
import './style.components.scss'



export default function App(){

    const [aladin,setAladin] = useState(lampada)

    const genioDaLampada = () => {
        setAladin(genio)
    }
    return(
    <main>
    <h1>Liberte a magia da programação com a lâmpada de Aladim.</h1>
    <img src={aladin} alt="Imagem de uma Lâmpada Mágica" />
    <button onClick={genioDaLampada}>Clique Aqui</button>
    </main>
   )
}
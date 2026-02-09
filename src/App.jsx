
import { useState } from 'react';
import './App.scss'
import Anneau from './components/Anneau'

function App() {


const dateAdjBrut = new Date();
const dateAdj = dateAdjBrut.getDate() + "/" + (dateAdjBrut.getMonth()+1) + "/"+ dateAdjBrut.getFullYear()

const [texte, setTexte] = useState('Hello +')



  return (
  <>
  <section className='zonePrincipal'>
    <h1 className='titrePrincipal'>Le retour de l'anneau</h1>
  </section>
  <Anneau texte={texte}></Anneau>
  <footer className='basPage'>
    <p className='basPage__partie--debut'>
      <label htmlFor="texteAffiche" className='texteLabel' >Modifer le Texte :</label>
      <input type="text" className='texteAffiche' name='texteAffiche' id='texteAffiche' value={texte} onChange={e => setTexte(e.target.value)} />
    </p>
    <p className='basPage__partie'></p>
    <p className='basPage__partie'></p>
    <p className='basPage__partie'></p>
    <p className='basPage__partie'></p>
    <p className='basPage__partie--fin'>Reproduction de l'anneau Canal + (1984 - 1995) - on est le   {dateAdj}</p>
  </footer>
  </> )
}

export default App

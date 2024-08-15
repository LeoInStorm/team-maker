import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  document.title = 'TeamMaker'

  const times = [
    {
      nome: 'Goleiro',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
      imagemDeFundo:''
    },
    {
      nome: 'Laterais',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
      imagemDeFundo:'',
    },
    {
      nome: 'Zagueiros',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
      imagemDeFundo:'',
    },
    {
      nome: 'Meio-campistas',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
      imagemDeFundo:''
    },
    {
      nome: 'Atacantes',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
      imagemDeFundo:''
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>   
    </>
    
  );
}

export default App;

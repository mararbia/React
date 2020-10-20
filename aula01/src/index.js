import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button'; //Fazendo o import do component Button, como foi criado no arquivo de nome index, 
//não precisa colocar o nome na frente do Button no caminho especificado, mas caso o nome seja outro, daí precisa.

class App extends React.Component {
  render() {
    return (
      <h1>
        Hello React!! 
        
        <Button />

      </h1>
    );
  }
}

render(<App />, document.getElementById('app'));
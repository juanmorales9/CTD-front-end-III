import { Component } from 'react';

export default class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      mostrarNome: false,
    };
  }

  mostraNomeToggle = () => {
    this.setState({
      mostrarNome: !this.state.mostrarNome,
    });
  };

  render() {
    return (
      <>
        {/* Incremental */}
        <div className='d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4'>
          {/* é o mesmo que {this.state.mostrarNome ? <h2></h2> ? ''} */}
          {this.state.mostrarNome && <h2>Nome do Aluno</h2>}
          <button className='btn btn-primary' onClick={this.mostraNomeToggle}>
            {this.state.mostrarNome ? 'Esconde' : 'Mostra'} Nome
          </button>
        </div>
      </>
    );
  }
}

import { Component } from 'react';

export default class RemoveItemFromList extends Component {
  constructor() {
    super();
    this.state = {
      listagemDeAlunos: [
        {
          id: 0,
          firstName: 'João',
        },
        {
          id: 756,
          firstName: 'Sophia',
        },
      ],
    };
  }

  removeAluno = (idAluno) => {
    const listaNova = this.state.listagemDeAlunos.filter(({ id }) => {
      return id !== idAluno;
    });

    this.setState({
      listagemDeAlunos: listaNova,
    });
  };

  render() {
    return (
      <>
        {/* Incremental */}
        <div className='d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4'>
          {this.state.listagemDeAlunos.map(({ id, firstName }) => {
            return (
              <div key={id} onClick={() => this.removeAluno(id)}>
                <h2>{firstName}</h2>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

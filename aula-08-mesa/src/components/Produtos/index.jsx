import { Component } from 'react';
import { produtos } from '../../API';

export default class Produtos extends Component {
  constructor() {
    super();
    this.state = {
      listaProdutos: produtos,
    };
  }
  resetarLista = () => {
    this.setState({
      listaProdutos: produtos,
    });
  };

  removeProduto = (idProduto) => {
    const listaNova = this.state.listaProdutos.filter(({ id }) => {
      return id !== idProduto;
    });

    this.setState({
      listaProdutos: listaNova,
    });
  };

  render() {
    return (
      <>
        {/* Incremental */}
        <button className='btn btn-primary mt-3' onClick={this.resetarLista}>
          Resetar lista
        </button>
        <div className='container mb-5 mt-5'>
          <div className='row'>
            {this.state.listaProdutos.map(({ id, image, nomeProduto }) => {
              return (
                <div
                  className='col-md-4 mb-5'
                  key={id}
                  onClick={() => this.removeProduto(id)}
                >
                  <div className='card'>
                    <div className='product-1 align-items-center p-2 text-center'>
                      <img
                        src={image}
                        className='card-img-top'
                        alt={nomeProduto}
                        style={{
                          width: '200px',
                          height: '200px',
                          objectFit: 'cover',
                        }}
                      />
                      <h5>{nomeProduto}</h5>
                      <div className='card-title'>
                        <span className='text1 d-block'>{nomeProduto}</span>
                        <span className='text1'>Descrição: {nomeProduto}</span>
                      </div>
                    </div>
                    <div className='p-3 bg-danger text-center text-white mt-3 cursor'>
                      <span className='text-uppercase'>
                        Adicionar ao carrinho
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  /*       {this.state.listaProdutos.map(({ id, image, nomeProduto }) => {
            return (
              <ul
                className='list-group'
                key={id}
                onClick={() => this.removeProduto(id)}
              >
                <li className='list-group-item list-group-item-primary'>
                  <img
                    className='rounded mx-auto d-block'
                    src={image}
                    alt={nomeProduto}
                  />
                </li>
                <li className='list-group-item list-group-item-secondary'>
                  {nomeProduto}
                </li>
              </ul>
            );
          })}
        </div>
      </> */
}

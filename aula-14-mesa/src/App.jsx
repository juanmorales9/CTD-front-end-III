import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import api from './services/api';
import Swal from 'sweetalert2';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleSubmit = async ({ cep }) => {
    try {
      const response = await api.get(`${cep}`);
      console.log(response.data);
      this.setState(response.data);
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message,
      });
    }
  };

  render() {
    return (
      <>
        <div className='col-md-4 col-sm-6 my-3 container text-center'>
          <h2>Procure um CEP</h2>
          <Formik initialValues={{ cep: '' }} onSubmit={this.handleSubmit}>
            <Form>
              <Field
                placeholder='Insira o CEP'
                required
                type='text'
                name='cep'
                id='cep'
                className='form-control my-3'
              />
              <button className='btn btn-primary' type='submit'>
                Pesquisar
              </button>
            </Form>
          </Formik>
          {this.state.cep && (
            <ul className='list-group my-3' style={{ listStyle: 'none' }}>
              <h4>Cidade</h4>
              <li>{this.state.city}</li>
              <h4>Estado</h4>
              <li>{this.state.state}</li>
              <h4>CEP</h4>
              <li>{this.state.cep}</li>
            </ul>
          )}
        </div>
      </>
    );
  }
}

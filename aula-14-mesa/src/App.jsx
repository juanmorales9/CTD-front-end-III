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
                type='number'
                name='cep'
                id='cep'
                className='form-control my-3'
              />
              <button className='btn btn-primary' type='submit'>
                Pesquisar
              </button>
            </Form>
          </Formik>
          {this.state && (
            <>
              <h1>Cidade</h1>
              <h2 className='my-3' style={{ color: 'blue' }}>
                {this.state.city}
              </h2>
              <h2>Estado</h2>
              <h3 className='my-3' style={{ color: 'blue' }}>
                {this.state.state}
              </h3>
              <h2>CEP</h2>
              <h3 className='my-3' style={{ color: 'blue' }}>
                {this.state.cep}
              </h3>
            </>
          )}
        </div>
      </>
    );
  }
}

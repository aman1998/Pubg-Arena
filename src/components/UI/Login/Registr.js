import React from 'react';
import BackDrop from "../BackDrop";
import Template from './Template'

const Register = (props) => (
  <>
    <BackDrop show={props.showRegister} clicked={props.backdropClicked} />
    <Template
      title='Регистрация'
      close={props.showRegister}
      bg='#26835f'>
    </Template>
  </>
);

export default Register;
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BackDrop from "../BackDrop";
import Template from './Template'

const Registr = (props) => (
  <>
    <BackDrop show={props.showRegistr} clicked={props.backdropClicked} />
    <Template
      title='Регистрация'
      close={props.showRegistr}
      bg='#26835f'>
    </Template>
  </>
);

export default Registr;
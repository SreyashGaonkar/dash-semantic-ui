import React from 'react';
import './home.css'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import FormComponent from '../../components/form/FormComponent'
import GridLayout from '../../components/gridLayout/gridLayout'
const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const Home = ()=> {
  return (
   <div className='container'>
     <FormComponent/>
     <GridLayout/>
   </div>

  );

}

export default Home;

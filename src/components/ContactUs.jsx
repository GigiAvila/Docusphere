import React from 'react';

import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Header from './Header';
import Footer from './Footer';


const ContactUsSection = styled.section`
width: 100%;
height: 100%;
padding-top: 10vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:rgb(194, 168, 230, 0.2);

@media (max-width: 768px) {
  padding-top: 0vw;
}
`

const FormTitle = styled.h3`
font-size: 3vw;
background: linear-gradient(to right, #c2a8e6, #0000ff);
    -webkit-background-clip: text;
    color: transparent;
}`

const FormContainer = styled.form`
  width: 50%;
  padding: 1.5vw;
  margin: 1.5vw;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

`;

const FormField = styled.div`
  margin-bottom: 1vw;

  label {
    display: block;
    margin-bottom: 0.2vw;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.8vw;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  input,
  select{
    height: 2.5vw;
  }

  textarea {
    height: 5vw;
  }


  p {
    color: red;
  }
`;

const FormFieldConditions = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5vw;
`

const SubmitButton = styled.button`
  background-color: #008080;
  opacity: 0.7;
  color: #fff;
  border: none;
  padding: 0.5vw 1.5vw;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #008080;
    opacity:1;
  }

  &:disabled {
    background-color: #008080;
    opacity:0.3;
    cursor: not-allowed;
  }
`;

const ContactUs = () => {
  const { handleSubmit, register, formState, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      languaje: '',
      motive: '',
      subject: '',
      description: '',
      attachments: '',
      terms: '',
    },
  });

  console.log(formState.errors);

  const onSubmit = (values) => {
    console.log('Submit de react-hook-form:', values); // aca se veran los valores que tenga el formulario
  };


  return (
    <>
      <Header />
      <ContactUsSection>
        <FormTitle>Submit a request</FormTitle>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <FormField>
            <label htmlFor="name">Name</label>
            <input
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name',
                },
                minLength: {
                  value: 3,
                  message: 'Your name should be greater or equal than 3 characters',
                },
              })}
              type="text"
              id="name"
            />
            {formState.errors.name ? (
              <p style={{ color: 'red' }}>{formState.errors.name.message}</p>
            ) : null}
          </FormField>
          <FormField>
            <label htmlFor="email">Your email address</label>
            <input {...register('email')} type="email" id="email" />
          </FormField>
          <FormField>
            <label htmlFor="languaje">What is your preferred language of communication?</label>
            <select {...register('languaje')} id="languaje">
              <option value="">-</option>
              <option value="spanish">Spanish</option>
              <option value="english">English</option>
            </select>
          </FormField>
          <FormField>
            <label htmlFor="motive">What can we help you with?</label>
            <select {...register('motive', { required: true })} id="motive">
              <option value="">-</option>
              <option value="moreInfo">I have a question or concern about a product</option>
              <option value="account">I want to manage my account</option>
              <option value="cancel">I want an upgrade of my plan</option>
              <option value="cancel">I want to cancel my plan</option>
              <option value="technicalIssues">I'm having technical issues</option>
              <option value="partner">I want to partner or collaborate with DOCUSPHERE</option>
              <option value="feedback">I want to give feedback to DOCUSPHERE</option>
              <option value="other">Other motive</option>
            </select>
          </FormField>
          <FormField>
            <label htmlFor="subject">Subject</label>
            <input {...register('subject', { required: true })} type="text" id="subject" />
          </FormField>
          <FormField>
            <label htmlFor="description">Description</label>
            <textarea {...register('description')} id="description" rows="4"></textarea>
          </FormField>
          <FormField>
            <label htmlFor="attachments">Attachments (optional)</label>
            <input {...register('attachments')} type="file" id="attachments" />
          </FormField>
          <FormFieldConditions>
            <label htmlFor="terms">I accept the terms and conditions</label>
            <input type="checkbox" id="terms" {...register('terms', { required: true })} />

          </FormFieldConditions>
          <SubmitButton type="submit" disabled={!formState.isDirty}>
            Submit
          </SubmitButton>
        </FormContainer>
      </ContactUsSection>
      <Footer />
    </>

  );
};

export default ContactUs;

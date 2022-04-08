import { Component } from 'react';
import { Formik } from 'formik';

import {
  FormTitle,
  FormThumb,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // не заходит в state
    this.setState({ values });
    resetForm();
  };

  render() {
    const initialValues = {
      name: '',
      number: '',
    };

    return (
      <>
        <FormTitle>Phonebook</FormTitle>
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
          <FormThumb>
            <FormLabel>
              Name
              <FormInput name="name" type="text" />
            </FormLabel>
            <FormLabel>
              Number
              <FormInput name="number" type="tel" />
            </FormLabel>
            <FormButton type="submit">Add contact</FormButton>
          </FormThumb>
        </Formik>
      </>
    );
  }
}

// export class ContactForm extends Component {
//   state = {
//     name: '',
//   };

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.setState({ name: '' });
//   };

//   render() {
//     return (
//       <>
//         <FormTitle>Phonebook</FormTitle>
//         <Form onSubmit={this.handleSubmit}>
//           <FormNameLabel>
//             Name
//             <FormNameInput
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleInputChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </FormNameLabel>
//           <FormNameButton type="submit">Add contact</FormNameButton>
//         </Form>
//       </>
//     );
//   }
// }

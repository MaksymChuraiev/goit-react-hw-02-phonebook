import { Component } from 'react';
import {
  FormTitle,
  Form,
  FormNameLabel,
  FormNameInput,
  FormNameButton,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <FormTitle>Phonebook</FormTitle>
        <Form onSubmit={this.handleSubmit}>
          <FormNameLabel>
            Name
            <FormNameInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormNameLabel>
          <FormNameButton type="submit">Add contact</FormNameButton>
        </Form>
      </>
    );
  }
}

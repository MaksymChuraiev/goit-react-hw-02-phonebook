import React, { Component } from 'react';
import { ContactSection } from './ContactSection/ContactSection.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactTitle } from './ContactList/ContactList.styled';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-4', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const contacts = this.state.contacts;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    //   this.setState(({ contacts }) => {
    //     if (
    //       contacts.some(
    //         contact => contact.name.toLowerCase() === name.toLowerCase()
    //       )
    //     ) {
    //       return alert(`${name} is already in contacts.`);
    //     }
    //     return {
    //       contacts: [contact, ...contacts],
    //     };
    //   });
  };

  getContactsList = () => {
    const filterValue = this.state.filter.toLowerCase().trim();
    const filterContacts = this.state.contacts;

    return filterContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <ContactSection>
        <ContactForm onSubmit={this.addContact} />
        <ContactTitle>Contacts</ContactTitle>
        <ContactFilter value={filter} onChange={this.filterContact} />
        <ContactList
          contacts={this.getContactsList}
          onDeleteContact={this.deleteContact}
        ></ContactList>
      </ContactSection>
    );
  }
}

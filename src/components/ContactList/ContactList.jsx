import { Component } from 'react';
import {
  ContactTitle,
  ContactNameList,
  // ContactNameItem,
  // ContactNameText,
} from './ContactList.styled';

export class ContactList extends Component {
  render() {
    return (
      <>
        <ContactTitle>Contacts</ContactTitle>
        <ContactNameList></ContactNameList>
      </>
    );
  }
}

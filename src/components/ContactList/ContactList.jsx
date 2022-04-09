import React from 'react';
import {
  ContactNameList,
  ContactNameItem,
  ContactNameText,
  ContactNumberText,
  ContactListButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ContactNameList>
        {contacts().map(({ name, number, id }) => (
          <ContactNameItem key={id}>
            <ContactNameText>{name}</ContactNameText>
            <ContactNumberText>{number}</ContactNumberText>
            <ContactListButton onClick={() => deleteContact(id)}>
              Delete
            </ContactListButton>
          </ContactNameItem>
        ))}
      </ContactNameList>
    </>
  );
};

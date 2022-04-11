import {
  ContactNameList,
  ContactNameItem,
  ContactNameText,
  ContactNumberText,
  ContactListButton,
} from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ContactNameList>
        {contacts().map(({ name, number, id }) => (
          <ContactNameItem key={id}>
            <ContactNameText>{name}</ContactNameText>
            <ContactNumberText>{number}</ContactNumberText>
            <ContactListButton onClick={() => onDeleteContact(id)}>
              Delete
            </ContactListButton>
          </ContactNameItem>
        ))}
      </ContactNameList>
    </>
  );
};

ContactList.propTypes = {
  getContactsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <ul className="list">
      <ContactItem visibleContacts={visibleContacts} onDelete={onDelete} />
    </ul>
  );
};

export default ContactList;

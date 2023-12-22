import './ContactList.css';

const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <ul className="list">
      {visibleContacts.map(({ id, name, number }) => (
        <li className="li" key={id}>
          {name}: {number}
          <button className="button" type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

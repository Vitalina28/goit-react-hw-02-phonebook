import css from './ContactItem.module.css';

const ContactItem = ({ visibleContacts, onDelete }) => {
  return visibleContacts.map(({ id, name, number }) => (
    <li className={css.li} key={id}>
      {name}: {number}
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  ));
};

export default ContactItem;

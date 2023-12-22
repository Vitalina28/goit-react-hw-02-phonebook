import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addUserName = ({ name, number }) => {
    const User = {
      id: nanoid(),
      name,
      number,
    };

    console.log(User);
    this.setState(prevState => ({
      contacts: [User, ...prevState.contacts],
    }));
  };

  createUser = data => {
    console.log(data);
    const newUser = {
      ...data,
      id: nanoid(),
    };

    console.log(newUser);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContact();

    return (
      <div
        style={{
          width: '600px',
          height: 'auto',
          border: '1px solid black',
          marginRight: 'auto',
          marginLeft: 'auto',
          padding: '20px',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          filter={filter}
          createUser={this.createUser}
          newUser={this.addUserName}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.changeFilter} />

        <ContactList
          visibleContacts={visibleContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

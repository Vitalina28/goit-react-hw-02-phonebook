import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    console.log(newUser);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    this.setState({ [target.number]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.createUser({
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();

    this.addUserName(this.state.name, this.state.number);
  };

  addUserName = (text, num) => {
    console.log(text, num);

    const User = {
      text,
      num,
    };
    console.log(User);
    this.setState(prevState => ({
      contacts: [User, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(e.currentTarget.value);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const visibleName = this.state.contacts.filter(name =>
      name.text.toLowerCase().includes(normalizeFilter)
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button type="submit">Add contact</button>
        <p>Contacts</p>

        <label>
          Find contacts by name
          <input
            type="text"
            value={this.state.filter}
            onChange={this.changeFilter}
          />
        </label>

        <ul>
          {this.state.contacts.length !== 0 &&
            visibleName.map(user => (
              <li key={user.text}>
                {user.text}: {user.num}
              </li>
            ))}
        </ul>
      </form>
    );
  }
}

export default App;

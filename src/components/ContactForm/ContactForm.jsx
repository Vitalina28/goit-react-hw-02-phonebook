import { Component } from 'react';
import '../ContactForm/ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    this.props.createUser({
      name,
      number,
    });
    this.reset();

    this.props.newUser(this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label className="Label">
          Name
          <input
            className="Input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className="Label">
          Number
          <input
            className="Input"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

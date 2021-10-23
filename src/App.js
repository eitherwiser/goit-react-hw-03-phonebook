import React from 'react';
import { v4 as uuid } from 'uuid';
import ContactForm from './components/Form/Form.jsx';
import Filter from './components/Filter/Filter.jsx';
import ContacstList from './components/ContactsList/ContacstList.jsx';
import './App.css';

export default class App extends React.Component {
  state = {
    filter: '',
    contacts: [],
  };

  //===filter===

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  //====Form===
  onFormSubmit = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(name + ' is already exist');
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: uuid(), name: name, number: number },
      ],
    }));
  };

  showForm = e => { };

  //===contactList===
  showContactsList = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  onDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };


  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    this.setState({ contacts: contacts ?? [] })
  }

  componentDidUpdate(props, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  //======
  render() {
    return (
      <>
        <h2>Phonebook</h2>

        <Filter
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />

        <ContactForm
          onFormSubmit={this.onFormSubmit}
          filterValue={this.state.filter}
        />

        <ContacstList
          contacts={this.showContactsList()}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}

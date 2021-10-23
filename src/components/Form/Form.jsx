import React from "react";
import s from "./Form.module.css";

export default class ContactForm extends React.Component {

  state = {
    name: "",
    number: "",
    showForm: false,
  };

  onChange = (e) => {
    const { name, value } = e.currentTarget; 
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };


  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit} className={s.form}>
          <label className={s.label}>
            Name &nbsp;&nbsp;&nbsp;
            <input
              className={s.input}
              type="text"
              onChange={this.onChange}
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
            </label>
    
          <label className={s.label}>
            Number &nbsp;
            <input
              className={s.input}
              type="tel"
              onChange={this.onChange}
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
            </label>

            <button className={s.btn} type="onSubmit">
              Add contact
            </button>
          </form>
      </div>
      
    );
  }
}
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../components/common/Input";
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      input_text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { input_text } = this.state;
    return (
      <form id="article-form">
        <Input
          text="Title"
          label="test_label"
          type="text"
          id="input_text"
          value={input_text}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

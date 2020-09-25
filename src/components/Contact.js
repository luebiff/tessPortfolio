import React, { Component } from 'react'
import '../scss/contact/contact.scss'
import emailjs from 'emailjs-com'

export class Contact extends Component {
    state = {
        name: "",
        txt: "",
        email: "email@example.com",
      };
      handleChanseName = (e) => {
        this.setState({
          name: e.target.value,
        });
      };
      handleChanseTxt = (e) => {
        this.setState({
          txt: e.target.value,
        });
      };
      handleSubmit = (e) => {
        console.log("submit");
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_tszj2os', e.target, 'user_8Kx0RsphQrT5xVlrpexCb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        e.target.reset()
      };
    render() {
        return (
            <div className="contactContainer">
                <div className="formContainer">
                <div className="formHeading">Skapa kontakt</div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input
                        placeholder="Namn"
                        className="inputName"
                        onChange={this.handleChanseName}
                        name="inputName"
                        type="text"
                        />
                        <input
                        placeholder="E-post"
                        className="inputEmail"
                        onChange={this.handleChanseName}
                        name="inputEmail"
                        type="email"
                        />
                        <textarea
                        placeholder="Meddelande"
                        className="Inputtxt"
                        onChange={this.handleChanseTxt}
                        name="inputtxt"
                        id=""
                        cols="30"
                        rows="10"
                        ></textarea>
                        <button className="submitBtn" >
                          Skicka
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact

import React, { Component } from 'react'
import '../scss/contact/contact.scss'

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
        
        
        e.target.reset()
      };
    render() {
        return (
            <div className="contactContainer">
                <div className="formContainer">
                <div className="formHeading">Skapa kontakt</div>
                    <form className="form" onSubmit={this.handleSubmit}>
                        {/* <label htmlFor="inputName"></label> */}
                        <input
                        placeholder="Namn"
                        className="inputName"
                        onChange={this.handleChanseName}
                        name="inputName"
                        type="text"
                        />
                        {/* <label htmlFor="inputEmail"></label> */}
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

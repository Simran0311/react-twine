import React from "react";
import axios from 'axios';
import { resetWarningCache } from "prop-types";

export default class Form extends React.Component {

  constructor(props)
  {
      super(props);
      this.state = {
          name:" ",
          email:" ",
          title: "",
          techStack: "",
          message: "",
          userNameError:null,
          emailError:null,
          final_name:"",
          final_email:"",
       }
     }
     validateName = event => {
      event.preventDefault();
      const userName= event.target.value;
      this.setState({
        userNameError:
        userName.length > 1 ? null : 'Name must be fill',
        final_name : userName
      });
    }
    
    validateEmail = event => {
      event.preventDefault();
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       const email = event.target.value;
      this.setState({
        emailError:
       re.test(String(email)) ? null : 'Email must be valid',
       final_email : email
      });
    }
 

    handleSubmit = event => {
       
      const user = {
            name: this.state.final_name,
            email: this.state.final_email,
            title: this.state.final_title,
            techStack: this.state.final_techStack,
            message: this.state.final_message,
         
          };
          console.log(user);
          if(this.state.final_name !== ""&& this.state.final_email !== "" && this.state.final_title !== "" && this.state.final_techStack !== "" && this.state.final_message !== ""){     
                console.log("submit");
           }
        else
        {
         if(this.state.final_name == ""){
          const userName= event.target.value;
         this.setState({   
         userNameError:
         userName.length > 1 ? null : 'Name must be fill',
        final_name : userName
       });
     }
  if(this.state.final_email == ""){
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const email = event.target.value;
     this.setState({
     emailError:
     re.test(String(email)) ? null : 'Email must be valid',
     final_email : email
    });
   }
        }
      }
    
  render() {
   
    return (
      <form id="myForm" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
            <label>Name</label>
            <input
            type="text"
            name="userName"
            onBlur={this. validateName}
            className={`form-control ${this.state. userNameError ? 'is-invalid':''}`}
            />
            <span>{this.state.userNameError}</span>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            onBlur={this.validateEmail}
            className={`form-control ${this.state. emailError ? 'is-invalid':''}`}
            />
            <span>{this.state.emailError}</span>
        </div>
        <div className="form-group">
            <label>Title</label>
            <input
             type="text"
            name="title"
            className="form-control"
            />
        </div>
        <div className="form-group">
            <label>HR Tech Stack</label>
            <input
             type="text"
            name="techStack"
            className="form-control"
            />
        </div>
        <div className="form-group">
            <label>Message</label>
            <textarea name="message"

            className="form-control"
            >
            </textarea>
        </div>
        <button className="btn theme-btn-blue theme-btn" type="submit" onClick={e => this.handleSubmit(e)}  >Submit</button>
      </form>
    );
  }
}

import React from "react";
import axios from 'axios';
import { resetWarningCache } from "prop-types";

export default class Form extends React.Component {

    
    
  constructor(props)
  {
      super(props);
      this.state = {
          userName:" ",
          email:" ",
          title: "",
          techStack: "",
          message: "",
          final_name:"",
          final_email:"",
          final_title:"",
         final_techStack:"",
         final_message:"",
         initialState:""
         
       }
     }

 
 
    handleSubmit = event => {
 
      const user = {
            userName: this.state.final_name,
            email: this.state.final_email,
            title: this.state.final_title,
            techStack: this.state.final_techStack,
            message: this.state.final_message,
         
          };
          console.log(user);

          if(this.state.final_name !== ""&& this.state.final_email !== "" && this.state.final_title !== "" && this.state.final_techStack !== "" && this.state.final_message !== ""){     
                console.log("submit");
 
  
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
            className="form-control"
            />
            <span>{this.state.userNameError}</span>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            className="form-control"
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
            <span>{this.state.titleError}</span>
        </div>
        <div className="form-group">
            <label>HR Tech Stack</label>
            <input
             type="text"
            name="techStack"
           className="form-control"
            />
            <span>{this.state.techStackError}</span>
        </div>
        <div className="form-group">
            <label>message</label>
            <textarea name="message"
           className="form-control"
            >
            </textarea>
            <span>{this.state. messageError}</span>
            
        </div>
        <button className="btn theme-btn-blue theme-btn" type="submit" onClick={e => this.handleSubmit(e)}  >Submit</button>
      </form>
    );
  }
}

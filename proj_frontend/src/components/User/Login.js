import React, { Component } from 'react'
import OtpInput from 'react-otp-input';
import Service from '../User/Service';
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import {useState} from "react"
import './Login_style.css'
 class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
           
            data_value:[],
            hidden:true,
           error:{},
           navigate:false
           
         }
       }
       toggleShow=()=>{
        this.setState({hidden:!this.state.hidden})
       }
       handleForm=(event)=>{
        
        this.setState({
            [event.target.name]:event.target.value
        })
        // let error=this.state.error
        if(event.target.name=='username')
        {
           
            if(event.target.value==" ")
            {
                console.log(event.target.value);
                this.state.error[event.target.name]="Username is empty";
                console.log(this.state.error);
            }else{
                this.state.error[event.target.name]="";
            }
          
            this.setState({
                error:this.state.error
            })
            
        }
        if(event.target.name=="password")
        {
            if(event.target.value==" ")
            {
                this.state.error[event.target.name]="password is empty";
            }else{
                this.state.error[event.target.name]="";
            }
            this.setState({
                error:this.state.error
            })
        }
        
      }
    

      validate=()=>{
        let isSubmit=true;
        console.log(this.state.username);
                if(this.state.username=="")
                {
                   this.state.error['username']="username is empty"
                   isSubmit=false;
                   this.setState({error:this.state.error})
                }
                if(this.state.password=="")
                {
                  this.state.error['password']="password is empty"
                  isSubmit=false;
                 this.setState({error:this.state.error})
                }
                return isSubmit;
            }
            handlesubmit=(e)=>{
                //   this.handleForm(e);
                console.log('gcgh');
                    e.preventDefault();
                   const isValid=this.validate();
                   console.log(isValid);
                   const user={
                    username:this.state.username,
                    password:this.state.password
                }
                Service.userexist(user).then (res=>{
                    
                  
                   if(res=="Login" && isValid==true){
                      
                      this.setState({navigate:true});
                      console.log(this.state.navigate);
                      window.sessionStorage.setItem("name", user.username);
                    }
                    else
                    {
                        this.state.error['username']="username doesnt exists"
                        this.state.error['password']="password doesnt exists"
                    
                       // alert("The username and password doesnt exists");
                        this.setState({navigate:false});  
                    }
                })
                    
      }
    
      render() {
        return (
           
          
      
            <div class="container">
                <div class="left">
                <div class="header">
                <h2 class="animation a1">Retail Management System Tool</h2>
                <h4 class="animation a2">Log in to your account using username and password</h4>
                </div>
                   
               
            <div className="form">
            <form onSubmit={this.handlesubmit}>
             
           
                
                <input type="text" class="form-field animation a3"name="username" placeholder="Username" onChange={this.handleForm}/> 
                
               <div style={{fontSize:14,color:'red'}}>{this.state.error['username']}</div>

                <input type={this.state.hidden?'password':'text'} class="form-field animation a3" id="pass"name="password" placeholder="Password"onChange={this.handleForm}/>
                <div style={{fontSize:14,color:'red'}}>{this.state.error['password']}</div>
                <br/>

              Show password <input type="checkbox"  onClick={this.toggleShow}></input>
            
               <div className='submitButton'>
                 <button class="animation a5" type="submit" > 
               SUBMIT
                </button> 
                {/* <OtpInput
            value={1234}
            //onChange={setOtp}
            numInputs={4}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
          /> */}
                <div>
                    <br/>
             <label>Create a New User</label>     

                <Link className='btn-Links' to='/newuser'>
                              Sign up
                      </Link>


                
                
                </div>
                
                </div>
                       
              
                 
               <div>{this.state.navigate==true?<Navigate to="/home" replace={true} />:""}</div>
       
              
              
            </form>
            </div>    

            </div>
          
            <div class="right"></div>
            </div>
        
        
      
        );
    
      }
    }
    
    export default Login
import React, { Component } from 'react'
import {userEnter} from "../Redux/Action/QuizAction"
import {RouteComponentProps, withRouter  } from "react-router-dom";
import {bindActionCreators, Dispatch} from "redux"
import {connect } from "react-redux"
import "../Style/MainPage.css"
// interface StateFromProps {
//     quiz: any;
//     user: any;
//   }
  
//   interface DispatchFromProps {
//     handleClick: () => void;
//   }

interface State {
    showLoader: boolean;
    name:string,
    email:string,
    msg:string
}
interface Props extends RouteComponentProps<any> {
    user : any,
    userEnter : any
}

 class MainPage extends Component<Props, State>{
    constructor(props: Props)
    {
        super(props);
       this.state = {
            showLoader : false,
            name:"",
            email:"",
            msg:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (e:React.ChangeEvent<HTMLInputElement>) {
       switch(e.target.name)
       {
           case "name":
                this.setState({
                    name:e.target.value
                })
                break;
            case "email":
                this.setState({
                    email:e.target.value
                })
       }
    }
    handleSubmit = () => {
        
        this.props.userEnter(this.state.name, this.state.email)
        this.props.history.push("/quiz")
    }

    render()
    {
       
        return (
         
           <div className="main-page">
            {/* {this.state.showLoader &&   
                // <div className="popup">{this.state.msg} </div> 
            }            */}
           <div className="innder-div">
              <div className="form-div">
                  <div className="left-div"/>
                  <div className="right-div">
                    <div className="right-inner-div">
                        <span>Enter Quiz</span> 
                    </div>
                    <div className="right-inner-down">
                             <div className="right-form">
                                <span>Login for start quiz</span>
                                <div className="form">
                                    <div>
                                    <input className="input-field" type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Name"></input>
                                    </div>
                                    <div>
                                    <input className="input-field" type="email" name="email" value={this.state.email} onChange={this.handleChange}  placeholder="Enter Email"></input>
                                    </div>
                                    <div>
                                    <button className="btn-login" onClick={this.handleSubmit}>Enter Quiz<span></span></button>
                                    </div>
                                </div>
                             </div>
                    </div>
                  </div>
              </div>
           </div>
        </div>  
      
    )
}
} 
const mapStateToProps = (state:any) => ({
    user : state.user
})
const mapDispatchToProps = (dispatch:Dispatch) =>
{
    return bindActionCreators(
        {
            userEnter
        },
        dispatch
    )
    // handleClick: (name,email) => dispatch(userEnter(name,email))
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainPage))

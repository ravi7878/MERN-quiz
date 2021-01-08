import React, { Component, Fragment } from 'react'
import "../Style/MainPage.css"
interface State {
    showLoader: boolean;
}
interface Props {}
export default class MainPage extends Component<Props, State>{
    constructor(props: Props)
    {
        super(props);
       this.state = {
            showLoader : true
        }
    }
    render()
    {
        return (
         
           <div className="main-page">
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
                                    <input className="input-field" type="text" placeholder="Enter Name"></input>
                                    </div>
                                    <div>
                                    <input className="input-field" type="email" placeholder="Enter Email"></input>
                                    </div>
                                    <div>
                                    <button className="btn-login">Enter Quiz<span></span></button>
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
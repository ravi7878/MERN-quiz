import React, { Component } from 'react'
import {connect } from "react-redux"
import "../Style/QuizPage.css"
import {getQuizQuestions} from "../Redux/Action/QuizAction"
import {bindActionCreators, Dispatch} from "redux"
  
interface State {
   
}
interface Props {
   
}

 class QuizPage extends Component<Props, State>{
    constructor(props: Props)
    {
        super(props);
       this.state = {
          
        }
       
    }
  
    componentDidMount()
    {
      
    }
  

    render()
    {
        return (
            <div className="quiz-section-main"> 
                       
            <div className="quiz-section-left">
               <div className="quiz-left-upper">
                    <div className="quiz-counter">
                    {/* {questions.map((data:any,index:any)=> {
                        return(
                            <div key={index} className="count">
                                {index +1}
                            </div>
                        )
                    })} */}
                    </div>
                </div>
                <div className="quiz-left-lower">
                   
                   {/* <p>Total Questions :- {this.state.count}</p>
                   <p>Difficulty :- {this.state.difficulty}</p>
                   <p>type :- {this.state.type}</p> */}

                </div>
            </div>
            <div className="quiz-section-right">
                
                <div className="quiz-right-inner">
                   
                    <div className="quiz-question">
                        <p >
                        {/* {questions[0].question} */}
                        </p>
                    </div>
                    <div className="quiz-option">
                        {[1,2,3,4].map((data,index)=>{
                           
                        })}
                        <div>
                        <div className="quiz-option-div active">
                        <input className="radio" type="radio" value={"Marshall Islands"} name="gender" /> Micronesia
                        </div>
                        <div className="quiz-option-div">
                        <input type="radio" value={"Fiji"} name="gender" /> Fiji
                        </div>
                        <div className="quiz-option-div">
                        <input type="radio" value={"Tuvalu"} name="gender" /> Tuvalu
                        </div>
                        <div className="quiz-option-div">
                        <input type="radio" value={"Marshall Islands"} name="gender" />Marshall Islands
                        </div>
                        </div>
                       
                    </div>
                   
                </div>
                
            </div> 
          </div>  
    )
}
} 

export default QuizPage

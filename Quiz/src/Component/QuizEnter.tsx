import React, { Component, Fragment } from 'react'
import {connect } from "react-redux"
import "../Style/QuizPage.css"
import {getQuizQuestions} from "../Redux/Action/QuizAction"
import {bindActionCreators, Dispatch} from "redux"
  
interface State {
    showLoader: boolean,
    index:number,
    count:any,
    difficulty:string,
    type:string,
    user:any,
    quiz:any,
    questions:any,
    answer:any,
    selectedAnswer:String,
    answerSelected:boolean,
    complete:boolean
}
interface Props {
    quiz:any,
    user:any,
    getQuizQuestions:any
}

 class QuizEnter extends Component<Props, State>{
    constructor(props: Props)
    {
        super(props);
       this.state = {
            showLoader : false,
            count:null,
            index:0,
            difficulty:"",
            type:"",
            user:[],
            quiz:[],
            answer:[],
            questions:[],
            selectedAnswer:"",
            answerSelected:false,
            complete:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleAnswer = this.handleAnswer.bind(this)
        this.handleSkip = this.handleSkip.bind(this)
        this.handleFinish = this.handleFinish.bind(this)

        this.handleChangeDifficulty = this.handleChangeDifficulty.bind(this)
    }
  
    componentDidMount()
    {
        const {user} = this.props
    }
    componentWillReceiveProps(prevProps:any,nextProps:any)
    {

        if(prevProps)
        {
            if(!prevProps.user.loading)
            {
                this.setState({
                    user : prevProps.user.user,
                    questions: prevProps.quiz.questions
                })
            }
            
        }
    }
   
    handleChange (e:React.ChangeEvent<HTMLInputElement>) {
      this.setState({
            count:e.target.value
        })
      
    }
    handleChangeDifficulty(e:React.ChangeEvent<HTMLSelectElement>)
    {
        switch(e.target.name)
        {
             case "difficulty":
                 this.setState({
                     difficulty:e.target.value
                 })
                 break;
             case "type":
                 this.setState({
                     type:e.target.value
                 })
                 break;
        }
    }
    
    handleSubmit = () => {
        this.setState({
            index:0
        })
        const {count , difficulty , type} = this.state
        this.props.getQuizQuestions(count,difficulty,type)
    }
   
    handleNext = () =>
    {
            if(this.state.questions.length+1 !== this.state.index)
            {
                this.setState({
                    answer:[...this.state.answer,
                        {
                        index:this.state.index,
                        answer:this.state.selectedAnswer,
                        result:this.state.questions[this.state.index].correct_answer === this.state.selectedAnswer ? "correct" : "incorrect",
                        skiped:false
                    }]
                },
                ()=>{
                   
                    if(this.state.questions.length !== this.state.answer.length)
                    {
                        this.setState({
                            index:this.state.index +1,
                            answerSelected:false,
                            selectedAnswer:""
                        },()=>{
                            // console.log(this.state.answer)
                        })
                    }
                    else
                    {
                        this.setState({
                            complete:true
                        })
                    }
                   
                })
                
            }
    }
    handleSkip = () => {
      
        if(this.state.questions.length !== this.state.index)
        {
            
            this.setState({
                answer:[...this.state.answer,
                    {
                    index:this.state.index,
                    answer:this.state.questions[this.state.index].correct_answer,
                    result:"",
                    skiped:true
                }]
            },
            ()=>{
                if(this.state.questions.length !== this.state.answer.length)
                {
                    this.setState({
                        index:this.state.index +1,
                        answerSelected:false,
                        selectedAnswer:""
                    },()=>{
                        // console.log(this.state.answer)
                    })
                }
               
            })
            
        }
    }
    handleFinish()
    {
        const result =  Math.floor((this.state.answer.filter((item:any)=>{return item.result === "correct"}).length / this.state.answer.length) * 100 )
                         
        console.log(this.props.user.user.id , result , this.state.count,this.state.type,this.state.difficulty)
    }
    handleAnswer(e:any)
    {
        this.setState({
            selectedAnswer:e.target.value,
            answerSelected:true
        })
    }
    render()
    {
        const {user, quiz} = this.props.user
        const {questions,index,answer} = this.state
        let mcq:any = [] 
        if(questions.length > 0 && questions.length !== answer.length)
        {
            mcq.push(questions[this.state.index].correct_answer,...questions[this.state.index].incorrect_answers)
        }
       
        return (
         
           <div className="quiz-page">
               <div className="quiz-container">
               <div className="top-detail-bar">
                   <div>Name :- {user && user.name}</div>
                   <div>Email :- {user && user.email} </div>
                   <div>Total Quiz :- {quiz && quiz.length}</div>
               </div>
               <div className="top-search-bar">
                    <input className="quiz-input" name="count" value={this.state.count} onChange={this.handleChange} placeholder="Enter Question Count" type="number"/>
                   
                    <select  name="difficulty" value={this.state.difficulty} onChange={ this.handleChangeDifficulty }  placeholder="Select Difficulty:">
                        <option value="disbled" disabled>Select Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Mediam</option>
                        <option value="hard">Hard</option>
                    </select>
                    <select  name="type" placeholder="Select Type:" value={this.state.type} onChange={this.handleChangeDifficulty } >

                        <option value="disbled" disabled>Select Type</option>
                        <option  value="multiple">Multiple Choice</option>
                        <option value="boolean">True/False</option>
                    </select>
                    <button className="btn-enter" onClick={this.handleSubmit}>Enter Quiz<span></span></button>
               </div>
               <div className="quiz-section">
                  {questions.length > 0 ? <div className="quiz-section-main">  
                    <div className="quiz-section-left">
                       <div className="quiz-left-upper">
                            <div className="quiz-counter">
                                {!this.state.complete ?   questions.map((data:any,index:any)=> {
                                return(
                                    <div 
                                        key={index} 
                                        style={{
                                            backgroundColor: answer.some( (answer:any) => answer['index'] === index && answer['skiped'] === false  ) ? "red" : 
                                            // answer.some( (answer:any) => answer['skiped']) ? "pink" : 
                                            this.state.index === index ? "green" : "orange"
                                        }}
                                        className="count">
                                    {index +1}
                                    </div>
                                )
                            }) : 
                            answer.map((data:any,index:any)=> {
                                return(
                                    <div 
                                        key={index} 
                                        style={{
                                            backgroundColor: data.result === "correct" ? "green" :  "red" 
                                        }}
                                        className="count">
                                    {index +1}
                                    </div>
                                )
                            })
                            }
                           
                            </div>
                        </div>
                        <div className="quiz-left-lower">
{/*                            
                           <p>Total Questions :- {this.state.count}</p>
                           <p>Difficulty :- {this.state.difficulty}</p>
                           <p>type :- {this.state.type}</p> */}

                        </div>
                    </div>
                   
                    <div className="quiz-section-right">
                         {questions && !this.state.complete ? 
                        <div className="quiz-right-inner">
                           
                            <div className="quiz-question">
                                <p >
                                {questions[this.state.index].question}
                                </p>
                            </div>
                            <div className="quiz-option">
                                <div>
                                {                      
                                mcq.map((data:any,index:number)=>{
                                    return <div className="quiz-option-div active">
                                         <input className="radio" type="radio"  value={data} name="gender" onChange={this.handleAnswer} /> {data}
                                    </div>
                                })
                                }
                                </div>       
                            </div>
                            <div className="quiz-action">
                                <div>
                                    <button className="btn-next" disabled={!this.state.answerSelected} onClick={this.handleNext}>Next<span></span></button>
                                    <button className="btn-skip" onClick={this.handleSkip}>Skip<span></span></button>
                                </div>
                            </div>
                        </div> : 
                         <div className="quiz-right-inner">
                           <div className="quiz-complete-result">
                                <div className="quiz-result-header">
                                   result
                                </div>
                                <div className="quiz-result-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Qesution No </th>
                                                <th>Answer  </th>
                                                <th>Result  </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.answer.map((data:any,index:number) => {
                                                return(
                                                    <tr style={{backgroundColor:data.result === "incorrect" ? "#a50e0ea4" : "#0b992aa4" }}>
                                                    <td>{index+1}</td>
                                                    <td>{data.answer}</td>
                                                    <td >{data.result}</td>
                                                    </tr>
                                                )                                               
                                            })}
                                            <tr className="footer-table">
                                                <td colSpan={3}>
                                                 { this.state.answer.filter((item:any)=>{return item.result === "correct"}).length}{" "}
                                                     correct answers out of {this.state.answer.length  } you got { Math.floor((this.state.answer.filter((item:any)=>{return item.result === "correct"}).length / this.state.answer.length) * 100 )} % 

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                                <div className="submit-btn-div">
                                    <button className="btn-finish" onClick={this.handleFinish}>Submit<span></span></button>
                                </div>  
                             </div>
                                                     
                        </div>
                        }
                    </div> 
                  </div> : 
                   <div className="quiz-result">
                        
                       <table>
                           <thead>
                               <tr>
                                   <td colSpan={6}>PREVIOUS QUIZ RESULT </td>
                               </tr>
                               <tr>
                                   <th>Id</th>
                                   <th>Catagory</th>
                                   <th>Difficulty</th>
                                   <th>Total Quesions</th>
                                   <th>Type</th>
                                   <th>Result</th>
                               </tr>
                             
                           </thead>
                           <tbody>
                               {quiz && quiz.map((data:any,index:number) => {
                                   
                                   return (<tr>
                                   <td>{index+1}</td>
                                   <td>{data.quizDetail.SelectCategory}</td>
                                   <td>{data.quizDetail.SelectDifficulty}</td>
                                   <td>{data.quizDetail.NumberofQuestions}</td>
                                   <td>{data.quizDetail.SelectType}</td>
                                   <td>{data.quizResult ? "Pass" : "Fail"}</td>
                                    </tr>
                                )})}
                               
                             
                           </tbody>
                       </table>
                   </div>
                  }
               </div>
               </div>
             
            </div>  
      
    )
}
} 
const mapStateToProps = (state:any) => ({
    user : state.user,
    quiz :state.quiz
})
const mapDispatchToProps = (dispatch:Dispatch) =>
{
    return bindActionCreators(
        {
            getQuizQuestions
        },
        dispatch
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(QuizEnter)

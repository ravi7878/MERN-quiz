import React, { Component } from 'react'
import {connect } from "react-redux"
import "../Style/QuizPage.css"
import {getUserQuizCompleted} from "../Redux/Action/QuizAction"
import {bindActionCreators, Dispatch} from "redux"
  
interface State {
    showLoader: boolean;
    count:any,
    difficulty:string,
    type:string
}
interface Props {
    quiz:any,
    user:any,
    getUserQuizCompleted:any
}

 class QuizEnter extends Component<Props, State>{
    constructor(props: Props)
    {
        super(props);
       this.state = {
            showLoader : false,
            count:null,
            difficulty:"",
            type:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeDifficulty = this.handleChangeDifficulty.bind(this)
    }
    componentDidMount()
    {
        const {user} = this.props.user
        if(user)
        {

        this.props.getUserQuizCompleted(user.id)
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
            showLoader:true
        })
    }
    render(): JSX.Element
    {
        const {user,quiz} = this.props.user
        
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
                        <option value="mediam">Mediam</option>
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
                  {this.state.showLoader ? <div className="quiz-section-main"> 
                    <div className="quiz-section-left">
                       <div className="quiz-left-upper">
                            <div className="quiz-counter">
                            {[1,2,3,4,5,6,7,8,9,10,11,12,14,1,2,3,4,5,6,7,8,9,10,11,12,14].map((data,index)=> {
                                return(
                                    <div key={index} className="count">
                                        {index +1}
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                        <div>
                           
                        </div>
                    </div>
                    <div className="quiz-section-right">
                        <div className="quiz-right-inner">
                            <div className="quiz-question">
                                <p >
                                The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?
                                </p>
                            </div>
                            <div className="quiz-option">
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
                            <div className="quiz-action">
                                <div>
                                    <button className="btn-next" onClick={()=>{console.log("123")}}>Next<span></span></button>
                                    <button className="btn-skip" onClick={this.handleSubmit}>Skip<span></span></button>
                                   
                                </div>
                            </div>
                        </div>
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
            getUserQuizCompleted
        },
        dispatch
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(QuizEnter)

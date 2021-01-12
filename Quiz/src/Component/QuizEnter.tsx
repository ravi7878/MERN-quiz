import React, { Component } from 'react'
import {connect } from "react-redux"
import "../Style/QuizPage.css"

  
interface State {
    showLoader: boolean;
    count:any,
    difficulty:string,
    type:string
}
interface Props {


}

 class QuizEnter extends Component<Props, State>{
    constructor(props: Props)
    {
        super(props);
       this.state = {
            showLoader : true,
            count:null,
            difficulty:"",
            type:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeDifficulty = this.handleChangeDifficulty.bind(this)
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
                 console.log(e.target.value)    
                 this.setState({
                     difficulty:e.target.value
                 })
                 break;
             case "type":
                 console.log(e.target.value)    
 
                 this.setState({
                     type:e.target.value
                 })
                 break;
        }
    }
    handleSubmit = () => {
        console.log(this.state)
        this.setState({
            showLoader:true
        })
        // this.props.userEnter("ravi","rkevadiya2@gmail.com")
    }
    render(): JSX.Element
    {
        return (
         
           <div className="quiz-page">
               <div className="quiz-container">
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
                  {this.state.showLoader && <div className="quiz-section-main"> 
                    <div className="quiz-section-left">
                        {/* <div className="quiz-left-upper">
                        1
                        </div>
                        <div>
                            2
                        </div> */}
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
                                    <button className="btn-next" onClick={()=>{console.log("123")}}>Submit<span></span></button>
                                    <button className="btn-skip" onClick={this.handleSubmit}>Skip<span></span></button>
                                   
                                </div>
                            </div>
                        </div>
                    </div> 
                  </div> }
               </div>
               </div>
             
            </div>  
      
    )
}
} 
const mapStateToProps = (state:State) => ({
    user : state
})

export default connect(mapStateToProps)(QuizEnter)

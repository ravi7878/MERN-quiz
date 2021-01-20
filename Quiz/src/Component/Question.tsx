import React, { Component, Fragment } from 'react'
import { RouteComponentProps,withRouter  } from "react-router-dom";
import "../Style/MainPage.css"
interface State {}
interface Props extends RouteComponentProps<any>{
    question:any
}
 class Question extends Component<Props, State>{
     
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
            <Fragment>
                 <div className="quiz-question">
                    <p>
                        {this.props.question}
                    </p>
                </div>
           </Fragment>
            
    )
}
} 

export default withRouter (Question)
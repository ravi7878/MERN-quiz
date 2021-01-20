import React, { Component, Fragment } from 'react'
import { RouteComponentProps,withRouter  } from "react-router-dom";
import "../Style/MainPage.css"
interface State {
    showLoader: boolean;
}
interface Props extends RouteComponentProps<any>{}
 class SpashScreen extends Component<Props, State>{
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
                 <div className="splash-screen" style={{
                    backgroundImage:"url(" + "https://miro.medium.com/max/1600/1*e_Loq49BI4WmN7o9ItTADg.gif" + ")",
                    backgroundColor:"black"
                 }} >
                     <button className="btn-start" onClick={()=> this.props.history.push("/home")}>Start<span>
                         </span></button>
                </div>  
           </Fragment>
            
    )
}
} 

export default withRouter (SpashScreen)
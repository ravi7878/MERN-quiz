import React, { Component } from 'react'
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
            showLoader : false
        }
    }
    render()
    {
        return (
            <div className="main-page">
            main page
        </div>  
    )
}
} 
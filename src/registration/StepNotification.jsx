import React from 'react'
import {Step,Icon} from 'semantic-ui-react'
import "../semantic/dist/semantic.min.css"
export default class StepNotifcation extends React.Component{
    checkStatus(i){
        console.log(this.props, i);
        if(this.props.stage<i){
            return "disabled";
        }else if(this.props.stage==i){
            return "active";
        }else if(this.props.stage>i){
            return "completed";
        }else{
            return "";
        }
    }
    render(){
       return(
        <div>
            <Step.Group ordered>
                <Step className={this.checkStatus(0)}>
                    <Step.Content>
                        <Step.Title>Basic Details</Step.Title>
                        <Step.Description>just add your basic details</Step.Description>
                    </Step.Content>
                </Step>

                <Step className={this.checkStatus(1)}>
                    <Step.Content>
                        <Step.Title>Profile Details</Step.Title>
                        <Step.Description>purpose of this account</Step.Description>
                    </Step.Content>
                </Step>

                <Step className={this.checkStatus(2)}>
                    <Step.Content>
                        <Step.Title>Finilization</Step.Title>
                        <Step.Description>Final step in registration process</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>
        </div>
       );
    }
}
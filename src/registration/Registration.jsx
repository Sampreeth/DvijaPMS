import React from 'react'
import Basicdetails from './multistage/Basicdetails'
import Userprofile from './multistage/Userprofile'
import Completion from './multistage/Completion'
import StepNotification from './StepNotification'
let fieldValues={
    name:null,
    password:null
}
export default class Registration extends React.Component{
    state={stage:0};

    saveValues(field){
        Object.assign(fieldValues,field);
    }
    nextStep(){

    }
    previousStep(){

    }
    submit(){

    }
    render(){
       switch(this.state.stage){
            case 0: 
                return (<div>
                            <StepNotification stage={0} />
                            <Basicdetails nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues}/>
                        </div>);
            case 1:
                return (<div>
                            <StepNotification  stage={1} />
                            <Userprofile 
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            saveValues={this.saveValues}/>
                        </div>);
            case 2:
                return (<div>
                            <StepNotification stage={2} />
                            <Completion 
                            previousStep={this.previousStep}
                            saveValues={this.saveValues}/>
                        </div>);
            default:
                return null;
       }
    }
}
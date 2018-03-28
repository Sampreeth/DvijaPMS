var React = require('react');
var createReactClass = require('create-react-class');
var CollegeForm=require('./Forms/collegeForm');
var TeacherForm=require('./Forms/teacherForm');
var StudentForm=require('./Forms/studentForm');
var CorporateForm=require('./Forms/corporateForm');
var Confirmation = createReactClass({
  render: function() {
    switch(this.props.fieldValues.userType){
      case 'Student':
        return <StudentForm fieldValues={this.props.fieldValues} 
                nextStep={this.props.nextStep}
                saveValues={this.props.saveValues}/>
      case 'Teacher':
        return <TeacherForm fieldValues={this.props.fieldValues} 
                nextStep={this.props.nextStep}
                saveValues={this.props.saveValues}/>
      case 'Corporates':
        return <CorporateForm fieldValues={this.props.fieldValues} 
                nextStep={this.props.nextStep}
                saveValues={this.props.saveValues}/>
      case 'College':
        return <CollegeForm fieldValues={this.props.fieldValues} 
                nextStep={this.props.nextStep}
                saveValues={this.props.saveValues}/>
      default:
        return (<p>Not selected</p>);
    }
  }
  
});

module.exports = Confirmation
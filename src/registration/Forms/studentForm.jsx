var React = require('react');
var createReactClass = require('create-react-class');

var studentForm = createReactClass({
  render: function() {
    return ( <div>
        <h1>Student Enrollment Form</h1>
        <label>usn</label>
        <input type="text"
                ref="usn"
                defaultValue={ this.props.fieldValues.usn } />
        <label>College Name</label>
        <input type="text"
                ref="collegeName"
                defaultValue={ this.props.fieldValues.collegeName } />
      <button onClick={ this.saveAndContinue }>Save & Continue</button></div>
    )
  },
  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
        usn: this.refs.usn.value,
        collegeName: this.refs.collegeName.value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
});

module.exports = studentForm
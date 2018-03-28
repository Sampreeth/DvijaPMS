var React = require('react');
var createReactClass = require('create-react-class');

var teacherForm = createReactClass({
  render: function() {
    return ( <div>
        <h1>Teacher Enrollment Form</h1>
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
        collegeName: this.refs.collegeName.value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
});

module.exports = teacherForm
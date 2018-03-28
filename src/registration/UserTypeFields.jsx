var React = require('react');
var createReactClass = require('create-react-class');

var UserTypeFields = createReactClass({
  render: function() {
    return ( <div>
      <label>Membership Type: </label> 
      <select ref="userType">
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          <option value="Corporates">Corporate Partner</option>
          <option value="College">College</option>
      </select>
      <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
    );
  },
  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      userType     : this.refs.userType.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
});

module.exports = UserTypeFields
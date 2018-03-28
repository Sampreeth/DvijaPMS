var React = require('react');
var createReactClass = require('create-react-class');

var AccountFields = createReactClass({
  render: function() {
    return ( 
    <div>
      <label>Name</label> 
      <input type="text"
             ref="name"
             defaultValue={ this.props.fieldValues.name } />

      <label>Password</label>
      <input type="password"
             ref="password"
             defaultValue={ this.props.fieldValues.password } />

      <label>Email</label>
      <input type="email"
             ref="email"
             defaultValue={ this.props.fieldValues.email } />

      <label>Phone Number</label>
      <input type="number"
             ref="phoneNumber"
             defaultValue={ this.props.fieldValues.phoneNumber } />

      <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
    )
  },
  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.value,
      password : this.refs.password.value,
      email    : this.refs.email.value,
      phoneNumber:this.refs.phoneNumber.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})
module.exports = AccountFields
var React         = require('react');
var AccountFields = require('./AccountFields');
var UserTypeFields  = require('./UserTypeFields');
var Confirmation  = require('./Confirmation');
var Success       = require('./Success');
var createReactClass = require('create-react-class');

var fieldValues = {
	name     : null,
	email    : null,
	password : null,
	age      : null,
	phoneNumber:null,
	userType: null,
	collegeName:null,
	usn				:null,
	corporateName:null
}

var Registration = createReactClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},
	saveValues: function(fields) {
		return function() {
		  // Remember, `fieldValues` is set at the top of this file, we are simply appending
		  // to and overriding keys in `fieldValues` with the `fields` with Object.assign
		  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
		  fieldValues = Object.assign({}, fieldValues, fields)
		}()
	},
	nextStep: function() {
		this.setState({
		  step : this.state.step + 1
		})
	},
	previousStep: function() {
		this.setState({
		  step : this.state.step - 1
		})
	},
	render: function() {
		switch (this.state.step) {
			case 1:
			  return <AccountFields fieldValues={fieldValues}
									nextStep={this.nextStep}
									saveValues={this.saveValues} />
			case 2:
			  return <UserTypeFields fieldValues={fieldValues}
								   nextStep={this.nextStep}
								   previousStep={this.previousStep}
								   saveValues={this.saveValues} />
			case 3:
				return <Confirmation fieldValues={fieldValues}
									 nextStep={this.nextStep}
								   previousStep={this.previousStep}
								   saveValues={this.saveValues} />
			case 4:
			  return <Success fieldValues={fieldValues} />
			default:
				return null;
		}
	}
});
module.exports = Registration
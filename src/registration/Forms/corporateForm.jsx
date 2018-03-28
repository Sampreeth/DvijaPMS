var React = require('react');
var createReactClass = require('create-react-class');

var corporateForm = createReactClass({
  render: function() {
    return ( <div>
        <h1>Corporate Enrollment Form</h1>
        <label>Corporate Name</label>
        <input type="text"
                ref="corporateName"
                defaultValue={ this.props.fieldValues.corporateName } />
      <button onClick={ this.saveAndContinue }>Save & Continue</button></div>
    )
  },
  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
        corporateName: this.refs.corporateName.value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
});

module.exports = corporateForm
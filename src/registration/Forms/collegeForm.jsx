var React = require('react');
var createReactClass = require('create-react-class');

var collegeForm = createReactClass({
  render: function() {
    return ( <div>
      <h1>College Enrollment Form</h1>
      <label>Mass Upload</label>
      <button onClick={ this.saveAndContinue }>Upload And Save</button></div>
    )
  },
  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
});

module.exports = collegeForm
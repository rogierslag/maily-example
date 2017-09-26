const React = require('react');

const Contact = require('./contact');

const Envelope = React.createClass({

	propTypes : {
		children : React.PropTypes.node.isRequired,
	},

	render() {
		return <div>
			{this.props.children}
			<Contact/>
		</div>;
	}
});

module.exports = Envelope;

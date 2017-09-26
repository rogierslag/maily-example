const React = require('react');

const Envelope = require('./envelope');
const Text = require('./text');

const Invoice = React.createClass({

	propTypes : {
		user_name : React.PropTypes.string.isRequired,
		order_id : React.PropTypes.string.isRequired,
	},

	render() {
		return (
			<Envelope>
				<Text>
					Hi {this.props.user_name},
				</Text>
				<Text>
					Attached you will find your invoice for order #{this.props.order_id}.
				</Text>
				<Text>
					Greetings
					<br/>
					the inventid team
				</Text>
			</Envelope>
		);
	}
});

module.exports = Invoice;

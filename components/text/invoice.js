const React = require('react');

const Envelope = require('./envelope');
const Text = require('./text');

const translate = require('../translate');

const Invoice = React.createClass({

	propTypes : {
		lang : React.PropTypes.string.isRequired,
		user_name : React.PropTypes.string.isRequired,
		order_id : React.PropTypes.string.isRequired,
	},

	render() {
		return (
			<Envelope>
				<Text>
					{translate(this.props.lang, 'hi', {username: this.props.user_name})}
				</Text>
				<Text>
					{translate(this.props.lang, 'invoiceAttached', {orderId: this.props.order_id})}
				</Text>
				<Text>
					{translate(this.props.lang, 'greetings')}
					<br/>
					{translate(this.props.lang, 'theTeam')}
				</Text>
			</Envelope>
		);
	}
});

module.exports = Invoice;

const React = require('react');

const style = require('../style');
const translate = require('../translate');

const Envelope = require('./envelope');
const Text = require('./text');
const FullWidthSection = require('./fullWidthSection');

const Invoice = React.createClass({

	propTypes : {
		lang : React.PropTypes.string.isRequired,
		user_name : React.PropTypes.string.isRequired,
		order_id : React.PropTypes.string.isRequired,
	},

	render() {
		return (
			<Envelope>
				<FullWidthSection>
					<mj-text font-weight="bold"
					         font-size={`${style.fontSize.large}px`}
					         padding-top={`${style.distance.small}px`}
					         padding-bottom={`${style.distance.small}px`}>
						{translate(this.props.lang, 'hi', {username : this.props.user_name})}
					</mj-text>
					<Text>
						{translate(this.props.lang, 'invoiceAttached', {orderId : this.props.order_id})}
					</Text>
					<mj-text font-size={`${style.fontSize.medium}px`}
					         padding-top={`${style.distance.small}px`}
					         padding-bottom={`${style.distance.small}px`}>
						{translate(this.props.lang, 'greetings')}
						<br/>
						{translate(this.props.lang, 'theTeam')}
					</mj-text>
				</FullWidthSection>
			</Envelope>
		);
	}
});

module.exports = Invoice;

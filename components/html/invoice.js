const React = require('react');

const style = require('../style');

const Envelope = require('./envelope');
const Text = require('./text');
const FullWidthSection = require('./fullWidthSection');

const Invoice = React.createClass({

	propTypes: {
		user_name: React.PropTypes.string.isRequired,
		order_id: React.PropTypes.string.isRequired,
	},

	render() {
		return (
			<Envelope>
				<FullWidthSection>
					<mj-text font-weight="bold"
					         font-size={`${style.fontSize.large}px`}
					         padding-top={`${style.distance.small}px`}
					         padding-bottom={`${style.distance.small}px`}>
						Hi {this.props.user_name},
					</mj-text>
					<Text>
						Attached you will find your invoice for order #{this.props.order_id}.
					</Text>
					<mj-text font-size={`${style.fontSize.medium}px`}
					         padding-top={`${style.distance.small}px`}
					         padding-bottom={`${style.distance.small}px`}>
						Greetings
						<br />
						the inventid team
					</mj-text>
				</FullWidthSection>
			</Envelope>
		);
	}
});

module.exports = Invoice;

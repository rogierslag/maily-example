const React = require('react');

const style = require('../style');

const Header = require('./header');
const Contact = require('./contact');
const Divider = require('./divider');
const FullWidthSection = require('./fullWidthSection');

const Envelope = React.createClass({

	propTypes: {
		children: React.PropTypes.node.isRequired,
		showHeaderDivider: React.PropTypes.bool
	},

	getDefaultProps() {
		return {
			showHeaderDivider: true,
		};
	},

	render() {
		return (
			<mjml>
				<mj-head>
					<mj-font name="Open Sans"
					         href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"/>
					<mj-attributes>
						<mj-all font-family="Open Sans, Ubuntu, sans-serif"/>
					</mj-attributes>
				</mj-head>
				<mj-body>
					<mj-container background-color={style.colors.background} width="500px">
						<mj-spacer height={`${style.distance.medium}px`} />
						<Header showDivider={this.props.showHeaderDivider} />
						{this.props.children}
						<FullWidthSection>
							<Divider />
						</FullWidthSection>
						<Contact />
						<mj-spacer height={`${style.distance.medium}px`} />
					</mj-container>
				</mj-body>
			</mjml>
		);
	}
});

module.exports = Envelope;

/*
Add colors.background to style.js with some nice rgb value. You may pick one this time
 */

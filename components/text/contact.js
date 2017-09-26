const React = require('react');

const Text = require('./text');
const Footer = React.createClass({

	propTypes : {
		lang : React.PropTypes.string,
	},

	getDefaultProps() {
		return {
			lang : 'en',
		};
	},

	render() {
		return <div>
			<Text>
				inventid<br/>
				Examplestreet 14a<br/>
				1234 AA Exampletown<br/>
			</Text>
			<Text>
				www.inventid.nl<br/>
				support@inventid.nl<br/>
				Privacy Statement
			</Text>
		</div>;
	}
});

module.exports = Footer;

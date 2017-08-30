const React = require('react');

const PropTypes = require('../propTypes');
const style = require('../style');

const Divider = require('./divider');

const Header = React.createClass({

	propTypes : {
		href : React.PropTypes.string, // You might want to use a HTML validator instead
		src : React.PropTypes.string, // You might want to use a HTML validator instead
		alt : React.PropTypes.string,
		showDivider : React.PropTypes.bool,
		dividerColor : React.PropTypes.string
	},

	getDefaultProps() {
		return {
			showDivider : true,
			href : 'https://www.inventid.nl',
			src : 'https://cdn.inventid.nl/assets/logo-horizontally-f109689e93644fa7d210444da73a0918.png',
			alt : 'inventid',
			dividerColor : undefined
		};
	},

	render() {
		const divider = this.props.showDivider ? <Divider color={this.props.dividerColor}/> : null;
		return (
			<mj-section background-color={style.colors.fullWhite}
			            padding-top={style.distance.medium}
			            padding-left="0px"
			            padding-right="0px"
			            padding-bottom={style.distance.small}>
				<mj-column vertical-align="top" width={style.width.full}>
					<mj-image href={this.props.href}
					          src={this.props.src}
					          alt={this.props.alt}
					          align="center"
					          border="none"
					          width="148px"
					          padding-left="0"
					          padding-right="0"
					          padding-bottom={divider ? `${style.distance.medium}px` : "0px"}
					          padding-top="0"/>
					{divider}
				</mj-column>
			</mj-section>
		)
	}
});

module.exports = Header;

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import Text from 'lib/text';
import urlManager from 'common/utils/url-manager';

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(0),
	},
	link: {
		color: 'inherit',
	},
	title: {
		flexGrow: 1,
	},
}));

const ToolbarComponent = props => {
	const classes = useStyles();
	const { title, isHome } = props;
	const urlToHome = urlManager.folders();
	const history = useHistory();

	const showSettingsButton = !/settings/iu.test(window.location.pathname);
	const onClickToSettings = e => {
		e.preventDefault();
		history.push(urlManager.settings());
	};

	const linkToHome = !isHome && (
		<IconButton
			edge="start"
			className={classes.menuButton}
			color="inherit"
			aria-label="home"
		>
			<Link to={urlToHome} className={classes.link}>
				<HomeIcon />
			</Link>
		</IconButton>
	);

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
				>
					<MenuIcon />
				</IconButton>
				{linkToHome}
				<Text variant="h6" className={classes.title}>
					{title}
				</Text>
				{showSettingsButton && (
					<Button color="inherit" onClick={onClickToSettings}>
						<Text variant="button">
							Settings
						</Text>
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

ToolbarComponent.propTypes = {
	title: PropTypes.string.isRequired,
	isHome: PropTypes.bool,
};

ToolbarComponent.defaultProps = {
	isHome: false,
};

export default ToolbarComponent;

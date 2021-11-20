import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Text from 'lib/text';

const useStyles = makeStyles((theme, ...o) => ({
	link: {
		color: 'inherit',
		textDecoration: 'none',
	},
}));

const Component = ({ data }) => {
	const classes = useStyles();

	return (
		<Breadcrumbs
			separator={<NavigateNextIcon fontSize="small" />}
			aria-label="breadcrumb"
		>
			{data.map((item, index) => {
				if (!item.to) {
					return (
						<Text color="textPrimary" key="last" variant="body1">
							{item.title}
						</Text>
					);
				}

				return (
					<Link
						color="inherit"
						to={item.to}
						className={classes.link}
						key={item.to}
					>
						<Text variant="body2">{item.title}</Text>
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};

export const BreadcrumbsPropTypes = PropTypes.arrayOf(
	PropTypes.shape({
		to: PropTypes.string,
		title: PropTypes.string.isRequired,
	})
);

Component.propTypes = {
	data: BreadcrumbsPropTypes,
};

Component.defaultProps = {
	data: [],
};

export default Component;

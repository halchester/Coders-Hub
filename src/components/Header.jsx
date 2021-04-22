import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
	root: {
		margin: '1rem auto',
	},
});

const Header = () => {
	const classes = useStyle();
	return (
		<Box className={classes.root}>
			<Typography align='center' gutterBottom>
				<Typography variant='h3' align='center' display='inline'>
					Coders{' '}
				</Typography>

				<Typography
					variant='h4'
					align='center'
					display='inline'
					color='primary'
				>
					<strong>Hub</strong>
				</Typography>
			</Typography>
			<Typography align='center' variant='h6' color='secondary'>
				A community of developers around the globe!
			</Typography>
		</Box>
	);
};

export default Header;

import { Box, Typography } from '@material-ui/core';
import React from 'react';

function Footer() {
	return (
		<Box>
			<Typography variant='h5' align='center' gutterBottom>
				Add yourself on{' '}
				<a
					href='https://github.com/halchester/Coders-Hub'
					style={{ textDecoration: 'none', color: '#0d72ad' }}
				>
					Github
				</a>
			</Typography>
			<Typography variant='h5' align='center' gutterBottom>
				Inspired by{' '}
				<a
					href='https://uses.tech/'
					style={{ textDecoration: 'none', color: '#0d72ad' }}
				>
					Awesome uses
				</a>
			</Typography>{' '}
		</Box>
	);
}

export default Footer;

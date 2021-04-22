import { Box, Chip, makeStyles } from '@material-ui/core';
import React from 'react';
import * as utils from './stats';

const useStyle = makeStyles((theme) => ({
	chip: {
		margin: theme.spacing(1),
	},
}));

const OverallTags = () => {
	const tags = utils
		.tags()
		.map((resultTags) => `${resultTags.name} - ${resultTags.count}`);

	const classes = useStyle();
	return (
		<Box>
			{tags.map((tag) => {
				return tag.includes('all') ? (
					<Chip label={tag} className={classes.chip} color='primary' />
				) : (
					<Chip label={tag} className={classes.chip} color='secondary' />
				);
			})}
		</Box>
	);
};

export default OverallTags;

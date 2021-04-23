import React from 'react';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	Chip,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	root: {},
	avatar: {
		height: 75,
		width: 75,
	},
	chip: {
		margin: theme.spacing(0.5),
	},
	footer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#d3d3d3',
		padding: '0.3rem',
		marginTop: '1rem',
	},
}));

const User = ({ name, website, github, emoji, info, phone, laptop, tags }) => {
	const profilePic = `https://unavatar.now.sh/github/${github}`;
	const githubProfile = `https://github.com/${github}`;
	const classes = useStyle();
	const renderLaptop = (name) => {
		switch (name) {
			case 'mac':
				return (
					<img
						src='https://img.icons8.com/bubbles/50/000000/mac-logo.png'
						alt=''
					/>
				);
			case 'linux':
				return (
					<img src='https://img.icons8.com/color/48/000000/linux.png' alt='' />
				);
			case 'window':
				return (
					<img
						src='https://img.icons8.com/doodle/48/000000/windows8.png'
						alt=''
					/>
				);
			default:
				return null;
		}
	};

	const renderPhone = (name) => {
		switch (name) {
			case 'iphone':
				return (
					<img
						src='https://img.icons8.com/officel/48/000000/iphone.png'
						alt=''
					/>
				);
			case 'android':
				return (
					<img
						src='https://img.icons8.com/fluent/48/000000/android-os.png'
						alt=''
					/>
				);
			default:
				return null;
		}
	};

	return (
		<Card>
			<CardHeader
				avatar={<Avatar src={profilePic} className={classes.avatar}></Avatar>}
				title={
					<Typography variant='h5'>
						<strong>{name}</strong>
					</Typography>
				}
				subheader={
					<a
						href={website}
						style={{ textDecoration: 'underline', color: '#0d72ad' }}
					>
						<Typography variant='body1'>{website}</Typography>
					</a>
				}
			/>
			<CardContent>
				<Typography gutterBottom>{info}</Typography>
				{tags.map((tag) => (
					<Chip label={tag} className={classes.chip} color='primary' />
				))}
				<Card className={classes.footer}>
					<Box>{renderLaptop(laptop)} </Box>
					<Box>{renderPhone(phone)} </Box>
					<Box>
						<a href={githubProfile} style={{ color: '#0d72ad' }}>
							<Typography>@{github}</Typography>
						</a>
					</Box>
				</Card>
			</CardContent>
		</Card>
	);
};

export default User;

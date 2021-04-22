import { Box, Grid } from '@material-ui/core';
import React from 'react';
import data from '../data';
import User from './User';

function UserList() {
	return (
		<Box style={{ margin: '1rem' }}>
			<Grid container spacing={2}>
				{data.map((user, i) => {
					return (
						<Grid item xs={12} sm={6} md={4} lg={4}>
							<User
								name={user.name}
								website={user.website}
								github={user.github}
								emoji={user.emoji}
								info={user.info}
								phone={user.phone}
								laptop={user.laptop}
								tags={user.tags}
								key={i}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
}

export default UserList;

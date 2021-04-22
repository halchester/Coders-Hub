import React from 'react';
import Header from './components/Header';
import UserList from './components/UserList';
import OverallTags from './components/OverallTags';
import Footer from './components/Footer';
import { Box } from '@material-ui/core';

function App() {
	return (
		<Box>
			<Header />
			<OverallTags />
			<UserList />
			<Footer />
		</Box>
	);
}

export default App;

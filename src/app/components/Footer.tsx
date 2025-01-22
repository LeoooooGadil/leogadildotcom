import React from 'react';

const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		<div className="text-center my-12">
			<h1 className="text-white opacity-70">© {currentYear}. All Rights Reserved.</h1>
		</div>
	)
}

export default Footer
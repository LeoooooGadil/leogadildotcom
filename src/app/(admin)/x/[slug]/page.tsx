import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
	const params = useParams();
	const { slug } = params;

	return (
		<div></div>
	)
}

export default page
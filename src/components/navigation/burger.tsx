import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const BurgerComponent = () => {
  return (
	<div className='lg:hidden'>
		<button className='mt-1 pr-2'>
			<RxHamburgerMenu size={24} />
		</button>
	</div>
  )
}

export default BurgerComponent
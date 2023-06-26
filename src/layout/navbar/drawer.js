import React from 'react';

import { SwipeableDrawer } from "@mui/material"
import { styled } from "@mui/system";

import SwipeableDrawerList from "./list";

const StyledSwipeAbleDrawer = styled(SwipeableDrawer)(({theme}) => ({
}))

const swipeableDrawerSX = {

}

const SwipeableSideDrawer = ({mobileNav, setMobileNav}) => {
	return (
		<StyledSwipeAbleDrawer
			anchor="right"
			open={mobileNav}
			onClose={() => setMobileNav(false)}
			onOpen={() => setMobileNav(true)}
			sx={swipeableDrawerSX}
		>
			<SwipeableDrawerList mobileNav={mobileNav} setMobileNav={setMobileNav}/>
		</StyledSwipeAbleDrawer>
	)
}

export default SwipeableSideDrawer
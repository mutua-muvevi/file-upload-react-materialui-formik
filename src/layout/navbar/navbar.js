import React, { useState, useLayoutEffect, useRef } from 'react';

import { styled } from '@mui/system';
import { AppBar,Toolbar, IconButton, Typography, Button, Menu, MenuItem, Divider, Container, Stack, Box } from '@mui/material';

import { FaBars } from "react-icons/fa";

import { menuItems } from "./info";
import { NavLink } from 'react-router-dom';

import SwipeableSideDrawer from './drawer';

const logo = "https://res.cloudinary.com/dbj0t0zym/image/upload/v1687787934/logos/logo_alfszk.png"

const TopAppBar = styled(AppBar)(({ theme }) => ({
	zIndex: 3,
	backgroundColor: theme.palette.primary.darker,
}))

const StyledContainer = styled(Container)({
	width: "100%",
	paddingTop: "20px"
})

const StyledLogoSection = styled(Box)({

})

const StyledMenuStack = styled(Stack)({
	width: "100%",
	paddintTop: "20px",
	paddintBottom: "20px",
});

const StyledNavButton = styled(Button) ({
	paddingTop: "20px",
	paddingBottom: "20px",
	width:"max-content"
});

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const StyledButtonStack = styled(Stack)({
	
})

const StyledButton = styled(Button)({
	minWidth: "200px"
})

const styledLogo = {
	height: "60px"
}

const styledMobileLogo = {
	height: "40px"
}

const iconButtonSX = {

}

const Navigation = () => {

	const [mobileNav, setMobileNav] = useState(false)

	const handleMobileNav = () => {
		setMobileNav(!mobileNav)
	}

	const innerWidth = window.innerWidth

	return (
		<>
			{
				innerWidth >= 1000 ? (
					<TopAppBar position="scroll">
						<Toolbar>
							<StyledContainer maxWidth="xl">

								<StyledMenuStack direction="row" justifyContent="space-between" alignItems="center" spacing={5}>
									<StyledLogoSection>
										<img src={logo} alt="Skydive logo" style={styledLogo}/>
									</StyledLogoSection>

									<Stack direction="row" spacing={3}>
										{
											menuItems.map((el, i) => (
												<StyledNavButton sx={{textAlign: "left"}} variant="text" key={i}>
													<NavLink to={el.path} style={styledLink}>
														<Typography variant="subtitle1" style={{textTransform: "uppercase", color: "#fff"}}>
															{el.label}
														</Typography>
													</NavLink>

												</StyledNavButton>
											))
										}
									</Stack>


									<StyledButtonStack direction="row" spacing={3}>
										<StyledButton variant="contained" color="secondary">
											<Typography variant="subtitle1" >
												Login
											</Typography>
										</StyledButton>
									</StyledButtonStack>
								</StyledMenuStack>
							</StyledContainer>

						</Toolbar>
					</TopAppBar>
				) : (
					<Box sx={{marginBottom: "52px"}}>
						<TopAppBar >
							<Container maxWidth="xl">
								<Stack direction="row" justifyContent="space-between" alignItems="center">
									<img src={logo} alt="Henriot mobile logo" style={styledMobileLogo}/>
									<IconButton
										size="large"
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleMobileNav}
										color="inherit"
										sx={iconButtonSX}
									>
										<FaBars/>
									</IconButton>
								</Stack>
							</Container>
						</TopAppBar>
					</Box>
				)

			}

			<SwipeableSideDrawer mobileNav={mobileNav} setMobileNav={setMobileNav} />
		</>
	);
};

export default Navigation;

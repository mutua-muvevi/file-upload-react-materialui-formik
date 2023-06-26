import React from 'react';
import { NavLink } from "react-router-dom";

import { Box, Breadcrumbs, Grow, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaLaptopCode } from "react-icons/fa";

//import { breadcrumbsItem, iconStyles } from "../info";

const StyledBreadcrums = styled(Breadcrumbs)(({ theme }) => ({

}));

const BreadcrumbsComponent = ({ breadcrumbsItems, currentpage, currentPageIcon }) => {
	return (
		<StyledBreadcrums aria-label="breadcrumb">
			<Typography
				sx={{ display: 'flex', alignItems: 'center' }}
				color="text.primary"
			>
				{currentPageIcon}
				{currentpage}
			</Typography>
		</StyledBreadcrums>
	)
}

export default BreadcrumbsComponent
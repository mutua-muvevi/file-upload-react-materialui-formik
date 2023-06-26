import { useState } from "react";
import PropTypes from "prop-types";

import { Box, Button, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFillGridFill, BsPlusLg } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const tabsIconStyles = {
	fontSize: "inherit",
	color: "inherit",
};

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ py: 5 }}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	button: PropTypes.func,
	buttonText: PropTypes.string,
	buttonIcon: PropTypes.node,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const tabsActionButton = {
	minWidth: 180,
	height: 60,
};

const TabComponent = ({
	tabsInfo,
	button,
	buttonText,
	buttonIcon,
}) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%", marginTop: "10px" }}>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					variant="scrollable"
					allowScrollButtonsMobile
					sx={{
						"& .MuiTabs-indicator": {
							backgroundColor: tabsInfo.labels[value].color
								? `${tabsInfo.labels[value].color}.main`
								: "primary.main",
						},
					}}
				>
					{tabsInfo &&
						tabsInfo.labels &&
						tabsInfo.labels.map((el, i) => (
							<Tab
								key={i}
								label={el.label}
								icon={el.icon}
								iconPosition="start"
								sx={{
									color: el.color
										? value === i
											? `${el.color}.main`
											: `${el.color}.light`
										: undefined,
									"&.Mui-selected": {
										color: el.color
											? `${el.color}.main`
											: undefined,
									},
								}}
								{...a11yProps(i)}
							/>
						))}
				</Tabs>
				{button ? (
					<Button
						variant="contained"
						sx={tabsActionButton}
						onClick={button}
						startIcon={
							buttonIcon ? (
								buttonIcon
							) : (
								<BsPlusLg style={{ fontSize: "inherit" }} />
							)
						}
					>
						{buttonText}
					</Button>
				) : null}
			</Box>
			{tabsInfo &&
				tabsInfo.pannel &&
				tabsInfo.pannel.map((el, i) => (
					<TabPanel
						key={i}
						index={i}
						value={value}
						sx={{ marginLeft: 0 }}
					>
						{el.children}
					</TabPanel>
				))}
		</Box>
	);
}

export default TabComponent
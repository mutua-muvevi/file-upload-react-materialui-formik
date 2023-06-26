import React from 'react';
import PropTypes from "prop-types";

import { sentenceCase } from "change-case"

import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsXLg } from "react-icons/bs";
import { FaExclamationTriangle } from 'react-icons/fa';
import { useTheme } from '@emotion/react';

const StyledModalHeader = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	paddingTop: "10px",
	paddingBottom: "10px",
	paddingLeft: "20px",
	borderBottom: "1px solid grey"
}))

const StyledModalBody = styled(Box)(({ theme }) => ({
	padding: "20px",
	minHeight: 200
}))

const IconStyle={
	fontSize: "inherit"
}

const ModalComponent = ({header, open, close, width, children, type}) => {
	
	const theme = useTheme()
	
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor:  type === "delete" ? "error.lighter" : "background.paper",
		boxShadow: 24,
		p: 0,
		width: width,
		overflow: "hidden",
		borderRadius: 2
	};

	const styledExclamationIcon = {
		color: theme.palette.error.main,
		fontSize: "25px",
		marginRight: "15px"
	}


	return (
		<Modal
			open={open}
			//onClose={close}
			aria-labelledby={`${header} + modal`}
		>
			<Box sx={style}>
				<StyledModalHeader>
					<Stack direction="row" alignItems="center">
						{
							type === "delete" ? (
								<FaExclamationTriangle style={styledExclamationIcon}/>
							) : null
						}
						<Typography id={`${header} + modal`} variant="h4" color={type === "delete" ? "error" : "primary" }>
							{ sentenceCase(header) }
						</Typography>
					</Stack>

					<IconButton
						onClick={close}
					>
						<BsXLg style={ IconStyle }/>
					</IconButton>
				</StyledModalHeader>
				
				<StyledModalBody>
					{children}
				</StyledModalBody>
			</Box>
		</Modal>
	)
}

ModalComponent.propTypes = {
	header: PropTypes.string,
	close: PropTypes.func,
	children: PropTypes.node.isRequired
}

export default ModalComponent
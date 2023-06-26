import React from 'react'
import { Typography } from "@mui/material";
import { sentenceCase } from 'change-case';

const FormSuccess = ({ title, description }) => {
	return (
		<React.Fragment>
			<Typography variant="h5" gutterBottom>
				{title ? sentenceCase(title) : ""}
			</Typography>
			<Typography variant="subtitle1">
				{ description ? sentenceCase(description) : "" }
			</Typography>
		</React.Fragment>
	)
}

export default FormSuccess
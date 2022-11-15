import { TextField } from "@mui/material";
import React from 'react';
import { useField } from "formik";

const TextfieldWrapper = ({name, variant, multiline, size, shrink, ...otherProps}) => {

	const [field, meta] = useField(name)

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: variant ? variant : "outlined",
		size: size ? size : "small",
		multiline : multiline === true ? multiline : false,
		InputLabelProps: {
			shrink: shrink ? null : true
		}
	}

	if (meta && meta.touched && meta.error){
		configTextField.error = true
		configTextField.helperText = meta.error
	}

	return (
		<TextField  
			{...configTextField}
		/>
	)
}

export default TextfieldWrapper
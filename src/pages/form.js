import axios from "axios";

import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextfieldWrapper from "../components/formui/textfield/textfield";

const INITIAL_FORM_STATE = {
	email: "",
	picture: "",
}

const FORM_VALIDATION = Yup.object().shape({
	email: Yup.string().email("Please add a valid email").min(5, "Too short email").max(80, "Too long email").required("Please add an email"),
	picture: Yup.mixed(),
});

const FormComponent = () => {

	const submitHandler = ( values ) => {

		const formData = new FormData();
		formData.append("email", values.email)
		formData.append("picture", values.picture, values.picture.name)
		
		axios
			.post(
				"http://localhost:7575/api/user/post",
				formData
			).then((res) => {
				console.log(res)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
	<Formik
		initialValues={{...INITIAL_FORM_STATE}}
		validationSchema={ FORM_VALIDATION }
		onSubmit = { submitHandler }
	>
		{
			({setFieldValue}) => (
				<Form encType="multipart/form-data">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextfieldWrapper
								name="email"
								type="email"
								label="Email"
							/>
						</Grid>
						<Grid item xs={12}>
						<input
							name="picture"
							type="file"
							accept="image/*"
							onChange={ event => {
								setFieldValue(
									"picture",
									event.currentTarget.files[0]
								)
							}}
						/>
						</Grid>
						<Grid item>
							<Button type="submit" variant="contained">
								submit
							</Button>
						</Grid>
					</Grid>
				</Form>
			)
		}
	</Formik>
	)
}

export default FormComponent
import { Box, Button, Container, Grid, Stack, Typography, Zoom } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import TextFieldWrapper from "../components/formui/textfield/textfield";

const imageUrl = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679653564/skydive%20rhino/images/pexels-pixabay-38447_yvzwe5.jpg"

const StyledFooter = styled(Box)(({ theme }) => ({
	minHeight: "60vh",
	background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),url(${imageUrl})`,
	backgroundPosition: "top",
	backgroundAttachment: "fixed",
	backgroundSize: "cover",
	backgroundColor: "rgba(0, 0, 0, 0.86)",
	color: "#fff",
	paddingTop: "30px",
	paddingBottom: "30px",
}));

const StyledContainer = styled(Container)(({ theme }) => ({

}));

const StyledfooterStack = styled(Stack)(({ theme }) => ({
	minHeight: "60vh",
}));

const StyledFooterHeader = styled(Box)(({theme}) => ({
	display: "flex",
	flexDirection: "column",
	alignItems:"left",

}));

const StyledButton = styled(Button)(({theme}) => ({
	paddingTop: "15px",
	paddingBottom: "15px"
}))

const styledIcons={
	fontSize: "40px"
}

const StyledGridContainer = styled(Grid)(({ theme }) => ({
	
}))

const StyledGridItem = styled(Grid)(({ theme }) => ({

}))

const StyledStack = styled(Stack)(({ theme }) => ({
}))

const footerContent = [

	{
		icon: <BsTelephoneFill style={styledIcons}/>,
		title: "Call us",
		tel: [
			"Office landline: +254 700 000 000",
			"Office landline 2: +254 700 000 000",
		],
	},
	{
		icon: <FaMapMarkerAlt style={styledIcons}/>,
		title: "Our location",
		location: "Nairobi City, Kenya"
	},
	{
		icon: <FaEnvelope style={styledIcons}/>,
		title: "Send us an email",
		emails: [
			"emailOne@mail.com",
			"emailTwo@mail.com",
			"emailThree@mail.com",
		],
	},
]

const newsLetterForm = [
	{
		type: "text",
		label: "Name",
		name:"name",
	},
	{
		type: "email",
		label: "Email",
		name: "email",
		required: true
	},
]
const INITIAL_FORM_STATE = {
	name: "",
	email: "",
}

const FORM_VALIDATION = Yup.object().shape({
	name: Yup.string().min(4, 'Minimum characters required is 4'),
	email: Yup.string().email("Please add a valid email").required("Please add an email"),
})


const Footer = () => {

	const submitEmail = () => {

	}

	return (
		<StyledFooter>
			<StyledContainer maxWidth="xl">
				<StyledfooterStack
					direction="column"
					justifyContent="left"
					spacing={3}
					textAlign="left"
				>
					<StyledFooterHeader>
						<Typography variant="h4">
							Join our Newsletter today
						</Typography>
						<Typography variant="subtitle1">
							Subscribe to our newsletter to get the latest news
						</Typography>
					</StyledFooterHeader>

					<Box>
						<Formik
							initialValues={{
								...INITIAL_FORM_STATE
							}}
							validationSchema={ FORM_VALIDATION }
							onSubmit = { submitEmail }
						>
							<Form>
								<Grid container spacing={3}>
									{
										newsLetterForm.map((el, i) => (
											<Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={i}>
												<TextFieldWrapper
													color="primary"
													type={el.type} 
													name={el.name} 
													label={el.label}
													size="medium"
												/>
											</Grid>
										))
									}

									<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
										<StyledButton fullWidth type="submit" variant="contained" color="primary" endIcon={<FaPaperPlane/>}>
											<Typography variant="body1">
												Join now
											</Typography>
										</StyledButton>
									</Grid>
								</Grid>
							</Form>
						</Formik>
					</Box>

					<Box>
						<StyledGridContainer container spacing={3}>
							{
								footerContent.map((el, i) => (
									<StyledGridItem key={i} item xs={12} sm={12} md={12} lg={4} xl={4}>
										<Zoom in timeout={1000 + (i*1000)}>
											<StyledStack
												direction="column"
												justifyContent="center"
												alignItems="left"
												spacing={3}
											>
												{
													el.icon ? el.icon : ""
												}
												<Typography variant="h5">
													{el.title}
												</Typography>
												<Stack
													direction="column"
													alignItems="left"
													spacing={1}
												>
													{
														el.location ? (
															<Typography variant="body1">
																{el.location}
															</Typography>
														): ""
													}
													{
														el.emails ? el.emails.map((item, i) => (
															<Typography variant="body1" key={i}>
																{item}
															</Typography>
														)) : ""
													}
													{
														el.tel ? el.tel.map((item, i) => (
															<Typography variant="body1" key={i}>
																{item}
															</Typography>
														)) : ""
													}

												</Stack>
											</StyledStack>
										</Zoom>
										
									</StyledGridItem>
								))
							}
						</StyledGridContainer>
					</Box>
				</StyledfooterStack>
			</StyledContainer>
		</StyledFooter>
	)
}

export default Footer
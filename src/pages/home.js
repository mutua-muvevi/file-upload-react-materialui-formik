import { Box } from "@mui/material";
import { styled } from "@mui/system";
import FormComponent from "./form";

const StyledHomepage = styled(Box)(({ theme }) => ({
	backgroundColor: "#c7c9c9",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}))

const Homepage = () => {
	return (
		<StyledHomepage>
			<FormComponent/>
		</StyledHomepage>
	)
}

export default Homepage
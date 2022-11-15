import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledAbout = styled(Box)(({ theme }) => ({
	backgroundColor: "grey",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}))

const About = () => {
	return (
		<StyledAbout>
			<div>About</div>
		</StyledAbout>
	)
}

export default About
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledNotFound = styled(Box)(({ theme }) => ({
	backgroundColor: "grey",
	height: "100vh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}))

const NotFound = () => {
	return (
		<StyledNotFound>
			<div>NotFound</div>
		</StyledNotFound>
	)
}

export default NotFound
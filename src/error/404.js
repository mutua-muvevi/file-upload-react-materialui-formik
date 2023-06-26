import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Page from "src/components/Page";

const StyledNotFound = styled(Box)(({ theme }) => ({

}))

const NotFound = () => {
	return (
		<Page title="Page not found">
			<StyledNotFound>
				<div>NotFound</div>
			</StyledNotFound>
		</Page>
	)
}

export default NotFound
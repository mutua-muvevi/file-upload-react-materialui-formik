import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Contact = () => {
	return (
		<Page title="Contact us">
			<StyledWrapper>
				<div>Contact</div>
			</StyledWrapper>
		</Page>
	)
}

export default Contact
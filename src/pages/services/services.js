import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Services = () => {
	return (
		<Page title="Our Services">
			<StyledWrapper>
				<div>Services</div>
			</StyledWrapper>
		</Page>
	)
}

export default Services
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({}));

const Testimonials = () => {
	return (
		<Page title="Testimonials">
			<StyledWrapper>
				<div>Testimonials</div>
			</StyledWrapper>
		</Page>
	);
};

export default Testimonials;

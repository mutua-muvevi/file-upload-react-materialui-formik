import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const Home = () => {
	return (
		<Page title="Homepage">
			<StyledWrapper>
				<div>Homepage</div>
			</StyledWrapper>
		</Page>
	)
}

export default Home
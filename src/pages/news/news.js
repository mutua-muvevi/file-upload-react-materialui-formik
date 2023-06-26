import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Page from "src/components/Page";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const News = () => {
	return (
		<Page title="News Articles">
			<StyledWrapper>
				<div>News Articles</div>
			</StyledWrapper>
		</Page>
	)
}

export default News
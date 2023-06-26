import PropTypes from "prop-types";

import { Box, Link, Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledSocialmediaComponent = styled(Stack)(({ theme }) => ({

}))

const StyledSocialmediaComponentItems = styled(Box)(({ theme }) => ({

}))

const SocialmediaComponent = ({ data }) => {
	return (
		<StyledSocialmediaComponent
			direction="row"
			justifyContent="center"
			alignItems="center"
			spacing={2}
		>
			{
				data &&
				data.map((el, i) => (
					<StyledSocialmediaComponentItems key={i}>
						<Link href={data.link} target="_blank"  style={{cursor: "pointer"}} rel="noreferrer">
							{el.icon}
						</Link>
					</StyledSocialmediaComponentItems>
				))
			}
		</StyledSocialmediaComponent>
	)
}

SocialmediaComponent.propTypes = {
	data: PropTypes.array
}

export default SocialmediaComponent
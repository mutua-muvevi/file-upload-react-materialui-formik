import PropTypes from "prop-types";

import { Box, Divider, Stack } from "@mui/material";
import { styled } from "@mui/system";


const StyledStackComponent = styled(Stack)(({ theme }) => ({

}));

const dividerStyles = {
	backgroundColor: "#919EAB"
}

const StyledStackItems = styled(Box)(({ theme }) => ({

}))

const StackComponent = ({ direction, align, justify, spacing, divider, children }) => {
	return (
		<StyledStackComponent
			direction={direction ? direction : "row"}
			alignItems={align ? align : "center"}
			justifyContent={justify ? justify : "center"}
			spacing={2}
			divider={divider && divider.divider ? <Divider orientation={divider.orientation} flexItem sx={dividerStyles}/> : ""}
		>
			{
				children &&
				children.map((el, i) => (
					<StyledStackItems key={i} >
						{el}
					</StyledStackItems>
				))
			}
		</StyledStackComponent>
	)
}

StackComponent.propTypes = {
	direction: PropTypes.string.isRequired,
	align: PropTypes.string.isRequired,
	justify: PropTypes.string.isRequired,
	spacing: PropTypes.number,
	divider: PropTypes.bool,
	children: PropTypes.array.isRequired,
	driverOrientation: PropTypes.string
}

export default StackComponent
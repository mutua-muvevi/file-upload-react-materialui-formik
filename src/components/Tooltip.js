import PropTypes from "prop-types";

import { Box, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/system";

const StyledTooltipComponent = styled(Tooltip)(({ theme }) => ({

}))

const TooltipComponent = ({ title, icon }) => {
	return (
		<StyledTooltipComponent title={title} arrow>
			<IconButton>
				{icon}
			</IconButton>
		</StyledTooltipComponent>
	)
}

TooltipComponent.propType = {
	title: PropTypes.string,
	icon: PropTypes.node.isRequired
}

export default TooltipComponent
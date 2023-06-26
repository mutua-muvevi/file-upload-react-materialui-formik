import PropTypes from "prop-types";

import { Box, Rating } from "@mui/material";
import { styled } from "@mui/styles";

const StyledRating = styled(Rating)({
	'& .MuiRating-iconFilled': {
		color: '#ff6d75',
	},
	'& .MuiRating-iconHover': {
		color: '#ff3d47',
	}
});

const RatingComponent = ({ readOnly }) => {
	return (
		<StyledRating>
			<StyledRating
				name="customized-color"
				defaultValue={2}
				getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
				precision={0.5}
				readOnly ={readOnly ? true : false}
				//icon={<FavoriteIcon fontSize="inherit" />}
				//emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			/>
		</StyledRating>
	)
}

RatingComponent.propTypes = {
	readOnly: PropTypes.bool
}

export default RatingComponent
import { Stack , Chip } from "@mui/material";
import { styled } from "@mui/system";

const StyledChipStack = styled(Stack)(({ theme }) => ({
	marginTop: "10px"
}))

const StyledChip = styled(Chip)(({ theme }) => ({

}))

const ChipComponent = ({ spacing, direction, chip, config }) => {
	return (
		<StyledChipStack
			spacing={spacing ? spacing : 2}
			direction={direction ? direction : "row"}
		>
			<StyledChip
				label={chip}
				color={config.color}
				icon={config.icon}
			/>
		</StyledChipStack>
	)
}

export default ChipComponent
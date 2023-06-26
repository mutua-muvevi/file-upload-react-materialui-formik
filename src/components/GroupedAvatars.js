import { Avatar, AvatarGroup } from "@mui/material";
import { styled } from "@mui/system";

const StyledGroupedAvatarsComponent = styled(AvatarGroup)(({ theme }) => ({

}))

const GroupedAvatarsComponent = ({ data, sx, max }) => {
	return (
		<StyledGroupedAvatarsComponent max={ max ? max: 4 }>
			{
				data &&
				data.map((el, i) => (
					<Avatar
						key={i}
						src={el.image}
						alt={el.name}
						sx ={sx ? sx : null}
					/>
				))
			}
		</StyledGroupedAvatarsComponent>
	)
}

export default GroupedAvatarsComponent
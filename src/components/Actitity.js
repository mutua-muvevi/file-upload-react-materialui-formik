import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Stack, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from "@mui/lab";

// utils
import { fNumber } from '../utils/formatNumber';
import { fDateTime } from '../utils/formatTime';
// components

// ----------------------------------------------------------------------

const CHART_HEIGHT ="60vh";
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled(CardContent)(({ theme }) => ({
	height: CHART_HEIGHT,
	overflowY: "scroll",
	marginTop: theme.spacing(3),
	'& .apexcharts-canvas svg': { height: CHART_HEIGHT },
	'& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
		overflow: 'visible',
	},
	'& .apexcharts-legend': {
		height: LEGEND_HEIGHT,
		alignContent: 'center',
		position: 'relative !important',
		borderTop: `solid 1px ${theme.palette.divider}`,
		top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
	},
}));

const StyledImageSection = styled(Stack)(({ theme }) => ({

}));

const imageStyles = {
	width: "100px",
	height: "100px",
	borderRadius: "4px"
}

const styledIcon = {
	color: "#3366FF",
	fontSize: "20px"
}


// ----------------------------------------------------------------------



const ActivityTimeline = ({ title, data, ...other}) => {
	const theme = useTheme();

	//sorting data in descending order based on createdAT
	const sortedData = data.sort(
		(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
	);

	const loopColors = [
		theme.palette.primary.main,
		theme.palette.secondary.main,
		theme.palette.success.main,
		theme.palette.warning.main,
	];

	return (
		<Card {...other}>
			<CardHeader title={title}/>

			<ChartWrapperStyle dir="ltr">
				<Timeline
					sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
					}}
				>
					{
						sortedData ?
						sortedData.map((activity, i) => (
							<TimelineItem key={i}>
								<TimelineSeparator >
									<TimelineDot
										style={{
											backgroundColor: loopColors[i % loopColors.length],
										}}
									/>
									<TimelineConnector/>
								</TimelineSeparator>

								<TimelineContent>
									<Typography variant="subtitle2" color="text.primary">
										{activity.title}
									</Typography>
									<Typography variant="body2" color="text.secondary" gutterBottom>
										Date: {fDateTime(activity.createdAt)}
									</Typography>{console.log("Activity", activity)}
									<StyledImageSection direction="row" spacing={2}>
										{
											activity.images ?
											activity.images.map((activity, i) => (
												<img
													src={activity.src}
													alt={activity.alt}
													style={imageStyles}
													key={i}
												/>
											))
											: ""
										}
									</StyledImageSection>
								</TimelineContent>
							</TimelineItem>
						))
						: "Loading"
					}
				</Timeline>
			</ChartWrapperStyle>
		</Card>
	);
}

ActivityTimeline.propTypes = {
	title: PropTypes.string,
	subheader: PropTypes.string,
	chartColors: PropTypes.arrayOf(PropTypes.string),
	chartData: PropTypes.array,
};


export default ActivityTimeline
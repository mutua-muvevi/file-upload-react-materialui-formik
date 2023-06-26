import * as React from 'react';
import PropTypes from "prop-types";

import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineOppositeContent,
	TimelineDot
} from "@mui/lab";


import { Box, Card, Typography } from "@mui/material";
import { BsFillCalendarFill } from "react-icons/bs"
import { styled } from "@mui/system";

const StyledTimelineContentItems = styled(Card)(({ theme }) => ({
	padding: "10px"
}));

const StyledTimelineContentHeader = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "left",
	alignItems: "flex-start",
	textAlign: "left"
}));

const StyledTimelineContentPerson = styled(Box)(({ theme }) => ({

}));

const StyledTimelineContentText = styled(Box)(({ theme }) => ({

}));

const userImageStyles = {
	maxWidth: "50px",
	maxHeight: "50px",
	borderRadius: "50%",
	marginRight: "20px"
}

TimelineComponent.propTypes = {
	child: PropTypes.node,
	icon: PropTypes.node,
	timelineArray: PropTypes.array
}

export default function TimelineComponent({ child, icon, timelineArray }) {
	return (
		<Timeline sx={{m:0,p:0}}>
			{
				timelineArray &&
				timelineArray.map((el, i) => (
					<TimelineItem key={i}>
						<TimelineSeparator sx={{ flex: 0 }} >
							<TimelineDot color="primary">
								<BsFillCalendarFill />
							</TimelineDot>
							<TimelineConnector />
						</TimelineSeparator>

						<TimelineContent sx={{ py: '10px', flex: 11 }}>
						{ el.date }
							<StyledTimelineContentItems>
								{
									el.action ? (
										<StyledTimelineContentHeader>
											{
												el.action.user ? (
													<StyledTimelineContentPerson>
														<img
															src={el.action.user}
															alt={`${el.action.user} teammate`}
															style={userImageStyles}
														/>
													</StyledTimelineContentPerson>
												): null
											}

											<StyledTimelineContentText>
												<Typography variant="subtitle1">
													{ el.action.title ? el.action.title : null }
												</Typography>
												<Typography variant="body2" color="text.secondary" gutterBottom>
													{ el.action.description ? el.action.description : null }
												</Typography>
												{
													el.action.image ? (
														<img
															src={el.action.image}
															alt={`${el.action.title} action`}
															style={{
																maxWidth: "150px",
																maxHeight: "150px"
															}}
														/>
													) : null
												}
											</StyledTimelineContentText>
										</StyledTimelineContentHeader>
									) : (
										<Typography variant="h2">
											Loader
										</Typography>
									)
								}
							</StyledTimelineContentItems>
						</TimelineContent>
					</TimelineItem>
				))
			}
		</Timeline>
	);
}

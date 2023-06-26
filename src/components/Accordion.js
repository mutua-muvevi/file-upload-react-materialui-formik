import PropTypes from "prop-types";

import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from '@mui/material';
import { styled } from "@mui/system";

import { MdExpandMore } from "react-icons/md";

const StyledAccordionComponent = styled(Box)(({ theme }) => ({
	width: "100%"
}))

const AccordionComponent = ({ accordions }) => {
  return (
		<StyledAccordionComponent>
			{
				accordions &&
				accordions.map((el, i) => (
					<Accordion key={i}>
						<AccordionSummary
							expandIcon={<MdExpandMore />}
							aria-controls={`${el.title} Accordion`}
							id={`${el.title} Accordion`}
						>
							<Typography>{el.title}</Typography>
						</AccordionSummary>

						<AccordionDetails>
							{el.child}
						</AccordionDetails>
					</Accordion>
				))
			}

		</StyledAccordionComponent>
  );
}

AccordionComponent.propTypes = {
	accordions: PropTypes.array.isRequired
}

export default AccordionComponent
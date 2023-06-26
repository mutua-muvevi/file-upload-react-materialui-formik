import React from 'react';
import PropTypes from "prop-types";

import { Button, Card, CardHeader, Pagination } from "@mui/material";
import { styled } from "@mui/system";

import {
	DataGrid,
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector,
  } from '@mui/x-data-grid';

const StyledDataGridContainer = styled(Card)(({theme}) => ({
	borderRadius: theme.shape.default
}))

const StyledDataGridHeader = styled(CardHeader)(({theme}) => ({
	backgroundColor: theme.palette.primary.main,
	color: "#fff",
	fontFamily: "'Rubik', sans-serif",
	padding: 15
	
}))

const StyledDataGrid = styled(DataGrid)(({theme}) =>({
	border: "none",
	backgroundColor: theme.palette.background.paper,
	width: "100%",
	borderRadius: theme.shape.default,
	"& .MuiDataGrid-columnHeaders": {
		backgroundColor: theme.palette.primary.light,
		color: "#fff",
		fontSize: 18,
		paddingTop: 2,
		paddingBottom: 2,
	},
	"& .MuiDataGrid-virtualScrollerRenderZone": {
		"& .MuiDataGrid-row": {
			"&:nth-of-type(2n)": { backgroundColor: theme.palette.background.default }
		}
	}
}))

function CustomPagination() {
	const apiRef = useGridApiContext();
	const page = useGridSelector(apiRef, gridPageSelector);
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);

	return (
		<Pagination
			color="primary"
			count={pageCount}
			page={page + 1}
			onChange={(event, value) => apiRef.current.setPage(value - 1)}
		/>
	);
}

const DatagridComponent = ({ data, title, page }) => {
	let column = []
	const singleRow = data[0]

	const newcolumns = (singleRow) => {
		Object.keys(singleRow).map((col, index) => (
			column.push({
				field: col,
				headerName: col,
				minWidth: 150,
				flex:1
			})
		))
	}
	newcolumns(singleRow)

	return (
		<>
			<StyledDataGridContainer>
				<StyledDataGridHeader title={title} />
				
				<StyledDataGrid
					rows={data}
					columns={column}
					pagination
					autoPageSize
					autoHeight
					getRowId={row => row.id}
					pageSize={page ? page : 10}
					components={{
						Pagination: CustomPagination
					}}
				/>
			</StyledDataGridContainer>
		</>
	)
}

DatagridComponent.propTypes = {
	data: PropTypes.array,
	title: PropTypes.string,
	page: PropTypes.number,
}

export default DatagridComponent
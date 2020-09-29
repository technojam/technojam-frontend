import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import RefreshIcon from '@material-ui/icons/Refresh';
import EventContext from '../../../context/event/eventContext';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import GetAppIcon from '@material-ui/icons/GetApp';
import { backendUrl } from '../../../context/types';
import axios from 'axios';
import { CSVLink, CSVDownload } from 'react-csv';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { FormGroup } from '@material-ui/core';



function createData(eid, name, venue, timing, date) {
	return { eid, name, venue, timing, date };
}

let rows = [];

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function stableSort(array, cmp) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = cmp(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
	return order === 'desc'
		? (a, b) => desc(a, b, orderBy)
		: (a, b) => -desc(a, b, orderBy);
}

let onRefreshClicked;
let onDeleteClicked;

const headCells = [
	{
		id: 'name',
		numeric: false,
		disablePadding: true,
		label: 'Name'
	},
	{
		id: 'calories',
		numeric: true,
		disablePadding: false,
		label: 'Event Id'
	},
	{ id: 'fat', numeric: false, disablePadding: false, label: 'Venue' },
	{ id: 'carbs', numeric: true, disablePadding: false, label: 'Timing' },
	{ id: 'protein', numeric: false, disablePadding: false, label: 'Description' }
];

function EnhancedTableHead(props) {
	const {
		classes,
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort
	} = props;
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell>Name</TableCell>
				<TableCell>Venue</TableCell>
				<TableCell>Timing</TableCell>
				<TableCell>Date</TableCell>
				<TableCell>Edit</TableCell>
				<TableCell>Delete</TableCell>
				<TableCell>Generate</TableCell>
				<TableCell>Download</TableCell>
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1)
	},
	highlight:
		theme.palette.type === 'light'
			? {
				color: theme.palette.secondary.main,
				backgroundColor: lighten(theme.palette.secondary.light, 0.85)
			}
			: {
				color: theme.palette.text.primary,
				backgroundColor: theme.palette.secondary.dark
			},
	spacer: {
		flex: '1 1 100%'
	},
	actions: {
		color: theme.palette.text.secondary
	},
	title: {
		flex: '0 0 auto'
	}
}));

const EnhancedTableToolbar = props => {
	const classes = useToolbarStyles();
	const { numSelected } = props;

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0
			})}
		>
			<div className={classes.title}>
				{numSelected > 0 ? (
					<Typography color='inherit' variant='subtitle1'>
						{numSelected} selected
					</Typography>
				) : (
						<Typography variant='h6' id='tableTitle'>
							Events
						</Typography>
					)}
			</div>
			<div className={classes.spacer} />
			<div className={classes.actions}>
				{numSelected > 0 ? (
					<Tooltip title='Delete'>
						<IconButton aria-label='delete' onClick={onDeleteClicked}>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				) : (
						<Tooltip title='Refresh'>
							<IconButton aria-label='filter list' onClick={onRefreshClicked}>
								<RefreshIcon />
							</IconButton>
						</Tooltip>
					)}
			</div>
		</Toolbar>
	);
};

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired
};
const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3)
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2)
	},
	table: {
		minWidth: 750
	},
	tableWrapper: {
		overflowX: 'auto'
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1
	}
}));
const style = {
	marginTop: '112px',
	form: {
		padding: '20px',
		width: '100%',
		marginLeft: 'auto',
		marginRight: 'auto',
		text: {
			appearance: 'none',
			width: '100%',
			padding: '5px',
			height: '35px',
			borderRadius: '5px',
			outline: 'none',
			border: 'none',
			background: '#e8ebed',
			color: '#576366',
			fontSize: '14px'
		}
	}
};

const useStylesModal = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		// border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export default function EventTable() {
	const classes = useStyles();
	const eventContext = useContext(EventContext);
	const { events, loadEvents, deleteEvent } = eventContext;

	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [attendeeData, setAttendeeData] = React.useState([]);
	const classesModal = useStylesModal();
	const [open, setOpen] = React.useState(false);





	const handleRequestSort = (event, property) => {
		const isDesc = orderBy === property && order === 'desc';
		setOrder(isDesc ? 'asc' : 'desc');
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const handleChangeDense = event => {
		setDense(event.target.checked);
	};

	const isSelected = name => selected.indexOf(name) !== -1;

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	onRefreshClicked = () => {
		console.log('refreshing list');
		loadEvents();
	};

	onDeleteClicked = () => {
		console.log('cids:', selected);
		// deleteContact(selected);
	};
	const editEvent = () => {
		handleOpen();
		console.log("Edit is now working")
	}

	const downloadAttendees = (eventId) => {
		console.log("genrating data")
		alert("Do you want to generate attendee data?")
		var event_data = []
		axios.get(backendUrl + '/api/events/participants/' + eventId)
			.then(res => {
				setAttendeeData(res.data);
			})
		console.log("genrated data")
		alert("your data is now ready you can download it from download button");
	}


	const setContact = () => {
		rows = [];
		events.map(c => {
			let date = new Date(c.date).getTime();
			rows.push(
				createData(
					c.eid,
					c.name,
					c.venue,
					c.timing,
					c.date,
				)
			);
		});
	};
	//Modal
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (<>
		<div className={classes.root}>
			{events.length > 0 && setContact()}
			<Paper className={classes.paper}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<div className={classes.tableWrapper}>
					<Table
						className={classes.table}
						aria-labelledby='tableTitle'
						size={dense ? 'small' : 'medium'}
					>
						<EnhancedTableHead
							classes={classes}
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{stableSort(rows, getSorting(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									console.log(row);
									const isItemSelected = isSelected(row.cid);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											role='checkbox'
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={index}
											selected={isItemSelected}
										>
											<TableCell>{row.name}</TableCell>
											<TableCell >{row.venue}</TableCell>
											<TableCell >{row.timing}</TableCell>
											<TableCell >{row.date}</TableCell>
											{/* <TableCell align='right'>{row.protein}</TableCell> */}
											<TableCell padding='checkbox'>
												<IconButton tooltip='Delete Event'>
													<EditIcon onClick={() => editEvent(row.eid)} />
													<Modal
														aria-labelledby="transition-modal-title"
														aria-describedby="transition-modal-description"
														className={classesModal.modal}
														open={open}
														onClose={handleClose}
														closeAfterTransition
														BackdropComponent={Backdrop}
														BackdropProps={{
															timeout: 500,
														}}>
														<Fade in={open}>
															<div className={classesModal.paper}>
																<h2 id="transition-modal-title">Edit Event</h2>
																<div style={style.form}>
							<form autoComplete='on' >
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Event Name</label>

											<input
												style={style.form.text}
												type='text'
												name='name'
												
											/>
										</FormGroup>
										<br></br>
									</Grid>			
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Date</label>

											<input
												style={style.form.text}
												type='date'
												name='date'
												
											/>
											<br></br>
										</FormGroup>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Time</label>

											<input
												style={style.form.text}
												type='time'
												name='timing'
												defaultValue='07:30'
												
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Venue</label>

											<input
												style={style.form.text}
												type='text'
												name='venue'
										
											/>
										</FormGroup>
										<br></br>
									</Grid>

									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Event Type</label>
											<select
												style={style.form.text}
												name='type'
											>
												<option value='Single'>Single</option>
												<option value='Team'>Team</option>
											</select>
											<br></br>
										</FormGroup>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Team Size</label>

											<input
												style={style.form.text}
												type='text'
												name='teamSize'
												defaultValue='0'
											
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Capacity</label>

											<input
												style={style.form.text}
												type='number'
												name='capacity'
												defaultValue='0'
												
											/>
										</FormGroup>
										<br></br>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>IsPaid</label>

											<select
												style={style.form.text}
												name='isPaid'
												
											>
												<option value='No'>No</option>
												<option value='Yes'>Yes</option>
											</select>
										</FormGroup>
										<br></br>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Amount</label>

											<input
												style={style.form.text}
												type='number'
												name='amount'
												defaultValue='0'
											
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Resources (Link)</label>

											<input
												style={style.form.text}
												type='text'
												name='resources'
												defaultValue='0'
											
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								<FormGroup>
									<label>Short Description</label>

									<div
										style={{
											backgroundColor: '#e8ebed',
											borderRadius: '5px',
											overflowX: 'hidden',
											maxWidth: '100%'
										}}
									>
										
											<input
												style={style.form.text}
												type='textarea'
												name='description'
												
											></input>
										
									</div>
								</FormGroup>

								<br></br>
								<br />
								<Typography className='align_center'>
									<Button
										type="submit"
										variant='contained'
										style={{ backgroundColor: '#f50057', color: 'white' }}
									>
												Submit
											</Button>
										</Typography>
										</form>
									</div>
										</div>
											</Fade>
												</Modal>
												</IconButton>
											</TableCell>
											<TableCell padding='checkbox'>
												<IconButton tooltip='Delete Event'>
													<DeleteIcon
														onClick={() => deleteEvent(row.eid)}
													/>
												</IconButton>
											</TableCell>
											<TableCell padding='checkbox'>
												<IconButton tooltip='Data Generate Event'>
													<ListIcon
														onClick={() => downloadAttendees(row.eid)}
													/>
												</IconButton>
											</TableCell>
											<TableCell padding='checkbox'>
												<IconButton tooltip='Download CSV Event'>
													<CSVLink data={attendeeData} ><GetAppIcon /></CSVLink>
												</IconButton>
											</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component='div'
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						'aria-label': 'previous page'
					}}
					nextIconButtonProps={{
						'aria-label': 'next page'
					}}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
			<FormControlLabel
				control={<Switch checked={dense} onChange={handleChangeDense} />}
				label='Dense padding'
			/>
		</div>
	</>
	);
}

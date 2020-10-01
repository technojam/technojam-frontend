import React, { useState,useContext } from 'react';
import constants from '../../../util/constants';
import EventContext from '../../../context/event/eventContext';
//material ui component


import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
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
import PropTypes from 'prop-types';
import { FormGroup } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import RefreshIcon from '@material-ui/icons/Refresh';
import clsx from 'clsx';





import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';



function createData(id, name, batch, email, linkedin, github,image) {
	return { id, name, batch, email, linkedin, github,image };
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
		label: 'User id'
	},
	{ id: 'fat', numeric: false, disablePadding: false, label: 'email' },
	{ id: 'carbs', numeric: true, disablePadding: false, label: 'batch' },
	{ id: 'protein', numeric: false, disablePadding: false, label: 'linkedin' },
	{ id: 'weed', numeric: false, disablePadding: false, label: 'github' },
	{ id: 'myth', numeric: false, disablePadding: false, label: 'image' }
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
				<TableCell>Batch</TableCell>
				<TableCell>Email</TableCell>
				<TableCell>LinkedIn</TableCell>
				<TableCell>GitHub</TableCell>
				<TableCell>Image</TableCell>
				<TableCell>Edit</TableCell>
				<TableCell>Delete</TableCell>
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
							Users
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





	const handleRequestSort = (users, property) => {
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

	const setContact = () => {
		rows = [];
		events.map(c => {
			let date = new Date(c.date).getTime();
			rows.push(
				createData(
					c.uid,
					c.name,
					c.venue,
					c.timing,  
					c.date,
				)
			);
		});
	};

	onDeleteClicked = () => {
		console.log('cids:', selected);
		// deleteContact(selected);
	};
	const editUser = () => {
		handleOpen();
		console.log("Edit is now working")
	}
	//Modal
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return(<>
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
											<TableCell>technoTest</TableCell>
											<TableCell >2019-2023</TableCell>
											<TableCell >technotest12.phy@gmail.com</TableCell>
											<TableCell >https://LinkedInUrl</TableCell>
											<TableCell >https://GithubUrl</TableCell>
											<TableCell >ProfileUrl</TableCell>
											<TableCell padding='checkbox'>
												<IconButton tooltip='Delete Event'>
													<EditIcon onClick={() => editUser()} />
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
											<h2 id="transition-modal-title">Edit User</h2>
								<div style={style.form}>
							<form autoComplete='on' >
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Name</label>
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
											<label>Batch</label>

											<input
												style={style.form.text}
												type='text'
												name='date'	
											/>
											<br></br>
										</FormGroup>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Email</label>

											<input
												style={style.form.text}
												type='email'
												name='timing'		
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								<Grid container spacing={3}>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>LinkedIn Profile</label>
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
											<label>GitHub Profile</label>
											<input
												style={style.form.text}
												type='text'
												name='venue'
											/>
											<br></br>
										</FormGroup>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Profile</label>
											<input
												style={style.form.text}
												type='text'
												name='teamSize'
											/>
										</FormGroup>
									</Grid>
									<Grid item xs={12} md={4}>
										<FormGroup>
											<label>Year</label>
											<input
												style={style.form.text}
												type='number'
												name='teamSize'
											/>
										</FormGroup>
										<br></br>
									</Grid>
								</Grid>
								
								<br></br>
								<br />
								<Typography className='align_center'>
									<Button
										type="submit"
										variant='contained'
										style={{ backgroundColor: '#f50057', color: 'white' }}>
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






}//end

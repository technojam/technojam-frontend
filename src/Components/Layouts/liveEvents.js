import React, { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';

const EventLabel = props => {
	return (
		<div style={nameStyle} onClick={props.toggleOpen}>
			<span>Live Events</span>
			<span style={countStyle}>{props.dataFetched ? props.count : null}</span>
		</div>
	);
};

const EventContent = props => {
	return (
		<div
			onTransitionEnd={props.toggleShowlist}
			style={{
				width: props.open ? '250px' : '0',
				overflowY: props.list.length ? 'scroll' : 'hidden',
				...eventContentStyle
			}}
		>
			{props.open &&
				props.list &&
				props.showlist &&
				props.list.map(d => (
					<li style={eventListsStyle}>
						<div style={{ display: 'inline-block', width: '70%' }}>
							<a
								href='#'
								style={{
									margin: '10px 0',
									color: '#2196F3',
									textDecoration: 'none'
								}}
							>
								{d.title}
							</a>
							<p style={{font:'10',Margin:'0'}}>{d.date}</p>
							<p style={{font:'10',Margin:'0'}}>{d.venue}</p>
						</div>
					</li>
				))}
			{!props.dataFetched ? (
				<MoonLoader
					sizeUnit={'px'}
					size={50}
					color={'#123abc'}
					loading={!props.dataFetched}
				/>
			) : null}
		</div>
	);
};

function LiveEvents() {
	const [open, setOpen] = useState(false);
	const [showList, setShowList] = useState(false);
	const [dataFetched, setDataFetched] = useState(false);
	const [list, setList] = useState([]);

	const event_data=[
		{
			id: 1,
			title: 'Dextrix 2.0',
			feedback: '#',
			date: '233 November, 2019',
			venue: ' GU',
			todo: '#',
			description:
				"24 hours hackthon for all."
		},
	];
	useEffect(()=>{
		setTimeout(()=>{
			setList(event_data);
			setDataFetched(true);
		})
	});

	const toggleOpen=()=>{
		setOpen(!open)
	}

	const toggleShowList=()=>{
		setShowList(!showList);
	}

	return (
		<div style={liveEventStyle}>
			<EventLabel
				dataFetched={dataFetched}
				toggleOpen={toggleOpen}
				count={list.length}
			/>
			<EventContent
				dataFetched={dataFetched}
				toggleShowlist={toggleShowList}
				showlist={showList}
				open={open}
				list={list}
			/>
		</div>
	);
}

export default LiveEvents;









const liveEventStyle = {
	position: 'fixed',
	right: '0',
	top: '100px',
	display: 'flex',
	zIndex: '999'
};

const nameStyle = {
	marginTop: '62px',
	display: 'inline-block',
	writingMode: 'vertical-rl',
	background: '#23292e',
	color: '#fff',
	padding: '10px',
	borderRadius: '3px',
	cursor: 'pointer',
	Height: '82px',
	width: '40px'
};

const countStyle = {
	marginTop: '62px',
	position: 'absolute',
	top: '-10px',
	left: '-15px',
	background: '#e53935',
	width: '20px',
	height: '20px',
	textAlign: 'center',
	writingMode: 'horizontal-tb',
	borderRadius: '3px',
	boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
};

const eventContentStyle = {
	marginTop: '62px',
	display: 'inline-block',
	float: 'right',
	transition: 'width 1s',
	border: '1px solid rgb(238, 238, 238)',
	background: '#fff',
	alignItems: 'center',
	textAlign: 'center',
	maxHeight: '232px',
	overflowX: 'hidden'
};

const eventListsStyle = {
	listStyleType: 'none',
	background: '#fff',
	fontSize: '14px',
	borderBottom: '1px solid #EEEEEE',
	color: 'rgba(0, 0, 0, 0.54)',
	display: 'flex',
	padding: '0.5em'
};
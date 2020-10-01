import React, { useEffect, useState, useContext } from 'react';
import { MoonLoader } from 'react-spinners';

import EventContext from '../../context/event/eventContext';


function LiveEvents() {
	const [open, setOpen] = useState(false);
	const [showList, setShowList] = useState(false);
	const [dataFetched, setDataFetched] = useState(false);
	const [list, setList] = useState([]);



	const eventContext = useContext(EventContext);
	const {events} = eventContext;


	useEffect(()=>{
		setTimeout(()=>{
			setList(events.filter(e => new Date(e.date) >= new Date()));
			setDataFetched(true);
		},2000)
	});

	useEffect(()=>{
		setDataFetched(false);
		setTimeout(()=>{
			setList(events.filter(e => new Date(e.date) >= new Date()));
			setDataFetched(true);
		},2000)
	},[events])

	const toggleOpen=()=>{
		setOpen(!open)
	}

	const toggleShowList=()=>{
		setShowList(!showList);
	}

	return (
		<div 
			style={{
				transform: open ? 'translate(0px)' : 'translate(250px)', 
				...liveEventStyle
			}}
		>
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





const EventLabel = props => {
	return (
		<div 
			style={{
				//transform: props.open ? 'translateX(-350px)' : 'translateX(250px)',
				...nameStyle
			}} 
			onClick={props.toggleOpen}
		>
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
				overflowY: props.list.length ? 'scroll' : 'hidden',
				...eventContentStyle
			}}
		>
			{!props.list.length ? 
		        <div style={noEventContentStyle}>No events now come back soon</div>
		    : 
			props.open &&
				props.list &&
				props.showlist &&
				props.list.map(d => (
					<li style={eventListsStyle}>
						<div style={{ display: 'inline-block', width: '70%' }}>
							<a
								href='/events'
								style={{
									margin: '10px 0',
									color: '#2196F3',
									textDecoration: 'none'
								}}
							>
								{d.name}
							</a>
							<p style={{font:'10',Margin:'0'}}>{d.date}
								<br>
								</br>
								{d.venue}
							</p>
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






const liveEventStyle = {
	position: 'absolute',
	right: '0px',
	top: '100px',
	transition: 'transform 1s',
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
	width: '40px',
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
	border: '1px solid rgb(238, 238, 238)',
	background: '#fff',
	width: '250px',
	alignItems: 'center',
	textAlign: 'center',
	maxHeight: '232px',
	overflowX: 'hidden',
};

const noEventContentStyle = {
	display: 'inline-block',
	fontSize: '14px',
	fontWeight: 'bold'
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
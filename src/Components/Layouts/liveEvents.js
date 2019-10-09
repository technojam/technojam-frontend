import React from 'react';
import { css } from '@emotion/core';
import { MoonLoader } from 'react-spinners';


const override = css`
display: flex;
margin: 8px auto;
border-color: red;`;

const defaultEventsList = [
    {
        id: 1,
        title: 'Ideathon',
        feedback: '#',
        date: '26 August, 2019',
        venue: ' GCET Auditorium',
        todo: '#',
        description: "Conducted Ideathon in Galgotias's Induction Program for freshers. almost 300 students took part."
     },

     {
        id: 2,
        title: 'Dextrix 1.0',
        feedback: '#',
        date: 'May 12, 2018',
        venue: ' GU campus',
        todo: '#',
        description: 'Technojam conducted 12 hours hackathon in delhi region at Galgotias university. it is recognized Speaker NASA'
     },
    {
        id: 1,
        title: 'WebDev Day 1',
        register: '#',
        date: '26 August, 2019',
        venue: ' GU C Block room no 211',
        Todo: '#',
        description: 'Learn to Develop website from scratch on MERN stack.'
     },

     {
        id: 2,
        title: 'Dextrix 2.0',
        register: '#',
        date: 'May 12, 2018',
        venue: ' GU campus',
        Todo: '#',
        description: 'Technojam conducted 12 hours hackthon in delhi region at galgotias university. it is recognized Speaker NASA'
     },
     {
        id: 1,
        title: 'WebDev Day 1',
        register: '#',
        date: '26 August, 2019',
        venue: ' GU C Block room no 211',
        Todo: '#',
        description: 'Learn to Develop website from scratch on MERN stack.'
     },

     {
        id: 2,
        title: 'Dextrix 2.0',
        register: '#',
        date: 'May 12, 2018',
        venue: ' GU campus',
        Todo: '#',
        description: 'Technojam conducted 12 hours hackthon in delhi region at galgotias university. it is recognized Speaker NASA'
     }
]

const liveEventStyle = {
    position:'fixed',
    right:'0',
    top:'100px',
    display:'flex',
    zIndex:'999'  
}

export default class liveEvents extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open:false,
            list:[],
            showList:false,
            dataFetched:false
        }
        this.toggleOpen = this.toggleOpen.bind(this)
        this.toggleShowList = this.toggleShowList.bind(this)
    }

    componentDidMount(){
        //fetch the event list data from server and set to response to list array

        //the below code ,is simulating a fetching data from server , remove it in actual code
        setTimeout(() =>{
            this.setState({
                ...this.state,
                list: defaultEventsList, //using hardcoded values,
                dataFetched:true
            })
        },5000)
    }

    toggleOpen(){
        this.setState({
            ...this.state,
            open:!this.state.open,
        })
    }

    toggleShowList = () =>{
        this.setState({
            ...this.state,
            showList:!this.state.showList
        })
    }

    render(){
        return(
            <div style={liveEventStyle}>
                <EventLabel dataFetched={this.state.dataFetched} toggleOpen={this.toggleOpen} count={this.state.list.length} />
                <EventContent dataFetched={this.state.dataFetched} toggleShowlist={this.toggleShowList} showlist={this.state.showList} open={this.state.open} list={this.state.list}/>
            </div>
        )
    }
}


const nameStyle = {
    display:'inline-block',
    writingMode:'vertical-rl',
    background: '#673ab7',
    color: '#fff',
    padding:'0.15em',
    borderRadius:'3px',
    cursor:'pointer',
    maxHeight:'82px'
}

const countStyle= {
    position:'absolute',
    top:'-10px',
    left:'-15px',
    background:'#e53935',
    width:'20px',
    height:'20px',
    textAlign:'center',
    writingMode:'horizontal-tb',
    borderRadius:'3px'
}

const EventLabel = (props) => {
    return (
        <div style={nameStyle} onClick={props.toggleOpen}>
            <span>Live Events</span>
            <span style={countStyle}>
            {
                props.dataFetched
                ?
                props.count
                :
                null                
            }
            </span>
        </div>       
    )
}


const eventContentStyle = {
    display:'inline-block',
    float:'right',
    transition:'width 1s',
    border:'1px solid rgb(238, 238, 238)',
    background:'#fff',
    alignItems:'center',
    textAlign:'center',
    maxHeight:'232px',
    overflowX:'hidden'
}

const eventListsStyle = {
    listStyleType:'none',
    background:'#fff',
    fontSize:'14px',
    borderBottom:'1px solid #EEEEEE',
    color:'rgba(0, 0, 0, 0.54)',
    display:'flex',
    padding:'0.5em'
}

const font10Margin0 = {
    fontSize:'10px',
    margin:'0'
}


const EventContent = (props) => {
    return(
        <div onTransitionEnd={props.toggleShowlist} style={{width: props.open ?'250px':'0',overflowY:props.list.length ?'scroll':'hidden',...eventContentStyle}}>
           {
               props.open && props.list && props.showlist && props.list.map(d => 
                   (
                       <li style={eventListsStyle}>
                           <div style={{display:'inline-block',width:'30%'}}>
                               {/* images  to be added */}
                                <img style={{height:'50px',width:'50px'}} alt='image'></img>
                           </div>
                           <div style={{display:'inline-block',width:'70%'}}>
                                <a href="#" style={{margin:'10px 0',color:'#2196F3',textDecoration:'none'}}>{d.title}</a>
                                <p style={font10Margin0}>{d.date}</p>
                                <p style={font10Margin0}>{d.venue}</p>
                           </div>
                       </li>
                   )
               )
           }
           {
               !props.dataFetched
               ?
               <MoonLoader
                    css={override}
                    sizeUnit={"px"}
                    size={50}
                    color={'#123abc'}
                    loading={!props.dataFetched}
                />
                :
                null
           }
        </div>
    )
}
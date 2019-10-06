import React from 'react';
import {
    Container,
    Typography,
    Grid, Paper, Table, TableRow, TableBody, TableCell
} from "@material-ui/core";
import {ALUMNI, TEAM_MEMBERS} from '../../util/constants';

const style = {
    container: {
        flexGrow: 1,
        marginBottom: 20,
        minHeight: "580px",
        marginTop: "10%"
    },
    img: {
        width: "180px",
        borderRadius: "50%"
    },
    details: {
        width: '100%',
        overflowX: 'auto',
    }
};

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProfile: undefined
        }
    }

    componentDidMount() {
        const profileID = this.props.match.params.id;
        let currentProfile = TEAM_MEMBERS.filter(member => member.id.toString() === profileID)[0];
        if (!currentProfile) {
            currentProfile = ALUMNI.filter(member => member.id.toString() === profileID)[0];
        }
        this.setState({currentProfile: currentProfile});
    }

    render() {
        if (!this.state.currentProfile) {
            return (<div>No Data Found...</div>);
        } else {
            return (
                <div style={style.container}>
                    <Container fixed>
                        <Grid container spacing={10}>
                            <Grid item xs={2}>
                                <img src={this.state.currentProfile.Image} style={style.img}/>
                            </Grid>
                            <Grid item xs={10} style={{marginTop: "4%"}}>
                                <Typography variant="h2" style={style.name}>
                                    {this.state.currentProfile.Name}
                                </Typography>
                                <Typography style={style.name}>
                                    {this.state.currentProfile.email}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2}/>
                            <Grid item xs={10}>
                                <Paper style={style.details}>
                                    <Table style={{minWidth: 650}}>
                                        <TableBody>
                                            {this.state.currentProfile.details.map(detail => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{detail.title}</TableCell>
                                                    <TableCell align="right">{detail.value}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            );
        }
    }
}

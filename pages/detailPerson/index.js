import React from 'react'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchDetails } from '../../services/swapi'

export default class DetailsPerson extends React.Component {

    static async getInitialProps({ query }) {
        const results = await fetchDetails(query.p)


        return {
            results
        }
    }
    render() {
        const CustomTableCell = withStyles(theme => ({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
            },
        }))(TableCell);
        return (
            <Paper>
                <Table >
                    <TableHead>

                        <TableRow>
                            <CustomTableCell> name </CustomTableCell>
                            <CustomTableCell> height </CustomTableCell>
                            <CustomTableCell> mass </CustomTableCell>
                            <CustomTableCell> hair color </CustomTableCell>
                            <CustomTableCell> skin color </CustomTableCell>
                            <CustomTableCell> eye_color </CustomTableCell>
                            <CustomTableCell> birth_year </CustomTableCell>
                            <CustomTableCell> gender </CustomTableCell>
                            <CustomTableCell> homeworld </CustomTableCell>
                            <CustomTableCell>films </CustomTableCell>
                            <CustomTableCell> species</CustomTableCell>
                            <CustomTableCell> vehicles </CustomTableCell>
                            <CustomTableCell> starships </CustomTableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>

                        <TableRow >
                            <CustomTableCell> {this.props.results.name} </CustomTableCell>
                            <CustomTableCell> {this.props.results.height} </CustomTableCell>
                            <CustomTableCell> {this.props.results.mass} </CustomTableCell>
                            <CustomTableCell> {this.props.results.hair_color}  </CustomTableCell>
                            <CustomTableCell> {this.props.results.skin_color} </CustomTableCell>
                            <CustomTableCell> {this.props.results.eye_color} </CustomTableCell>
                            <CustomTableCell> {this.props.results.birth_year} </CustomTableCell>
                            <CustomTableCell> {this.props.results.gender} </CustomTableCell>
                            <CustomTableCell> {this.props.results.homeworld} </CustomTableCell>
                            <CustomTableCell> {this.props.results.films} </CustomTableCell>
                            <CustomTableCell> {this.props.results.species} </CustomTableCell>
                            <CustomTableCell> {this.props.results.vehicles} </CustomTableCell>
                            <CustomTableCell> {this.props.results.starships} </CustomTableCell>


                        </TableRow>

                    </TableBody>



                </Table>
            </Paper>
        )
    }
}



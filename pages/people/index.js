import React from 'react'
import { fetchPeople } from '../../services/swapi'
import Router from 'next/router'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default class People extends React.Component {


    state = {
        results: []
    }

    componentDidMount() {
        fetchPeople()
            .then(res => this.setState({ results: res.results }))

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
                            <CustomTableCell>name</CustomTableCell>
                            <CustomTableCell >height</CustomTableCell>
                            <CustomTableCell >mass</CustomTableCell>
                            <CustomTableCell >hair_color</CustomTableCell>
                            <CustomTableCell >skin_color</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.results.map((item) =>
                            <TableRow onClick={() => Router.push({
                                pathname: '/detailPerson',
                                query: { p: item.url }

                            })} key={item.url}>

                                <CustomTableCell component="th" scope="row">
                                    {item.name}
                                </CustomTableCell>
                                <CustomTableCell >{item.height}</CustomTableCell>
                                <CustomTableCell >{item.mass}</CustomTableCell>
                                <CustomTableCell >{item.hair_color}</CustomTableCell>
                                <CustomTableCell >{item.skin_color}</CustomTableCell>
                            </TableRow>

                        )
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}


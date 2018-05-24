import Link from 'next/link'
import { styled } from 'styled-components'
import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';



export default class Index extends React.Component {

    render() {
        const styles = {
            root: {
                flexGrow: 1,
            },
        };
        return (
            <div >
                <AppBar color="default" >
                    <Toolbar direction="row" justify="space-around" alignItems="center">
                        <Link href="/people">
                            <Button variant="raised" color="primary">  List People Page</Button>
                        </Link>

                        <Typography variant="title" color="inherit"  >
                            Hello Fomaco Company
                        </Typography>
                    </Toolbar>
                </AppBar>


            </div>
        )
    }
}

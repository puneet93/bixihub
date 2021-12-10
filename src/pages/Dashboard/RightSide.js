import React from 'react';
import {
makeStyles,
Grid
} from "@material-ui/core";

// assets
import FullActivity from './Json/RightJson';
import Chat from './Chat';
import Information from './RightInfo';

    const useStyles = makeStyles(() => ({
        mb20:{
            marginBottom: '20px',
            '@media (max-width: 640px)':{
                marginBottom: '10px'
            }
        }
    }));


    const PageFormFlow3 = (props) =>{
        const classes = useStyles();
        return( 
            <>           
                <Grid item xs={12} sm={12} md={6} className={classes.mb20}>
                    {FullActivity.filter(item => parseInt(item.id) === parseInt(props.dataID)).map((item) => (
                        <Chat key={item.id} Message={item.message} />
                    ))}
                </Grid>

                {FullActivity.filter(item => parseInt(item.id) === parseInt(props.dataID)).map((item) => (
                    <Information key={item.id} info={item} />
                ))}
                </>
        )
    }

    export default PageFormFlow3;
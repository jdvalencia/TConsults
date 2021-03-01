import { Card, makeStyles } from '@material-ui/core'
import React, { FunctionComponent } from 'react'
import './MissionComponent.css'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        marginBottom: '1em'
    }
})


export  const MissionComponent: FunctionComponent<any> = () => {

    const classes = useStyles();
    // const profile = getProfile();

    return(
        <div className="main-mission">
            <div className="container">
                <div className="home">
                <Card className={classes.root}>
                          <iframe title="Tia's Instagram" src="https://embedsocial.com/facebook_album/pro_hashtag/de2639f6bbc42c49afa5d9fdbbbe9a92d1c5df5b" width="900px" height="650px" frameBorder="0" marginHeight={0} marginWidth={0} style={{marginTop:'2em'}}></iframe>
                    </Card>
  
                </div>
            </div>
        </div>

    )
}
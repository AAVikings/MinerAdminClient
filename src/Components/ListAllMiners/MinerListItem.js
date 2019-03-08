import React, { Component } from 'react'
import { compose } from 'react-apollo'
import { Link, withRouter } from "react-router-dom"
import {
  Typography, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary,
  Divider
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class MinerListItem extends Component {

  render () {
    const { classes } = this.props
    const miner = this.props.miner
    return (
      <React.Fragment>
      <ExpansionPanel className={classes.root}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.heading}>
            <Typography className={classes.heading}>KeyVault</Typography>
          </div>
          <div className={classes.heading}>
            <Typography className={classes.heading}>Category { miner.category }</Typography>
          </div>
          <div className={classes.heading}>
            <Typography className={classes.heading}>Balance: { miner.minerBalance } ALGO</Typography>
          </div>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column3}>
              <div className={classes.details}>
                <div className={classes.column4}>
                  <Typography className={classes.cloneInfoBold}>State:</Typography>                  
                  <Typography className={classes.cloneInfoBold}>Contact Details:</Typography>
                </div>
                <div className={classes.column4}>
                  <Typography className={classes.cloneInfoNormal}>{ miner.minerState }</Typography>
                  <a className={classes.cloneInfoNormal} 
                    href="https://etherscan.io/token/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
                    target="_blank">Click to check it on etherscan</a>
                </div>
              </div>
            </div>
        </ExpansionPanelDetails>        
      </ExpansionPanel>

      </React.Fragment>
    )
  }

  showCloneLogs(clone) {
    this.props.history.push("/logs/show/"+clone.botSlug+"-"+clone.id+".1.0");
  }

}

export default compose(
  withStyles(styles),
  withRouter
)(MinerListItem)

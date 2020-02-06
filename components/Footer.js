import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  anchor: {
    marginTop: 50,
    fontSize: '0.9em',
    color: '#2196f3'
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.anchor}>
      <Typography align='center'>
        Copyright &copy; 2020 DiGi Transform. All Rights Reserved
      </Typography>
    </div>
  )
}

export default Footer

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../../../download.svg'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DoctorLogin from '../../DoctorLogin/DoctorLogin';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  leftSide: {
    backgroundColor: '#536DFE',
    height: '100vh',
  },
  leftSideContent: {
    color: '#fff',
    '& img': {
      margin: '0 auto',
      display: 'block',
    },
    '& p': {
      fontSize: '40px',
      fontWeight:'500',
      textAlign: 'center',
    }
  },
  rightSide: {
    backgroundColor: '#e8e8e88f',
    height: '100vh',
  },
  
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}


const AuthPage = ({fakeAuth}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container>

        <Grid item xs={7} container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center" className={classes.leftSide}>
          <div className={classes.leftSideContent}>
            <img src={logo} alt="logo" />
            <p>React Dashboard</p>
          </div>
        </Grid>
        <Grid item xs={5} container
          spacing={0}
          direction="column"
          justify="center"
          className={classes.rightSide}
          alignItems="center" >
       
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        
        centered
      >
        {/* <Tab label="Login" />
        <Tab label="New User" /> */}
      </Tabs>
      <TabPanel value={value}  index={0}>
        {/* <Login fakeAuth={fakeAuth} /> */}
        <DoctorLogin fakeAuth={fakeAuth} />
      </TabPanel>
      {/* <TabPanel value={value} index={1}>
        <SignUp fakeAuth={fakeAuth} />
      </TabPanel> */}
        </Grid>

      </Grid>
    </div>
  );
};

export default AuthPage;
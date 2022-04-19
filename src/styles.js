
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    background: '#ffcdd2',
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chill: {
    marginBottom: '-1.5em',
  },
  appFoot: {
    marginTop: '2em',
    alignItems: 'center',
    background: '#bfb2c1',
  },
  heading: {
    color: '#62727b',
  },
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
          alignItems: 'left',
          flexDirection: 'column-reverse',
         },
},
}));


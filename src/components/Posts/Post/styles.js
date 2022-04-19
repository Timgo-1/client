import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    background: 'linear-gradient(-90deg, pink, lightskyblue, grey)',
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'space-between',
    top: '20px',
    left: '20px',
    color: 'yellow',
    fontWeight: 'bolder',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '10px',
    display: 'flex',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: 'navy',
    fontWeight: 'bold',
  },
  title: {
    padding: '0 16px',
    fontWeight: 'bolder',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'yellow',
  },
});

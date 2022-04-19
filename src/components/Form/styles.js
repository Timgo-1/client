import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },

  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    color: "#482880",
    background: "#ff9100",
    '&:hover': { color: "#f48fb1", background: "#357a38", },
    fontWeight: "bolder",
  },
  buttonClear: {
    background: "#6d1b7b",
    color: "#35baf6",
    '&:hover': { color: "#ffcd38", background: "#f00", },
    fontWeight: "bolder",
  },
}));

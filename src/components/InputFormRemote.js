import React, {useCallback,useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Proaca
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ localPeerName,remotePeerName, setRemotePeerName }) {
  const label = "相手の名前"
  const classes = useStyles();
  const [name, setName] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [isComposed, setIsComposed] = useState(false)
  useEffect(() => {
    const disabled = name === ''
    setDisabled(disabled)
  }, [name])

  const initializeRemotePeerName = useCallback(() => {
    setRemotePeerName(name)
    console.log(name)
    console.log(remotePeerName)
  }, [name, remotePeerName, setRemotePeerName]);
  
  if (localPeerName === '') return <></>
  if (remotePeerName !== '') return <></>
  
  console.log({localPeerName, remotePeerName})

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {label}を入力してください
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label={label}
          name="name"
          value={name}
          onCompositionEnd={() => { setIsComposed(false) }}
          onCompositionStart={() => { setIsComposed(true) }}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => {
            if (isComposed) return
            if (e.target.value === '') return
            if (e.key === 'Enter') initializeRemotePeerName(e.target.value)
          }}
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          disabled={disabled}
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={initializeRemotePeerName}
        >
          決定
          </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

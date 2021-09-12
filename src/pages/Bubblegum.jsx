import { Container, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {}
}));

const Bubblegum = () => {
  const classes = useStyles();
  return <Container className={classes.container}>
      <Typography>Bubblegum</Typography>
  </Container>;
};

export default Bubblegum;

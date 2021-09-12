import { Container, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {}
}));

const Starred = () => {
  const classes = useStyles();
  return <Container className={classes.container}>
      <Typography>Starred</Typography>
  </Container>;
};

export default Starred;

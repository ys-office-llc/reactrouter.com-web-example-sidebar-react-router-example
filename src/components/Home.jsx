import { Container, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}));

const Home = () => {
  const classes = useStyles();
  return <Container className={classes.container}>
      <Typography>Home</Typography>
  </Container>;
};

export default Home;

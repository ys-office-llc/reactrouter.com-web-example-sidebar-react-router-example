import { Container, makeStyles, Typography } from "@material-ui/core"
import BasicTable from "./BasicTable";

const useStyles = makeStyles(theme => ({
  container: {}
}));

const Home = () => {
  const classes = useStyles();
  return <Container className={classes.container}>
      <Typography>Home</Typography>
      <BasicTable />
  </Container>;
};

export default Home;

import { Container, Grid, makeStyles } from "@material-ui/core"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Bubblegum from "./components/Bubblegum";
import Home from "./components/Home";
import NestedList from "./components/NestedList";
import SimpleList from "./components/SimpleList";
import Starred from "./components/Starred";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home />
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <Bubblegum />
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/starred",
    sidebar: () => <div>starred!</div>,
    main: () => <Starred />
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7"
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function SidebarExample() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Router>
        <Grid container>
          <Grid item sm={2} xs={2}>
            <SimpleList />
            <NestedList />
          </Grid>
          <Grid item sm={10} xs={10}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </Container>
  );
}

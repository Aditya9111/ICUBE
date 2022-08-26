// import { Center } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Dash from "./pages/Boards";
import Login from "./pages/Login";
import PostBlog from "./pages/PostBlog";
import { setAuth } from "./redux/authSlice";
import ArticleList from "./components/BlogArticle";
import AuctionList from "./components/AllAuctions";
import PostJob from "./pages/PostJob";
import JobList from "./components/AllJob";
import FindMentor from "./pages/FindMentor";
import PostAuction from "./pages/PostAuction";
import Article from "./pages/Article";
import JobDetails from "./pages/JobDetail";
import Home from "./components/Home";
import InvestorLogin from "./pages/InvestorLogin";
import InvestorRoute from "./components/InvestorRoute";
import FindStartup from "./pages/FindStartup";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { isInvestor } = useSelector((state) => state.invauth);

  useEffect(() => {
    if ("login" in localStorage) {
      const login = JSON.parse(localStorage.getItem("login"));
      axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`;
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
    if (isLoggedIn) {
      dispatch(setAuth({ isLoggedIn }));
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    const { isInvestor } = JSON.parse(localStorage.getItem("login")) || {};
    if (isInvestor) {
      dispatch(setAuth({ isInvestor }));
    }
  }, [dispatch, isInvestor]);

  return (
    <>
      <Switch>
        <PrivateRoute exact path="/">
          <Layout>
            <Dash />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/addblogs">
          <Layout>
            <PostBlog />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/addAuction">
          <Layout>
            <PostAuction />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/addjobs">
          <Layout>
            <PostJob />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/findMentor">
          <Layout>
            <FindMentor />
          </Layout>
        </PrivateRoute>
        <PrivateRoute exact path="/auctions">
          <Layout>
            <AuctionList />
          </Layout>
        </PrivateRoute>
        <InvestorRoute exact path="/investorDash">
          <Layout>
            <Dash />
          </Layout>
        </InvestorRoute>

        <InvestorRoute exact path="/findStartup">
          <Layout>
            <FindStartup />
          </Layout>
        </InvestorRoute>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/investor">
          <InvestorLogin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/blog">
          <ArticleList />
        </Route>
        <Route path="/blogs/:id">
          <Article />
        </Route>
        <Route path="/jobDetails/:id">
          <JobDetails />
        </Route>
        <Route path="/job">
          <JobList />
        </Route>
      </Switch>
    </>
  );
}

export default App;

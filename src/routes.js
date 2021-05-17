import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/header";
import About from "./page/About";
import ColorBox from "./page/ColorBox";
import Contact from './page/Contact';
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import New from "./page/News";
import Posts from "./page/Posts";
import ProductsPage from "./page/ProductsPage";
import Signup from "./page/Signup";
import { TodoList } from "./page/To-do-list";
const Routes = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/products" component={ProductsPage}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/colorbox" component={ColorBox}></Route>
        <Route exact path="/todo" component={TodoList}></Route>
        <Route exact path="/new" component={New}></Route>
        <Route exact path="/post" component={Posts}></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};

export default Routes;

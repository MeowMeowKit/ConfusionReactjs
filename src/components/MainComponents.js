import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import {
   postComment,
   fetchComments,
   fetchDishes,
} from "../redux/ActionCreator";
import TestFetchComponet from "../useFetch/TestFetchComponet";

const mapStateToProps = (state) => {
   return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders,
   };
};
class Main extends Component {
   componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
   }

   render() {
      const HomePage = () => {
         return (
            <Home
               dish={this.props.dishes.filter((dish) => dish.featured)[0]}
               promotion={
                  this.props.promotions.filter(
                     (promotion) => promotion.featured
                  )[0]
               }
               leader={
                  this.props.leaders.filter((leader) => leader.featured)[0]
               }
            />
         );
      };
      const DishWithId = ({ match }) => {
         return (
            <DishDetail
               dish={
                  this.props.dishes.filter(
                     (dish) => dish.id === parseInt(match.params.dishId, 10)
                  )[0]
               }
               comments={this.props.comments.filter(
                  (comment) =>
                     comment.dishId === parseInt(match.params.dishId, 10)
               )}
               postComment={this.props.postComment}
            />
         );
      };
      return (
         <div>
            <Header />
            <div>
               <Switch>
                  <Route path="/home" component={HomePage} />
                  <Route
                     exact
                     path="/aboutus"
                     component={() => <About leaders={this.props.leaders} />}
                  />
                  <Route
                     exact
                     path="/menu"
                     component={() => <Menu dishes={this.props.dishes} />}
                  />
                  <Route path="/menu/:dishId" component={DishWithId} />
                  <Route exact path="/contactus" component={Contact} />
                  <Route exact path="/comments" component={TestFetchComponet} />
                  <Redirect to="/home" />
               </Switch>
            </div>
            <Footer />
         </div>
      );
   }
}
const mapDispatchToProps = (dispatch) => ({
   postComment: (dishId, rating, author, comment) =>
      dispatch(postComment(dishId, rating, author, comment)),
   fetchDishes: () => {
      dispatch(fetchDishes());
   },
   fetchComments: () => dispatch(fetchComments()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

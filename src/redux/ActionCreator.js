import { baseURL } from "../shared/baseURL";
import * as ActionTypes from "./ActionTypes";

export const addComment = (comment) => ({
   type: ActionTypes.ADD_COMMENT,
   payload: comment,
});

export const addComments = (comments) => {
   console.log("addComments", comments);
   return {
      type: ActionTypes.ADD_COMMENTS,
      payload: comments,
   };
};

export const addDishes = (dishes) => ({
   type: ActionTypes.ADD_DISHES,
   payload: dishes,
});
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
   const newComment = {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment,
   };
   newComment.date = new Date().toISOString();
   console.log("newComment", newComment);
   return (
      fetch(baseURL + "comments", {
         method: "POST",
         body: JSON.stringify(newComment),
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "same-origin",
      })
         .then(
            (response) => {
               if (response.ok) {
                  return response;
               } else {
                  var error = new Error(
                     "Error " + response.status + ": " + response.statusText
                  );
                  error.response = response;
                  throw error;
               }
            },
            (error) => {
               throw error;
            }
         )
         .then((response) => response.json())
         .then(function (response) {
            console.log(response);
            return dispatch(addComment(response));
         })
         // .then(response => dispatch(addComment(response)))
         .catch((error) => {
            console.log("comments it ne", error.message);
         })
   );
};
export const fetchComments = () => (dispatch) => {
   return fetch(baseURL + "comments")
      .then(
         (response) => {
            if (response.ok) {
               return response;
            } else {
               var error = new Error(
                  "Error " + response.status + ": " + response.statusText
               );
               error.response = response;
               throw error;
            }
         },
         (error) => {
            var errmess = new Error(error.message);
            throw errmess;
         }
      )
      .then((response) => response.json())
      .then((comments) => dispatch(addComments(comments)))
      .catch((error) => {
         console.log("comments looix nhieu ne", error.message);
      });
};
export const fetchDishes = () => (dispatch) => {
   return fetch(baseURL + "dishes")
      .then(
         (response) => {
            if (response.ok) {
               return response;
            } else {
               var error = new Error(
                  "Error " + response.status + ": " + response.statusText
               );
               error.response = response;
               throw error;
            }
         },
         (error) => {
            var errmess = new Error(error.message);
            throw errmess;
         }
      )
      .then((response) => response.json())
      .then((dishes) => dispatch(addDishes(dishes)))
      .catch((error) => {
         console.log("dishes loxio disshe en", error.message);
      });
};

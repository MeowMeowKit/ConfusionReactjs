import * as ActionTypes from "./ActionTypes";

export const Comments = (state = { comments: [] }, action) => {
   switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
         return { ...state, comments: action.payload };
      case ActionTypes.ADD_COMMENT:
         var comment = action.payload;
         return { ...state, comments: state.comments.concat(comment) };
      default:
         return state;
   }
};

import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   Breadcrumb,
   BreadcrumbItem,
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Row,
   Label,
   Col,
   Input,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { baseURL } from "../shared/baseURL";

const required = (value) => value && value.length;
const maxLength = (length) => (value) => !value || value.length <= length;
const minLength = (length) => (value) => value && value.length >= length;
function RenderDish({ dish }) {
   return (
      <div className="col-12">
         <Card>
            <CardImg top src={baseURL + dish.image} alt={dish.name} />
            <CardBody>
               <CardTitle>{dish.name}</CardTitle>
               <CardText>{dish.description}</CardText>
            </CardBody>
         </Card>
      </div>
   );
}
export function RenderComments({ comments, postComment, dishId }) {
   const comment = comments.map((comment) => {
      return (
         <div key={comment.id}>
            <ul>
               <li>
                  <h5>{comment.comment}</h5>
               </li>
            </ul>
            <p>
               -- {comment.author} ,{" "}
               {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
               }).format(new Date(Date.parse(comment.date)))}
            </p>
         </div>
      );
   });
   return (
      <div className="col-12 col-sm-7">
         <h2 className="text-uppercase">comments</h2>
         {comment}
         <CommentForm dishId={dishId} postComment={postComment} />
      </div>
   );
}
const DishDetail = (props) => {
   if (props.dish != null) {
      // const dish = props.dish;
      // const comments = props.comments;
      return (
         <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem>
                     <Link to="/menu">Menu</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                  <h3>{props.dish.name}</h3>
                  <hr />
               </div>
            </div>
            <div className="row">
               <div className="col-12 col-md-5 m-1">
                  <RenderDish dish={props.dish} />
               </div>
               <div className="col-12 col-md-6 m-1">
                  <RenderComments
                     comments={props.comments}
                     postComment={props.postComment}
                     dishId={props.dish.id}
                  />
               </div>
            </div>
         </div>
      );
   } else {
      return <div></div>;
   }
};
export default DishDetail;

class CommentForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isModalOpen: false,
      };
   }
   toggleModal = () => {
      this.setState({
         isModalOpen: !this.state.isModalOpen,
      });
   };
   handleSubmit(values) {
      console.log(values);
      this.toggleModal();
      this.props.postComment(
         this.props.dishId,
         values.rating,
         values.author,
         values.comment
      );
   }
   render() {
      return (
         <React.Fragment>
            <Button outline onClick={this.toggleModal}>
               <span className="fa fa-pencil fa-lg"></span> Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader toggle={this.toggleModal}>New Comment</ModalHeader>
               <ModalBody>
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                     <Row className="form-group">
                        <Label htmlFor="rating" md={3}>
                           Rating
                        </Label>
                        <Col md={9}>
                           <Control.select
                              model=".rating"
                              name="Rating"
                              className="form-control"
                           >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                           </Control.select>
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label htmlFor="author" md={3}>
                           Your Name
                        </Label>
                        <Col md={9}>
                           <Control.text
                              model=".author"
                              id="author"
                              name="author"
                              placeholder="Your Name"
                              className="form-control"
                              validators={{
                                 required,
                                 minLength: minLength(3),
                                 maxLength: maxLength(15),
                              }}
                           />
                           <Errors
                              className="text-danger"
                              model=".author"
                              show="touched"
                              messages={{
                                 required: "Required",
                                 minLength: "Must be greater than 2 characters",
                                 maxLength: "Must be 15 characters or less",
                              }}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label htmlFor="Comment" md={3}>
                           Comment
                        </Label>
                        <Col md={9}>
                           <Control.textarea
                              model=".comment"
                              id="comment"
                              name="comment"
                              rows="6"
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Col md={{ size: 1, offset: 2 }}>
                           <Button type="submit" color="primary">
                              Submit
                           </Button>
                        </Col>
                     </Row>
                  </LocalForm>
               </ModalBody>
            </Modal>
         </React.Fragment>
      );
   }
}

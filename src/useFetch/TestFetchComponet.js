import React, { Component } from "react";
import {
	Button,
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import { baseURL } from "../shared/baseURL";

export function RenderComments({ comments }) {
	const comment = comments.map((comment) => {
		return (
			<div>
				<h6>{"id:" + comment.id + " - rating:" + comment.rating}</h6>
				<p>{comment.comment}</p>
				<p>
					{comment.author} {comment.date}
				</p>
			</div>
		);
	});
	return (
		<div className="col-12 col-sm-7">
			<h2>comments</h2>
			{comment}
		</div>
	);
}

class TestFetchComponet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: [],
			comments: [],
			//these are used to create a new comment
			id: -1,
			dishId: -1,
			comment: "",
			author: "",
			rating: 0,
			date: new Date(),
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		//loading dishes and comments from db.json of the json-server
		this.fetchDishes();
		this.fetchComments();
	}

	handleInputChange(event) {
		const nameControl = event.target.name;
		const valueControl = event.target.value;
		this.setState({ [nameControl]: valueControl });
		console.log(nameControl + "," + valueControl);
	}
	async addComment(newComment) {
		const response = await fetch(baseURL + "comments", {
			method: "POST",
			body: JSON.stringify(newComment),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "same-origin",
		});
		if (response.ok) {
			console.log(response);
			this.setState({ comments: this.state.comments.concat(newComment) });
		}
	}

	handleSubmit(dish) {
		const newComment = {
			id: this.state.comments.length + 1,
			dishId: dish.id,
			rating: this.state.rating,
			comment: this.state.comment,
			author: this.state.author,
			date: this.state.date.toString(),
		};
		this.setState({
			...this.state,
			comment: "",
			author: "",
			rating: 0,
			date: new Date(),
		});
		console.log(newComment);
		this.addComment(newComment);
	}

	fetchDishes = () => {
		return fetch(baseURL + "dishes")
			.then((reponse) => reponse.json())
			.then((dishes) => {
				this.setState({ dishes: dishes });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	fetchComments = () => {
		return fetch(baseURL + "comments")
			.then((reponse) => reponse.json())
			.then((comments) => {
				this.setState({ comments: comments });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const content = this.state.dishes.map((dish) => {
			return (
				<div className="col-12 col-sm-8" key={dish.id}>
					<Card>
						<CardImg top src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
					<h4>comments</h4>
					<RenderComments
						comments={this.state.comments.filter(
							(comment) => comment.dishId === parseInt(dish.id, 10)
						)}
					/>
					<Form>
						<FormGroup>
							<Label for="author">author</Label>
							<Input
								type="text"
								name="author"
								id="author"
								placeholder="author"
								value={this.state.author}
								onChange={this.handleInputChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="comment">comment</Label>
							<Input
								type="textarea"
								name="comment"
								id="comment"
								placeholder="comment"
								value={this.state.comment}
								onChange={this.handleInputChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="rating">rating</Label>
							<Input
								type="number"
								name="rating"
								id="rating"
								placeholder="rating"
								value={this.state.rating}
								onChange={this.handleInputChange}
							/>
						</FormGroup>
						<FormGroup>
							<Button
								type="button"
								onClick={this.handleSubmit.bind(this, dish)}
							>
								Submit
							</Button>
						</FormGroup>
					</Form>
				</div>
			);
		});
		return <div className="col-12 col-sm-5">{content}</div>;
	}
}

export default TestFetchComponet;

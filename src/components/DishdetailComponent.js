import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        const commentList = comments.map((comment) => {

            var date = new Date(comment.date);
            var month = date.toDateString().split(' ')[1];
            var year = date.getFullYear();
            var day = date.toDateString().split(' ')[2];

            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {month} {day}, {year}</p>
                </div>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <li>{commentList}</li>
                </ul>
            </div>
        );
        
    }

    render() {
        if(this.props.dish == null){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }
    }
}

export default DishDetail;
import React from "react";
import '../styles/Review.css'

const Review = (props) => {
    return (
        <div className="review">
            <a className="reviewLink" href={props.review.link} target="_blank" rel="noreferrer">
                <div>
                    <h3 className="reviewAuthor">{props.review.author}</h3>
                    <p className="reviewText">{props.review.text}</p>
                </div>
            </a>
        </div>
    )
}
export default Review;
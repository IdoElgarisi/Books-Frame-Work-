import { storageService } from "../services/storage.service.js";
import { bookService } from '../services/book.service.js';

export function ReviewsPreview({ review, id, onDeleteReview }) {



    return (
        <div className="review-card">
            <h4><i className="fa fa-times" onClick={() => onDeleteReview(id, review.id)}></i></h4>
        <div className="user-info">
        <h3><span>Review by: </span>{review.name} </h3>
            <p><span>Read At: </span>{review.readAt}</p>
        </div>
            <p><span>Rating: </span>{review.rating}</p>
            <p><span>User Text: </span>{review.txt}</p>

        </div>

    )



}


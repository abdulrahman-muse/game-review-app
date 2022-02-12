import React from 'react';



function GameReviews({ gameReviews }) {



    return (
        <div>
            {gameReviews.reviews?.map((review) => (<div className="review" key={review.id}><p>Title: {review.title}</p>
                <p>Rating: {review.rating}</p>
                <p>Description: {review.description}</p>
            </div>))}
        </div>
    )
}


export default GameReviews
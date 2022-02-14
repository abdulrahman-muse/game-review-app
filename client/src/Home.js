import React from "react";

function Home({reviews}){
    

    return(
        <div>
            {reviews?.map((review) => (
                <div className="review" key={review.id}>
                    <p>Title: {review.title}</p>
                    <p>Rating: {review.rating}/5</p>
                    <p>Description: {review.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
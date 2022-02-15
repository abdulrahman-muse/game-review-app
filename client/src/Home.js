import React from "react";



function Home({ user, games}) {

    console.log(user.reviews)
    let shownGames = games.filter(g => g.reviews.length >= 3)

    console.log(shownGames)
    return (
          <div> 
              <h1>Trending Games:</h1>
              <div className="grid-container">
            {shownGames.map((game) => (
            <div className="grid-item" key={game.id} >
                <h1><b>{game.title}</b></h1>
                <img alt={game.title} src={game.image_url} />
            </div>
            ))}
        </div>
        <h1>My Reviews!</h1>
            {user.reviews?.map((review) => (
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
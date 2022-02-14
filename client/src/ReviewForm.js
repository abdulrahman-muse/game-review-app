import React, {useState} from "react";


function ReviewForm({games, addReview}) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        rating: "",
        game_id: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(value)
        console.log(name)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        addReview(newData);
    };

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input type="text" value={formData.title} name="title" placeholder="Add Title" onChange={handleInputChange} /><br/>
                <input type="text" name="description" value={formData.description} placeholder="Add Description" onChange={handleInputChange} /><br/>
                <input type="number" name="rating" value={formData.rating} placeholder="Add Rating" onChange={handleInputChange} /><br/>
                <select name="game_id" onChange={handleInputChange}>
                    {games.map((game)=> (<option name="game_id" value={game.id} key={game.id} >{game.title}</option>))}
                </select><br/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm
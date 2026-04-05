import "./FoodCard.css";

function FoodCard({title, emoji, description}) {
    return ( 
    <div className="food-card">
    <h2>
        {emoji}-{title}
        </h2>
    
    <p>{description}</p>
    </div>
    
    );
}
export default FoodCard;
import '../assets/cards.css'
function Card(props){
    return (
        <>
            <div className="card">
                <h2>{props.name}</h2>
                <p>{props.tel} + {props.age}</p>
            </div>
        </>
    )
}

export default Card
export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
                <div>
                    </div>
                    <div >
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <h4>{ele.posterURL}</h4>
                    <h3>Rate : {ele.rating}</h3>
                    </div>
                </div>
    )
}
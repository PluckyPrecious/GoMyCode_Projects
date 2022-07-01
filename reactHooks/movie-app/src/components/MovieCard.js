import { Card } from "react-bootstrap";

export default function MovieCard({ ele }) {
  return (
    <div className="MovieCard">
      <Card style={{ width: '20rem', height: '40rem'  }}>
      <Card.Body>
          <Card.Title className="text-danger">{ele.title}</Card.Title>
          <hr/>
          <Card.Text className="text-muted"  style={{ height: '10rem' }}>
          {ele.description}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={ele.posterURL} alt="Poster"style={{ height: '20rem' }}/>
        <Card.Footer>
          <small>Rating: {ele.rating}/10</small>
        </Card.Footer>
      </Card>
    </div>
  );
}
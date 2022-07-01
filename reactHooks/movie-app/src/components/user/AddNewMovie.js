import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export default function AddMovie({ adding }) {
  let titleRef = useRef();
  let descRef = useRef();
  let posurlRef = useRef();
  let [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRate(newRating);
  };

  function submitted(ev) {
    ev.preventDefault();

    let movieObject = {
      title: titleRef.current.value,
      description: descRef.current.value,
      posterURL: posurlRef.current.value,
      rating: rate,
    };
    adding(movieObject);

    //save all this information in localStorage
  }

  return (
    <div className="AddMovie">
      <form onSubmit={submitted}>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          New Movie
          </label>
          
          <InputGroup className="mb-3">
              <FormControl
              name="title"
              ref={titleRef}
              placeholder="Movie Title"
            />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
              name="description"
            ref={descRef}
            placeholder="Movie description"
            />
            </InputGroup>
            
            <InputGroup className="mb-3">
              <FormControl
                name="posterURL"
                placeholder="Movie poster"
               ref={posurlRef}
              />
            </InputGroup>
            <div className="rating">
            <span>
            Rate this Movie :
            <ReactStars
              count={10}
              onChange={ratingChanged}
              size={20}
              isHalf={true}
              activeColor="#ffd700"
            />
            </span>
        </div>
        </div>    

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

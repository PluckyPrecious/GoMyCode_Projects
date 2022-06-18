import ReactStars from "react-rating-stars-component";
import {useRef,useState} from "react";
import { Form} from "react-bootstrap";


export default function Filter({filter}) {
    let searchRef = useRef();
    const [rate, setRate] = useState(0);

    const ratingChanged = (newRating) => {
         filter(searchRef.current.value,newRating);
        setRate(newRating)
    };


    function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value,rate);
    }


    return (
        <div>
      <Form inline>
        <form className="searchform" onChange={submitted} onSubmit={submitted}>
            <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search..." aria-label=".form-control-lg example" />
            <button className="btn btn-primary searchbtn" type="submit" >Search</button>
        </form>
        </Form>
        </div>
    )
}
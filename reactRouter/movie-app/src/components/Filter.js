import {useRef,useState} from "react";
import { Form} from "react-bootstrap";


export default function Filter({filter}) {
    let searchRef = useRef();
    const [rate] = useState(0);

    function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value,rate);
    }


    return (
        <div>
      <Form inline>
        <form className="searchform" onChange={submitted} onSubmit={submitted}>
            <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="search movie..." aria-label=".form-control-lg example" />
            <button className="btn btn-primary searchbtn" type="submit" >Search</button>
        </form>
        </Form>
        </div>
    )
}
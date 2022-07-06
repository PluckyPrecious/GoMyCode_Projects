import React from 'react';
import axios from 'axios';
import UserList from './Component/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Component/Loading';
import { useEffect, useState } from 'react';

const App = () => {

  const [listOfUser, setListOfUser] = useState(null);

  useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            console.table(res.data)
            setListOfUser(res.data);
        });
    }, []);

  return (
    <div className="App">
      {listOfUser ? <UserList listOfUser={listOfUser} /> : <Loading />}
    </div>
  );
}

export default App;
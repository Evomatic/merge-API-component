import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";


export default function Api(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //fetch data after render
    useEffect(() => {
        getData()
    },[props.api]);


//fetch random user object data
async function getData() {
   try { const response = await axios(props.api);
    setData(response.data)
    setLoading(false)
  } catch(e) {
      console.log(e)
      setError(e);
  } 
};


if (loading) return <p>Loading...</p>
if (error) return <p>{`${error}`}</p>
return (
<>
    <img src={data.results[0].picture.medium} alt="random user" />
    <div>{`name: ${data.results[0].name.first} ${data.results[0].name.last}`}</div>
    <div>{`age: ${data.results[0].dob.age}`}</div>
    <div>{`email: ${data.results[0].email}`}</div>
</>
    );
}

Api.propTypes = {
    api: PropTypes.string,
}

Api.defaultProps = {
    api: "https://randomuser.me/api"
}





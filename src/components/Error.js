import { useRouteError } from "react-router-dom";

const Error =()=>{
    const errors =useRouteError();
    console.log(errors)

    return(<div>

        <h1>Opps..</h1>
        <h5>Some thing eventy rong.....</h5>
        <p>{errors.statusText}</p>
        {/* <p>{errors.error.message}</p> */}
    </div>)
}

export default Error;
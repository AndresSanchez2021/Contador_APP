const Contador=()=>{
    const[counter, setCounter] = React.useState(0);
    return(
        <div className="container bt-5">
            <div className="row  justify-content-center">
                <div className="col-4 text-center">
                    <h1>Counter</h1>
                    <div className="row justify-content-around">
                        <div className="col-6">
                            <button className="btn btn-lg btn-outline-primary mr-10">Start</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-lg btn-outline-danger ml-10">Stop</button>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
           
        </div>
    );
}
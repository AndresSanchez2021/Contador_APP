const Contador=()=>{
    const[counter, setCounter] = React.useState(0);
    const aumentar = ()=> setCounter(counter + 1)
    const disminuir = ()=> setCounter(counter - 1)
    const color =()=>counter < 1 ? "positivo":"negativo";
    return(
        
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-6 text-center">
                    <h1 className={color()}>{counter} </h1>
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-lg btn-outline-primary mr-10" onClick={aumentar}>Increase</button>
                        <button className="btn btn-lg btn-outline-danger ml-10" onClick={disminuir}>Diminish</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
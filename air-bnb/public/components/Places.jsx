export default function Places (props) {

    return(

        <div className="card">
            <div className="image--container" >
            <img src={props.img} className="location--image" />
            </div>
                <div className="card--stats">
                    <span className="countryandlink">
                     <h5 className="country"><img src={props.navigation} className="navigation--image"/>{props.country}</h5><a href="" className="link">{props.maps}</a>
                    </span>
                        <h2>{props.location}</h2>
                            <h6>{props.date}</h6>
                                <p>{props.description}</p>
                </div>


        </div>
    )
}
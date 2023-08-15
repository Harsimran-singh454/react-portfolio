export default function Work(props){
    return(
        <>
            <div className="white-bg" >
                <h2>{props.title}</h2>
                <p>{props.company}</p>
                <p className="light">{props.location}</p>
                <h3>Roles And Responsibilities</h3>
                <p>{props.desc}</p>
                <h4>Tenure</h4>
                <p>{props.start_data} - {props.end_date}</p>
            </div>
        </>
    )
}
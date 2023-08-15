export default function Education(props){
    return(
        <>
            <div className="white-bg">
                <h2 className="bold">{props.program}</h2>
                <p>{props.institution}</p>
                <p className="light">{props.location}</p>
                <h3>Duration</h3>
                <p>{props.start_data} - {props.end_date}</p>
            </div>
        </>
    )
}
const Student = (props) => {
    return <div className='student-card'>
        <img src={props.photo} className="photo-card" />
        <div className="student-info">
            <h3>{props.name}</h3>
            <h4>{props.gender}</h4>
            <h4>{props.score}</h4>
        </div>
    </div>
}

export default Student;
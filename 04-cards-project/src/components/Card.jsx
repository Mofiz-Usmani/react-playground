import {Bookmark} from 'lucide-react'

const Card = (props) => { 
  return (
    <div className='card'>
        <div className="top">
            <img src={props.image} alt='image' />
            <button>Save <Bookmark size={12} /></button>
        </div>

        <div className="center">
            <h3>{props.company} <span>{props.time}</span></h3>
            <h2>{props.role}</h2>
            <div className="tag">
                <h4>{props.jobtime}</h4>
                <h4>{props.experience}</h4>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h3>${props.salary}</h3>
                <p>{props.location}, {props.country}</p>
            </div>
            <button>Apply Now</button>
        </div>
      
    </div>
  )
}

export default Card

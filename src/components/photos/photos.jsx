import { Link } from 'react-router-dom';
import './Photos.css'
function Photos({image, id}) {
    return(
        <Link to={`photos/${id}`}>
                <img className="img" src={image} alt="img" />
                <span>{id}</span>
        </Link>
    )
}
export default Photos;
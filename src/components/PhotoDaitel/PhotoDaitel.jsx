import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PhotoDaitel.css'
function PhotoDaitel() {
    const {id} = useParams();
    console.log(id);
    const [photos, setPhotos] = useState({});

    async function DownloadPhoto(){
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}
        `)
        console.log(response);
        
        setPhotos(
            {
                image: response.data.photo.url,
                description: response.data.photo.description,
                title: response.data.photo.title
            }
        )
    }

    useEffect(()=>{
        DownloadPhoto()
    },[])

    return(
        <div className="detail">
            <img src={photos.image} alt="img" />
            <div>
                <h1>{photos.title}</h1>
                <div>{photos.description}</div>
            </div>
        </div>
    )
    
}
export default PhotoDaitel;
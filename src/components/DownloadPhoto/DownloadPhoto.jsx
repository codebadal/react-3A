import axios from 'axios';
import { useEffect, useState } from 'react';
import './DownloadPhoto.css'
import Photos from '../photos/photos';
function DownloadPhoto() {
    const [s, sets] = useState(1)
    console.log(s);
    const [mainUrl, setMainUrl] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${s}&limit=20`);
    const [nextUrl, setNextUrl] = useState(``);

    const [PhotoList, setPhotoList] = useState([]);

    async function UrlPhoto() {
        const response = await axios.get(mainUrl);
        console.log(response);
        setNextUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${s}&limit=20`)
        const result = response.data.photos;
        setPhotoList(result.map((p)=>{
            return {
                image: p.url,
                id: p.id
            }
        })
        )
    }

    useEffect(()=>{UrlPhoto()},[s])
    
    return(
        <div className='img-cont'>
            {PhotoList.map((p)=>
            <Photos key={p.id} id={p.id} image={p.image}
            />
            )}

            <div className='btns'>
                <div>{s+"aa"}</div>
                <button disabled={s<=20} className='btn'
                    onClick={()=>
                    {sets(s-20)
                    setMainUrl(nextUrl)}
                    }
                >prev</button>

                <button className='btn'
                disabled={s>=132}
                onClick={()=>
                    {sets(s+20)
                    setMainUrl(nextUrl)}
                    }> next</button>
            </div>
        </div>
    )

}

export default DownloadPhoto;
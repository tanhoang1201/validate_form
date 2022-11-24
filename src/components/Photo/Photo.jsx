import axios from 'axios'
import { useEffect, useState } from 'react'

function Photo() {
    const [query, setQuery] = useState('')
    const [pages, setPages] = useState(1)
    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get('https://hn.algolia.com/api/v1/search', {
                params: {
                    query,
                },
            })
            setImages([...images, ...res.data])
        }
        fetchApi()
    }, [pages])
    const handleLoadMore = () => {
        setPages(pages + 1)
    }
    return (
        <div>
            <div className='grid grid-cols-4 p-7 gap-3 auto-rows-fr'>
                {images.map((image, index) => (
                    <div key={image.id} className='rounded-md overflow-hidden'>
                        <img src={image.download_url} className='object-cover w-full h-full' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Photo

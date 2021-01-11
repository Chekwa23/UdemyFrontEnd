import React from 'react'

export default function ImageList(props) {

    //images is an array of image tags
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt="" />
    })

    return (
        <div>
            {images}
        </div>
    )
}

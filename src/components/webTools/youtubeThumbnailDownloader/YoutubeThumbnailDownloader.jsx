
import React, { useState, useEffect, useRef } from 'react';
import {
    Container,
    Row,
    Col,
    Input,
    Button,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import RenderInputField from '../../../containers/buildComponents/RenderInputField/RenderInputField';
import { useSelector } from 'react-redux';
import Icon from '@mdi/react'
import { mdiDownload, mdiPencil } from '@mdi/js';
import Unnamed from '../../../assets/images/unnamed.png';



const YoutubeThumbnailDownloader = (props) => {
    const { handleSubmit, initialize } = props

    const getInputData = useSelector(state => state.form.YoutubeThumbnailDownloaderForm?.values);

    const [getImage, setGetImage] = useState(null);
    const [imageSize, setImageSize] = useState('maxresdefault');
    const [getImageDimension, setGetImageDimension] = useState({});

    const imageRef = useRef(null);

    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/default.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/sddefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg

    function fetchImageAndDownload (e) {
        e.preventDefault(); // Prevent browser's default download stuff...
    
        const url = e.target.getAttribute("href");       // Anchor href 
        const downloadName = e.target.download;          // Anchor download name
    
        const img = document.createElement("img");   // Create in-memory image
        img.addEventListener("load", () => {
            const a = document.createElement("a");   // Create in-memory anchor
            a.href = img.src;                        // href toward your server-image
            a.download = downloadName;               // :)
            a.click();                               // Trigger click (download)
        });
        img.src = getImage;       // Request image from your server
    
    }

    useEffect(() => {
        initialize({ youtube_url: 'https://www.youtube.com/watch?v=9bZkp7q19f0' })
    }, [])


    useEffect(() => {

        let results = getInputData?.youtube_url.match('[\\?&]v=([^&#]*)');
        let videoUrl = (results == null) ? getInputData?.youtube_url : results[1];
        let getImageUrl = `https://img.youtube.com/vi/${videoUrl}/${imageSize}.jpg`;
        setGetImage(getImageUrl);

        imageRef.current.addEventListener("load", function () {

            if (imageSize == 'maxresdefault') {
                setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 25 })
            }
            else {
                setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 18 })
            }
            // else if (imageSize == 'hqdefault') {
            //     setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 18 })
            // }
            // else if (imageSize == 'mqdefault') {
            //     setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 18 })
            // }
            // else if (imageSize == 'default') {
            //     setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 18 })
            // }
        });

    }, [getInputData]);

    console.log(getImageDimension?.width / 2)


    const submitData = data => {
        // console.log(data);
    }


    return (
        <Container fluid={true}>
            <Row>
                <Col className='col-12'>
                    <form className="form p-0 m-0 text-center py-4" onSubmit={handleSubmit(submitData)}>
                        <h2> Youtube Thumbnail Downloader </h2>

                        <Field
                            className='w-75 mx-auto text-center mt-4 mb-2'
                            name="youtube_url"
                            component={RenderInputField}
                            type="text"
                        />

                        <div>

                            <div>
                                <Button
                                    type='button'
                                    className='m-3'
                                    color='primary'
                                    onClick={fetchImageAndDownload}
                                >   <Icon path={mdiDownload}
                                    title="Download"
                                    size={1}
                                    /> <span> Download Image </span> </Button>

                                <Button type='button' className='m-3' outline>  <Icon path={mdiPencil}
                                    title="Download"
                                    size={.9}
                                />  <span> Edit Image </span> </Button>
                            </div>

                            <img
                                className='shadow border rounded pverflow-hidden'
                                ref={imageRef}
                                src={getImage}
                                alt="Youtube Thumbnail"
                                style={{ width: `${getImageDimension.width}%` }}
                            />
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default reduxForm({
    form: "YoutubeThumbnailDownloaderForm",
})(YoutubeThumbnailDownloader);


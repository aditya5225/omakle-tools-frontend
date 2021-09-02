
import React, { useState, useEffect } from 'react';
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



const YoutubeThumbnailDownloader = (props) => {
    const { handleSubmit, initialize } = props

    const getInputData = useSelector(state => state.form.YoutubeThumbnailDownloaderForm?.values);

    const [getImage, setGetImage] = useState(null);
    const [imageSize, setImageSize] = useState('maxresdefault');


    useEffect(() => {
        initialize({ youtube_url: 'https://www.youtube.com/watch?v=9bZkp7q19f0' })
    }, [])


    useEffect(() => {

        let results = getInputData?.youtube_url.match('[\\?&]v=([^&#]*)');
        let videoUrl = (results == null) ? getInputData?.youtube_url : results[1];
        let getImageUrl = `https://img.youtube.com/vi/${videoUrl}/${imageSize}.jpg`;
        setGetImage(getImageUrl);

    }, [getInputData])

    console.log(getImage);

    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/default.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/sddefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg

    const submitData = data => {
        // console.log(data);
    }


    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <form className="form p-0 m-0 text-center" onSubmit={handleSubmit(submitData)}>
                        <h1> Youtube Thumbnail Downloader </h1>

                        <Field
                            className='w-75 mx-auto text-center'
                            name="youtube_url"
                            component={RenderInputField}
                            type="text"
                        />

                        <img
                            src={getImage}
                            alt="Youtube Thumbnail"
                            style={{ width: '60%' }}
                        />
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default reduxForm({
    form: "YoutubeThumbnailDownloaderForm",
})(YoutubeThumbnailDownloader);



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
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@mdi/react'
import { mdiDownload, mdiPencil } from '@mdi/js';
import { fetchytThumbnailDataActions } from '../../../redux/actions/downloadYtThumbActions';

const YoutubeThumbnailDownloader = (props) => {
    const { handleSubmit, initialize } = props

    const getInputData = useSelector(state => state.form.YoutubeThumbnailDownloaderForm?.values);
    const ytThumbnailData = useSelector(state => state.downloadYtThumbReducer.ytThumbnail);

    const [getImage, setGetImage] = useState(null);
    const [imageSize, setImageSize] = useState('maxresdefault');
    const [getImageDimension, setGetImageDimension] = useState({});

    const dispatch = useDispatch();

    const imageRef = useRef(null);



    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/default.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/sddefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg


    useEffect(() => {
        initialize({ youtube_url: 'https://www.youtube.com/watch?v=9bZkp7q19f0' });
    }, [])


    useEffect(() => {

        let results = getInputData?.youtube_url.match('[\\?&]v=([^&#]*)');

        let videoUrl = (results == null) ? getInputData?.youtube_url : results[1];

        let getImageUrl = `https://img.youtube.com/vi/${videoUrl}/${imageSize}.jpg`;

        setGetImage(getImageUrl);

        dispatch(fetchytThumbnailDataActions({ image_url: getImageUrl }));

        imageRef.current.addEventListener("load", function () {

            if (imageSize == 'maxresdefault') {
                setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 25 })
            }
            else {
                setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 18 })
            }
        });

    }, [getInputData]);


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
                                    href={ytThumbnailData?.data}
                                    download='YTThumbnail.png'

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
                                id="imageid"
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



import React, { useState, useEffect, useRef } from 'react';
import {
    Container,
    Row,
    Col,
    Input,
    Button,
    Spinner,
    InputGroup,
    InputGroupButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@mdi/react'
import { mdiDownload, mdiPencil } from '@mdi/js';
import { fetchytThumbnailDataActions } from '../../../redux/actions/downloadYtThumbActions';
import { Link } from 'react-router-dom';


const YoutubeThumbnailDownloader = (props) => {

    const ytThumbnailData = useSelector(state => state.downloadYtThumbReducer.ytThumbnail);
    const ytThumbnailLoading = useSelector(state => state.downloadYtThumbReducer.loading);

    const [getImage, setGetImage] = useState(null);
    const [imageQuality, setImageQuality] = useState('Quality');
    const [getImageDimension, setGetImageDimension] = useState({});
    const [inputValue, setInputValue] = useState('https://www.youtube.com/watch?v=9bZkp7q19f0');

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    const dispatch = useDispatch();

    const imageRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {

        // inputRef.current.focus();

        let imageQlty = imageQuality == 'Quality' ? 'maxresdefault'
            : imageQuality == 'High Quality' ? 'maxresdefault'
                : imageQuality == 'Good Quality' ? 'sddefault'
                    : imageQuality == 'Medium Quality' ? 'hqdefault'
                        : imageQuality == 'Low Quality' ? 'mqdefault'
                            : imageQuality == 'Default' ? 'default'
                                : null;

        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;

        if (inputValue) {

            var match = inputValue.match(regExp);

            if (match && match[2].length == 11) {

                let results = inputValue.match('[\\?&]v=([^&#]*)');

                let videoUrl = (results == null) ? inputValue : results[1];

                let getImageUrl = `https://img.youtube.com/vi/${videoUrl}/${imageQlty}.jpg`;

                dispatch(fetchytThumbnailDataActions({ image_url: getImageUrl }));

                setGetImage(getImageUrl);

                imageRef.current.addEventListener("load", function () {

                    if (imageQuality == 'maxresdefault') {
                        setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 25 })
                    }
                    else {
                        setGetImageDimension({ height: this.naturalHeight, width: this.naturalWidth / 18 })
                    }
                });
            }
        }

    }, [inputValue, imageQuality]);


    return (
        <Container fluid={true}>
            <Row>
                <Col className='col-12'>
                    <form className="form p-0 m-0 text-center py-4" onSubmit={e => e.preventDefault()}>
                        <h2> Youtube Thumbnail Downloader </h2>

                        <InputGroup className='w-100 mx-auto'>
                            <Input
                                className='text-center'
                                name='youtube_url'
                                type='text'
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                            />
                            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                                <DropdownToggle caret>  {imageQuality} </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => setImageQuality('High Quality')}> High Quality </DropdownItem>
                                    <DropdownItem onClick={() => setImageQuality('Good Quality')}> Good Quality </DropdownItem>
                                    <DropdownItem onClick={() => setImageQuality('Medium Quality')}> Medium Quality </DropdownItem>
                                    <DropdownItem onClick={() => setImageQuality('Low Quality')}> Low Quality </DropdownItem>
                                    <DropdownItem onClick={() => setImageQuality('Default')}> Default </DropdownItem>
                                </DropdownMenu>
                            </InputGroupButtonDropdown>
                        </InputGroup>

                        <div>
                            <div>
                                <Button
                                    type='button'
                                    className='m-3'
                                    color='primary'
                                    href={ytThumbnailData?.data}
                                    download='YTThumbnail.png'
                                    disabled={ytThumbnailLoading}

                                >   <Icon path={mdiDownload}
                                    title="Download"
                                    size={1}
                                    /> <span> Download Image </span> </Button>

                                <Link to='/tools/image-editor-online' className={`${ytThumbnailLoading ? 'd-none' : 'd-initial'}`}>
                                    <Button type='button' className='m-3' outline>  <Icon path={mdiPencil}
                                        title="Download"
                                        size={.9}
                                    />  <span> Edit Image </span> </Button>
                                </Link>
                            </div>

                            <img
                                id="imageid"
                                className='shadow border rounded pverflow-hidden'
                                ref={imageRef}
                                src={getImage}
                                style={{ width: `${getImageDimension.width}%` }}
                            />
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default YoutubeThumbnailDownloader;

import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Input,
    Button,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';


const YoutubeThumbnailDownloader = () => {

    const getData = useSelector(state => state);

    console.log(getData);


    const youtube = (function () {
        let video, results;

        const getThumbnail = function (url, size) {
            if (url == null) {
                return '';
            }

            size = (size == null) ? 'big' : size;
            results = url.match('[\\?&]v=([^&#]*)');
            video = (results == null) ? url : results[1];

            if (size == 'small') {
                return `https://img.youtube.com/vi/${video}/hqdefault.jpg`;
            }

            return `https://img.youtube.com/vi/${video}/0.jpg`;
        };

        return {
            thumbnail: getThumbnail
        };
    }());

    const getthumbnail = youtube.thumbnail("https://www.youtube.com/watch?v=9bZkp7q19f0", "small")

    console.log(getthumbnail);

    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/1.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/2.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/3.jpg


    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/default.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/mqdefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/sddefault.jpg
    // https://img.youtube.com/vi/<insert-youtube-video-id-here>/maxresdefault.jpg


    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <div>
                        <Input type='text' />
                        <Button> Download </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default YoutubeThumbnailDownloader;

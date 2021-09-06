
import React, { useState, useEffect, useRef } from "react";
import TuiImageEditor from "tui-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import FileSaver from 'file-saver';
import { Button } from 'reactstrap';
import { useSelector } from "react-redux";
import { ImageEditorTheme } from './ImageEditorTheme';


const ImageEditorOnline = () => {

    const ytThumbnailData = useSelector(state => state.downloadYtThumbReducer.ytThumbnail);

    const editorBoxRef = useRef(null);

    useEffect(() => {
        let imageEditorInstData = new TuiImageEditor(editorBoxRef.current, {
            includeUI: {
                loadImage: {
                    path: ytThumbnailData?.data,
                    name: "download",
                },
                // menu: ["shape", "filter", "text"],
                // initMenu: "filter",
                uiSize: {
                    width: "100%",
                    height: "625px"
                },
                menuBarPosition: "left",
                theme: ImageEditorTheme,
            },
            cssMaxWidth: 900,
            // cssMaxHeight: 800,
            selectionStyle: {
                cornerSize: 20,
                rotatingPointOffset: 70,
            },
        });

        console.log(imageEditorInstData)

    }, [ytThumbnailData])



    return (
        <div style={{ height: '100vh', backgroundColor: 'white' }}>

            <div ref={editorBoxRef}> </div>
        </div>
    );
}

export default ImageEditorOnline;
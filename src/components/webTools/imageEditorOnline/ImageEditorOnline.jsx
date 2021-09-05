
import React, { useState, useEffect, useRef } from "react";
import TuiImageEditor from "tui-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import FileSaver from 'file-saver';


const ImageEditorOnline = () => {

    const [imageEditorInst, setImageEditorInst] = useState(null);

    const editorBoxRef = useRef(null);

    useEffect(() => {
        let imageEditorInstData = new TuiImageEditor(editorBoxRef.current, {
            includeUI: {
                // menu: ["shape", "filter", "text"],
                initMenu: "filter",
                uiSize: {
                    width: "100%",
                    height: "625px"
                },
                menuBarPosition: "left"
            },
            // cssMaxWidth: 700,
            // cssMaxHeight: 500,
            // selectionStyle: {
            //     cornerSize: 20,
            //     rotatingPointOffset: 70
            // }
        });

        setImageEditorInst(imageEditorInstData);
    }, [])

    console.log(imageEditorInst)


    return (
        <div>
            <div ref={editorBoxRef}></div>
        </div>
    );
}

export default ImageEditorOnline;
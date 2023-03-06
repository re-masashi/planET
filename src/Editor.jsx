import {
  useParams
} from "react-router-dom";
import React, { useRef } from 'react';

import EmailEditor from 'react-email-editor';
import temp from './temp.json'

const Editor = ()=>{
  const emailEditorRef = useRef(null);

    const exportHtml = () => {
      emailEditorRef.current.editor.exportHtml((data) => {
        const { design, html } = data;
        console.log('exportHtml', html);
      });
    };

    const onLoad = () => {
      // editor instance is created
      // you can load your template here;
      const templateJson = temp;
      emailEditorRef.current.editor.loadDesign(templateJson);
    }

    const onReady = () => {
      // editor is ready
      console.log('onReady');
    };
  const {noteid} = useParams() 
    return (
        <div className="h-screen">
          <section className="ml-[93px]">
             
              <EmailEditor
                ref={emailEditorRef}
                editorId="edith"
                style={{height:"100vh"}}
                appearance={{theme: "dark"}}
                onLoad={onLoad}
                onReady={onReady}
              />
          </section>
        </div>

    )
}

export {Editor}
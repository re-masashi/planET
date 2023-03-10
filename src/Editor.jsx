import {
  useParams
} from "react-router-dom";
import React, { useState, useRef } from 'react';

import EmailEditor from 'react-email-editor';
import temp from './temp.json'

const Editor = ()=>{
  const {id} = useParams()
  let templateJson = JSON.parse(localStorage.getItem('plans') ?? '[]').find(o => o.id === id).content ?? temp

  const emailEditorRef = useRef(null)    

  const exportHtml = () => {
      emailEditorRef.current.editor.exportHtml((data) => {
        const { design, html } = data
        let plans = JSON.parse(localStorage.getItem('plans') ?? '[]') ?? []
        let plans_c = plans
        plans.find((o,i)=>{
          if (o.id === id) {
              plans[i].content = design
              plans[i].html = html
          }
        })
        console.log(plans==plans_c)
        localStorage.setItem('plans', JSON.stringify(plans))
        console.log("localStorage modified")
        console.log(plans)
      });
    };

  const onLoad = () => {
      // editor instance is created
      // you can load your template here;
      emailEditorRef.current.editor.loadDesign(templateJson);
  }

  const onReady = () => {
      // editor is ready
      console.log('Ready!!');
  };
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
          <button onClick={exportHtml} title="Contact Sale"
              className="fixed z-90 bottom-10 right-8 
              bg-zinc-500 w-20 h-20 
              drop-shadow-lg flex justify-center items-center
              text-white text-2xl hover:bg-gray-700 hover:drop-shadow-2xl 
              hover:animate-bounce duration-300">
            Save
          </button>
        </div>


    )
}

export {Editor}
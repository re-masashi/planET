import { useState } from 'react'
import { getNotes } from './utils'
import {NoteOverview} from './NoteOverview'

function App() {
  return (
    <div id="content" className="h-full w-full">
      <section className=" ml-[93px]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Your Plans</h2>
                <p className="font-light text-gray-500 lg:mb-16 sm:text-xl text-gray-200">Create, update, delete, read or share your plans</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              { 
                getNotes().map((item, index, array)=>{
                  return (
                  <NoteOverview 
                    name={item.name}
                    id={item.id}
                    intro={item.description}
                    img={item.img ?? "https://placekitten.com/g/300/300"}
                    content={item.html}
                  />
                  )
                })
              }
            </div>
        </div> {/*perfect*/}
      </section>
    </div>    
  )
}

export default App

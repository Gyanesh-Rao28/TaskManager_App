import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const Noteitems = (props) => {
    const context = useContext(noteContext)
    const { deletenote } = context
    const { note, updateNote } = props


    const deletebtn = () => {
        deletenote(note._id)
    }

    return (
        <>
            
            {/* main */}
            <article className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">{note.date}</time>
                    <button className="relative z-10 rounded-full bg-indigo-600 px-3 py-1.5 text-white font-bold">{note.status}</button>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <p>
                            {note.title}
                        </p>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{note.description}</p>
                    <div className='mt-3'>

                        <button onClick={() => { updateNote(note) }} className="relative z-10 rounded-md bg-[#fbbf24] px-1.5 py-1 font-medium text-gray-800 text-xs mx-1">
                        Edit <i className="fa-solid fa-pen"></i>
                        </button>

                        <button onClick={deletebtn} className="relative z-10 rounded-md bg-[#ef4444] px-1.5 py-1 font-medium text-gray-800 text-xs mx-1">
                        Delete <i className="fa-solid fa-trash"></i>
                        </button>

                    </div>
                </div>
            </article>
        </>
    )
}

export default Noteitems
import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const Addnote = () => {

    const context = useContext(noteContext)
    const { addnote } = context

    const [notes, setnotes] = useState({
        title: "",
        description: ""
    })

    const OnChange = (e) => {
        setnotes({ ...notes, [e.target.name]: e.target.value })
    }


    const OnSubmit = (e) => {
        e.preventDefault()
        addnote(notes.title, notes.description)
        setnotes({ title: "", description: "" })
    }


    return (
        <>
            <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
                    <h1 className='mt-10 text-center text-5xl '>Add Your Notes Here</h1>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="/" method="POST">
                        {/* title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    value={notes.title}
                                    onChange={OnChange}
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* description */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    description
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={notes.description}
                                    onChange={OnChange}
                                    id="description"
                                    name="description"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="my-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={OnSubmit}
                            >
                                Add Note
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Addnote
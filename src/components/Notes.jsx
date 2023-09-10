import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Noteitems from './Noteitems'
import noteContext from '../context/notes/NoteContext'
import Addnote from './Addnote'

const Notes = () => {

  let history = useHistory()// eslint-disable-next-line
  const context = useContext(noteContext)
  const { note, getnote, editnote, setnote } = context// eslint-disable-next-line

  let Notes =[]

  const [modalIsOpen, setmodalIsOpen] = useState(false)

  const [enotes, setenotes] = useState({
    id:"",
    title: "",
    description: "",
    status: ""
  })


  const updateNote = (current) => {
    setmodalIsOpen(true)
    setenotes({ id:current._id ,title: current.title, description: current.description, status: current.status })
  }



  useEffect(() => {
    if (localStorage.getItem('token')) {
      getnote()// eslint-disable-next-line 
    }
    else {
      history.push("/login")
    }
    // eslint-disable-next-line
  }, [])


 
  const OnChange = (e) => {
    setenotes({ ...enotes, [e.target.name]: e.target.value })
  }

  const onFilter = (ele) => {

    Notes = note.filter((item)=>{
      return item.status===ele
    })
    setnote(Notes)
  }

  const OnSubmit = (e) => {
    e.preventDefault()
    editnote(enotes.id, enotes.title, enotes.description, enotes.status)
    setenotes({ id: "", title: "", description: "", status: "" })
    setmodalIsOpen(false)
  }

  return (
    <>

      {/* addnote component */}
      <Addnote />


      {/* edit component */}


      {/* <!-- Modal toggle --> */}
      <button onClick={() => { setmodalIsOpen(true) }} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="hidden w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="button">
        Toggle modal
      </button>

      {/* <!-- Main modal --> */}


      {modalIsOpen && <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <button onClick={() => { setmodalIsOpen(false) }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-whitetext" data-modal-hide="authentication-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              {/* close btn */}
            </button>

            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit Your Note</h3>

              <form className="space-y-6" action="/" method="POST">

                <div>
                  <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <input onChange={OnChange} value={enotes.title} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>

                <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <input onChange={OnChange} value={enotes.description} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>

                <div>
                  <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                  <input onChange={OnChange} value={enotes.status} type="text" name="status" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </div>

                <button type="submit" onClick={OnSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Save Changes
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
      }

      {/* Noteitems */}
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Notes</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your knowledge.</p>
          </div>

          <div className='my-4'>

            <button onClick={() => { getnote() }} className="mr-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              All
            </button>

            <button onClick={() => { onFilter("ToDo") }} className="mx-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              ToDo
            </button>

            <button onClick={() => { onFilter("Doing") }} className="mx-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Doing
            </button>

            <button onClick={() => {onFilter("Done") }} className="mx-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Done
            </button>

          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            {note.length === 0 ? <p className="mt-2 text-lg leading-8 text-gray-600">No Notes Avaialble</p> : note.map((note) => {
              return <Noteitems key={note._id} updateNote={updateNote} note={note} />
            })}

            {/* {note.map((note => {
              return <Noteitems key={note._id} note={note}  />
            }))} */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Notes
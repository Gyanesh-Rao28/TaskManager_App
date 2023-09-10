import React, { useState } from 'react'
import NoteContext from './NoteContext'

// const host = "http://localhost:5000"

const NoteState = (props) => {

    const notes = []
    const host = "https://taskbackend-lac.vercel.app/"

    const [note, setnote] = useState(notes)

    //get notes ; link : /api/notes/fetchallnotes
    const getnote = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token'),
            },
            mode: "cors"
        });
        const json = await response.json()
        setnote(json)

    }

    //Add a note

    const addnote = async (title, description, status="ToDo") => {
        // const response = await fetch("http://localhost:5000/api/notes/fetchallnotes", { 
        // http://localhost:5000/api/notes/addnote
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, status })
            ,
            mode: "cors"
        });

        const newnote = await response.json()
        setnote(note.concat(newnote))

    }

    //Delete a note

    // url http://localhost:5000/api/notes/deletenote/64a609d36a54b3353b5eb9af

    const deletenote = async (id) => {

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')

            },
            mode: "cors"
        });

        console.log(response)

        const newnotes = note.filter((note) => {
            return note._id !== id
        })
        setnote(newnotes)
    }

    //Edit a note

    const editnote = async (id, title, description, status) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description,status })
            ,
            mode: "cors"
        });

        
        let editNote = JSON.parse(JSON.stringify(note))
        
        editNote.forEach((note) => {
            if (note._id === id) {
                note.title = title
                note.description = description
                note.status = status
            }
        })

        const jsonData = await response.json() // eslint-disable-next-line
        console.log(jsonData)

        setnote(editNote)
    }

    return (
        <NoteContext.Provider value={{ note, addnote, deletenote, editnote, getnote, setnote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 
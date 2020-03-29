import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

const CREATE_MESSAGE = gql `
    mutation CreateMessage($title: String!, $content: String!, $author: String!) {
        createMessage(title: $title, content: $content, author: $author) {
            _id
        }
    }
`

export default function MessageForm(props) {

    const history = useHistory()

    const[createMessage] = useMutation(CREATE_MESSAGE)

    const [form, setForm] = useState({
        author: '',
        title: '',
        content: ''
    })

    const handleOnChange = e => {
        setForm({...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault()
        await createMessage({variables: {title: form.title, content: form.content, author: form.author}})
        history.push('/')
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={ e => onSubmit(e) }>

                            <div className="form-group">
                                <input type="text" placeholder="Author" className="form-control" name="author" value={ form.author } onChange={ e => handleOnChange(e) }/>
                            </div>

                            <div className="form-group">
                                <input type="text" placeholder="Write a title" className="form-control" name="title" value={ form.title } onChange={ e => handleOnChange(e) }/>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control" rows="2" placeholder="Content..." name="content" value={ form.content } onChange={ e => handleOnChange(e) }></textarea>
                            </div>

                            <button type="submit" className="btn btn-success btn-block">
                                Save
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>    
        </div>
    )
}

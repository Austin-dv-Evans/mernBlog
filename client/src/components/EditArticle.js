import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'



const EditArticle = (props) => {

    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [authorname, setAuthorname] = useState('')
    const [message, setMessage] = useState('')

    const changeOnClick = e => {
        e.preventDefault()
        const articles = {
            title,
            article,
            authorname
        }

        setTitle('')
        setArticle('')
        setAuthorname('')

        axios
            .put(`/articles/update/${props.match.params.id}`, articles)
            .then(res => setMessage(res.data))
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        axios.get(`/articles/${props.match.params.id}`)
            .then(res => [
                setTitle(res.data.title),
                setArticle(res.data.article),
                setAuthorname(res.data.authorname)
            ])
            .catch(err => console.log(err))
    }, [props])

    return (
        <FormContainer>
            <div className="container">
                <h1>Edit Article</h1>
                <span className="message">{message}</span>
                <form encType="multipart/form-data" onSubmit={changeOnClick} >
                <div className="form-group">
                    <label htmlFor="authorname">Author Name</label>
                    <input 
                        onChange={e => setAuthorname(e.target.value)}
                        type="text"
                        value={authorname} 
                        className="form-control" placeholder="Author Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        type="text" 
                        className="form-control" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="article">Article Body</label>
                    <textarea
                        value={article} 
                        onChange={e => setArticle(e.target.value)}
                        className="form-control" rows="7"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Update Article</button>
                </form>
            </div>
        </FormContainer>
    )
}

export default EditArticle

// Form Container 

const FormContainer = styled.div`
    margin: 3rem auto;
    padding: 4rem;
    width: 31.25rem;

    h1 {
        font-weight: 900;
        color: var(--dark-green)
    }

    .btn-primary {
        margin-top: 2rem;
        background: var(--dark-green);
        border: none;
        &:hover {
            background: var(--light-green)
        }
    }

    .message {
        font-weight: 900;
        color: tomato;
        padding: 1rem 1rem 1rem 0
    }
`
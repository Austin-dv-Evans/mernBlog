import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'



const AddArticle = () => {

    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [authorname, setAuthorname] = useState('')

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
            .post("/articles/add", articles)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <FormContainer>
            <div className="container">
                <h1>Add New Article</h1>
                <form encType="multipart/form-data" onSubmit={changeOnClick} >
                <div className="form-group">
                    <label htmlFor="authorname">Author Name</label>
                    <input 
                        onChange={e => setAuthorname(e.target.value)}
                        type="text" 
                        className="form-control" placeholder="Author Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        onChange={e => setTitle(e.target.value)}
                        type="text" 
                        className="form-control" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="article">Article Body</label>
                    <textarea 
                        onChange={e => setArticle(e.target.value)}
                        className="form-control" rows="7"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Post Article</button>
                </form>
            </div>
        </FormContainer>
    )
}

export default AddArticle

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

`
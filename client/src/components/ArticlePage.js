import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import spinner from '../components/layout/loadingIcon.jpg'
import { Link } from 'react-router-dom'


const ArticlePage = (props) => {

    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [authorname, setAuthorname] = useState('')

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
        <MainArticleContainer>
            {!title || !article || !authorname ? <img src={spinner} alt="loading..." /> :
            <>
                <h2>{title}</h2>
                <p>{article}</p>
                <p className="badge badge-secondary">{authorname}</p>
                <br/>
                <Link to="/" className="btn btn-primary">
                    Back to Home
                </Link>
            </>
            }
        </MainArticleContainer>
    )
}

export default ArticlePage

//Main container styles

const MainArticleContainer = styled.div`
    margin: 6rem auto;
    padding: 3rem 14rem;

    h2 {
        text-align: center;
        font-weight: 900;
        color: var(--dark-green);
    }

    img {
        width: 20rem;
        display: block;
        margin: 0 auto;
    }

    .btn-primary {
        margin-top: 1.5rem;
        background: var(--dark-green);
        border: none;
        &:hover {
            background: var(--light-green)
        }
    }
    
`

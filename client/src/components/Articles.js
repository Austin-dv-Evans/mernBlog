import React from 'react'
import styled from 'styled-components'
import spinner from '../components/layout/loadingIcon.jpg'

const Articles = ({posts}) => {
    return (
        <MainContainer>
            {!posts.length ? <img src={spinner} alt="loading"/> :
            posts.map((article, key) => (
                <div className="container">
                <h2>{article.title}</h2>
                <p>{article.article}</p>
                <span className="badge badge-secondary p-2">{article.authorname}</span>
                <div className="row my-3" >
                    <div className="col-sm-2">
                        <a href="/add" className="btn btn-outline-success">
                            Edit
                        </a>
                    </div>
                    <div className="col-sm-2">
                        <a href="/add" className="btn btn-outline-danger">
                            Delete
                        </a>
                    </div>
                </div>
                </div>
            ))}
        </MainContainer>
    )
}

export default Articles

//Main article container\
const MainContainer = styled.div`
    margin: 7rem 0;

    img {
        width: 20rem;
        display: block;
        margin: 0 auto;
    }
`
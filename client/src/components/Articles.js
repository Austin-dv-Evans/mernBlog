import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import spinner from '../components/layout/loadingIcon.jpg'
import axios from 'axios'


const Articles = ({posts}) => {

    const [article, setArticle] = useState([])
    //Delete Article by id
    const deleteArticle = id => {
        axios
            .delete(`/articles/${id}`)
            .then(res => alert(res.data))
            setArticle(article.filter(elem => elem._id !== id))
    }


    return (
        <MainContainer>
            {!posts.length ? <img src={spinner} alt="loading"/> :
            posts.map((article, key) => (
                <div className="container" key={key}>
                <Link to={{
                        pathname: `/article/${article._id}`
                    }}>
                <h2>{article.title}</h2>
                </Link>
                <p>{article.article}</p>
                <span className="badge badge-secondary p-2">{article.authorname}</span>
                <div className="row my-3" >
                    <div className="col-sm-2">
                        <Link to={`/update/${article._id}`} className="btn btn-outline-success" >
                            Edit
                        </Link>
                    </div>
                    <div className="col-sm-2">
                        <button 
                            onClick={() => deleteArticle(article._id)} 
                            className="btn btn-outline-danger">
                            Delete
                        </button>
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
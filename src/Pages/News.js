import React from 'react'
import Post from '../Components/Post'
import PostDate from '../data/data.json' 

export default function News() {
    return (
        <>
            <h1>Here Are The Latest News</h1>
            {PostDate.news.map((post, index)=>{
                return <Post key={index} id={index} />
            })}
        </>
    )
}

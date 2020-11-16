import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from "react-bootstrap";
import PostDate from '../data/data.json';

export default function Post(props) {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>{PostDate.news[props.id].title}</h1>
                <p>{PostDate.news[props.id].content}</p>
                <p>{PostDate.news[props.id].date}</p>
            </Container>
        </Jumbotron>
    ) 
}

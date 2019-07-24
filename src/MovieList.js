import React from 'react';
import {ListGroup} from 'react-bootstrap';
import LoadingHOC from './LoadingHOC';

function MovieList({movies}) {
    return(
        <ListGroup variant="flush" className="movies">
            {movies.map((el, index) => 
                <ListGroup.Item key={index} className="item">
                    <img src={el.image} />
                    <h1>{el.title}</h1>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}
export default LoadingHOC(MovieList);

import React from 'react';
import {Spinner} from 'react-bootstrap';



const SpinnerLoad = () => {
        return (
            <Spinner animation="border" role="status" className="loading">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }

export default SpinnerLoad;
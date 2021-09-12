import React from "react";
import { Spinner } from 'reactstrap';

const Loading = () => {
    return (
        <div className={'text-center'}>
            <Spinner color="light" />
        </div>
    )
}

export default Loading;
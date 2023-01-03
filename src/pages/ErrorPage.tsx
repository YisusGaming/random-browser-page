import {  } from 'react-router-dom';

interface IProps {
    message: string,
    status: string | number
}

export default function ErrorPage(props : IProps) {
    return <h1>{props.message} | {props.status}</h1>
}
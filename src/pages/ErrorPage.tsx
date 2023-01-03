import { Link } from 'react-router-dom';
import './css/errorPage.css';

interface IProps {
    message: string,
    status: string | number,
    link: string,
    linkText: string
}

export default function ErrorPage(props : IProps) {
    return (
        <div className="err-page">
            <h1>{props.message} | {props.status}</h1>
            <Link to={props.link}>{props.linkText}</Link>
        </div>
    );
}
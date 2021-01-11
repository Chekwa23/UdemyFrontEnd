import React from 'react'
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Contact(props) {
    // console.log(props);

    // setTimeout(() => {
    //     props.history.push("/about")
    // }, 2000);

    return (
        <div>
            <Modal />
            <div className="ui raised very padded text container segment" style={{marginTop: "80px"}}>
                <Link to="/card/alex" className="ui header">Alex</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="ui raised very padded text container segment" style={{marginTop: "80px"}}>
                <Link to="/card/max" className="ui header">Max</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="ui raised very padded text container segment" style={{marginTop: "80px"}}>
                <Link to="/card/leo" className="ui header">Leo</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div>
    )
}

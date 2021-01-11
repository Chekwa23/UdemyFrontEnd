import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./components/SingleComment";
import UserCard from "./components/UserCard";
import profile1 from "./images/pic-1.jpg";
import profile2 from "./images/pic-2.jpg";
import profile3 from "./images/pic-3.jpg";

const App = () => {
    return (
        <div className="ui comments">
            <UserCard>
                Hello
            </UserCard>
            <UserCard >
                <SingleComment name="Alex" date="Toady at 6:00pm" text="it's amazing" picture={profile1}/>
            </UserCard>
            <UserCard >
                <SingleComment name="Jack" date="Toady at 9:00pm" text="great job" picture={profile2}/>
            </UserCard>
            <UserCard >
                <SingleComment name="Sarah" date="Toady at 10:00pm"text="cyclones for the win!" picture={profile3}/>
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
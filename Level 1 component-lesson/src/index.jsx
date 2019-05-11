import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

//App is the main component
//Comment is children of ApprovalCard, belong to its props

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
            Fuck
            </ApprovalCard>
            
            <ApprovalCard>
            <Comment author="Minh" time="last week" content="Not so Bad"/>
            </ApprovalCard>       
        
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

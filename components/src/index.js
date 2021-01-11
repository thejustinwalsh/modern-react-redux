import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const date = () => {
  return faker.date.past().toDateString();
};

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Gregor"
          image={faker.image.image()}
          date={date()}
          comment={faker.lorem.sentences(3)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Irwin"
          image={faker.image.image()}
          date={date()}
          comment={faker.lorem.sentences(2)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Telly"
          image={faker.image.image()}
          date={date()}
          comment={faker.lorem.sentences(4)}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

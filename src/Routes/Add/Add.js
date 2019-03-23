import React from "react";
import gql from "graphql-tag";
import Editor from "../../Components/Editor";
import { Mutation } from "react-apollo";

const ADD_NOTE = gql`
    mutation createNote($title: String!, $content: String!) @client {
        createNote(title: $title, content: $content) {
            id
        }
    }
`;

export default class Edit extends React.Component {
    render() {
        return (
            <Mutation mutation={ADD_NOTE}>
                {createNote => {
                    this.createNote = createNote;
                    return <Editor onSave={this._onSave} />;
                }}
            </Mutation>
        );
    }
    _onSave = (title, content) => {
        const {
            history: { push }
        } = this.props;
        if (title !== "" && content !== "") {
            this.createNote({ variables: { title, content } });
            push("/");
        }
    };
}

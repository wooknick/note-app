import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotesContainer from "../../Routes/Notes";
import Note from "../../Routes/Note";
import Add from "../../Routes/Add";
import Edit from "../../Routes/Edit";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path={"/note-app/"} component={NotesContainer} />
                    <Route path={"/note-app/add"} component={Add} />
                    <Route path={"/note-app/note/:id"} component={Note} />
                    <Route path={"/note-app/edit/:id"} component={Edit} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      noteText: ' ',
      notes: [],  //An array to hold every single note 
    }
  }
  
  updateNoteText(noteText){
    this.setState({ noteText: noteText.target.value })
  }

  addNote(){
    if (this.state.noteText === ' ') {return}

    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({noteText: ' '});
    this.textInput.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        let notesArr = this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({noteText: ' '});
    }
  }

  deleteNote(index){
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({notes: notesArr})
  }

  render() {
    let notes = this.state.notes.map((val, key) => {
      return <Note key = {key} text={val}
            deleteMethod={ () => this.deleteNote(key)} />
  
    })


    return (
      <div className="container">
        <div className = "header">React ToDo application</div>
        {notes}


        <div className = "btn" onClick= {this.addNote.bind(this)}>Add</div>

        <input type= "text"
          ref={((input) => {this.textInput = input})}
          className = "textInput"
          placeholder = "Add note here"
          value = {this.state.noteText}
          onChange = {noteText => this.updateNoteText(noteText)}
          onKeyPress = {this.handleKeyPress.bind(this)}//Makes it so that pressing "Enter" has the same effect as pressing a button. 
          />
      </div>
    );
  }
}

export default App;

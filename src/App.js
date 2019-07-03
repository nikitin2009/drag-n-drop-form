import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

import CommentsList from './CommentsList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      commentText: '',
      comments: localStorage.getItem('comments') 
                ? JSON.parse(localStorage.getItem('comments'))
                : [],
      files: [],
    };

    this.onCommentChange = this.onCommentChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onDrop(files) {
    this.setState({
      files: files.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))
    })
  };

  onCommentChange(e) {
    const commentText = e.target.value;

    this.setState({ commentText });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const newComment = {
      text: this.state.commentText
    };

    this.addComment(newComment);
  }

  addComment(comment) {
    this.setState(({ comments }) => ({
      comments: [...comments, comment],
      commentText: ''
    }),
    this.saveToLocal);
  }

  saveToLocal() {
    localStorage.setItem('comments', JSON.stringify(this.state.comments));
  }

  render() {
    const { commentText, comments } = this.state;

    const files = this.state.files.map(file => (
      <li key={file.name} className="mb-2">
        { /^image/.test(file.type)
          ? <img
              src={file.preview}
              alt={file.name}
              className="img-thumbnail"
            />
          : <a href={file.preview}>{file.name}</a>
        }
      </li>
    ));

    return (
      <div className="App container pt-3">
        <div className="row justify-content-center">
          <div className="col-md-6">

          { comments.length
            ? <CommentsList comments={comments} />
            : null
          }

            <h3>Leave a comment</h3>
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="comment" className="sr-only">Your comment:</label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="5"
                  onChange={this.onCommentChange}
                  value={commentText}
                ></textarea>
              </div>
              <Dropzone onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                  <div className="form-group">
                    <div {...getRootProps({className: 'dropzone p-3 mb-2 bg-light'})}>
                      <input {...getInputProps()} />
                      <div className="text-center">Drag 'n' drop some files here, or click to select files</div>
                    </div>
                    { files.length
                      ? <div>
                        <h4>Files: </h4>
                        <ul>{files}</ul>
                      </div>
                      : null
                    }
                  </div>
                )}
              </Dropzone>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

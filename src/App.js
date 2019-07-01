import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onDrop = (files) => {
      this.setState({
        files: files.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      })
    };
    this.state = {
      files: []
    };
  }

  render() {
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

            <h3>Leave a comment</h3>
            <form onSubmit={ e => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="comment" className="sr-only">Your comment:</label>
                <textarea className="form-control" id="comment" rows="5"></textarea>
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

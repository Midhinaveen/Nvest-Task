import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folders: ['folder1', 'folder2']
    }
    this.openSingleFolder = this.openSingleFolder.bind(this)
    this.addNewFolder = this.addNewFolder.bind(this)
  }

  openSingleFolder(folder) {
    console.log(folder)
    
  }
  addValue = (folders,e)=>{
    e.preventDefault()
    console.log(folders)
    console.log("hi")
    this.props.history.push(`/newFolders/{folders}`)
  }

  addNewFolder() {
    console.log("adding new folder")
    let folderName = document.getElementById('newFolderName').value
    console.log(folderName)
    let existingFolders = this.state.folders;
    existingFolders.push(folderName)
    this.setState({
      folders: existingFolders
    })

    document.getElementById('newFolderName').value = ""

    document.getElementById('newFolderModal').style.display = 'none'

  }

  render() {
    let folders;
    {
      folders = this.state.folders.map((fldr) => {
        return <div className="folder" style={{
          position: 'relative',
          textAlign: 'center',
          display: 'block',
          float: 'left'
        }}>
          <ion-icon name="folder"
            style={{ fontSize: '100px', color: '#03A9F4' }}>

          </ion-icon>

          <span style={{
            color: "white",
            position: "absolute",
            top: "50%",
            left: "50%",

            transform: "translate(-50%, -50%)"
          }}>{fldr}</span>
        </div>

      })
    }
    return (
      <div className="foldersContainer">
       
        <Link className="nav-link " to="/newfolders" >{folders}</Link>
        <div className="newFolderButton" style={{
          display: "block",
          float: "left",
          padding: "2.5%"
        }}>
          <ion-icon name="add"
            style={{ fontSize: '50px', color: 'grey', }}
            onClick={() => document.getElementById('newFolderModal').style.display = 'block'
            }>
          </ion-icon>

        </div>
        <div id="newFolderModal" className="w3-modal">
          <div className="w3-modal-content" style={{
            width: "400px",
            padding: "3%",
            paddingTop: "5%"
          }}>
            <div className="w3-container" style={{ textAlign: 'center' }}>

              <span onClick={() => document.getElementById('newFolderModal').style.display = 'none'}
                className="w3-button w3-display-topright">&times;</span>
              <input type="text" name="newFolderName" id="newFolderName" className="w3-input " placeholder="Type Folder Name" />
              <button type="button" className="w3-btn w3-blue w3-margin-top"
                onClick={() => { this.addNewFolder() }} >Add New Folder</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;

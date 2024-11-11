
import './App.css'
import DynamicForm from './components/Component State and Props'
import UniqueForm from './components/Creating Unique Identifiers for Form Inputs'
import FileUploader from './components/FileUploads'
import ItemList from './components/Generating Unique Keys for List Items'
import SessionManager from './components/SessionManagement'
import EventTracker from './components/Tracking Events or Actions'

function App() {
 

  return (
    <>
    <ItemList/>
    <UniqueForm/>
    <SessionManager/>
    <EventTracker/>
    <FileUploader/>
    <DynamicForm/>
    </>
  )
}

export default App

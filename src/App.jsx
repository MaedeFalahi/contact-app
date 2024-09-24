import './App.css'
import Contacts from './Components/Contacts'
import UserProvider from './context/UserProvider'


function App() {

  return (
    
    <UserProvider>
        <Contacts />
    </UserProvider>    
  )
}

export default App

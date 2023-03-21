import { Routes as Switch, Route, BrowserRouter} from "react-router-dom"
import Navbar from "./componentes/Navbar/Navbar"
import Create from './views/Create/Create'
import Delete from './views/Delete/Delete'
import Update from './views/Update/Update'
import Home from './views/Home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route path="/" element={<Home/>} />
      <Route path="/Create/" element={<Create/>} />
        <Route path="/Update/" element={<Update/>} />
        <Route path="/Delete/" element={<Delete/>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
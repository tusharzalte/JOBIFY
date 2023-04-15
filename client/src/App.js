
import {BrowserRouter,Routes,Route,Link, Form} from "react-router-dom"
import {Register,Error,Landing,Protectedroute} from "./pages"

import {  AddJob,AllJob,Profile,Stats,SharedLayout} from "./pages/dashboard"

function App() {
  return (
    <BrowserRouter>
    {/* <nav>
      <Link to="/">dashboard</Link>
      <Link to="/register">register</Link>
      <Link to="/landing">landing</Link>
    
    </nav> */}

    <Routes>
     <Route path="/" element={
      <Protectedroute>
        <SharedLayout/>
      </Protectedroute>
    }>
     <Route index element={<Stats />} /> 
      <Route path="stats" element={<Stats/>}/>
      <Route path="all-jobs" element={<AllJob/>}/>
      <Route path="add-job" element={<AddJob/>}/>
      <Route path="profile" element={<Profile/>}/>

     </Route>
     <Route path="/register" element={<Register/>}/>
     <Route path="/Landing" element={<Landing />} />
     <Route path="*" element={<Error />}/>
    
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;

import { Fragment } from 'react'
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import TemplateDeafault from "./template/templateDeafault/TemplateDeafault";

function App() {
  return (
    <div className="App">
    <Routes>
      {publicRoutes.map((route,index)=>{
        let Layout: any = TemplateDeafault;
        if(route.layout){
          Layout = route.layout
        }else if(route.layout === null){
          Layout = Fragment
        }
        let Pages = route.component
        return <Route key={index} path={route.path} element={<Layout><Pages/></Layout>}/>
      })}
    </Routes>
    </div>
  );
}

export default App;

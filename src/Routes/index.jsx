import { Route } from "react-router-dom";
import { Path } from "../utils/PathConstraint";
import App from "../App";
import Home from "../Pages/Home/Home";

export const AllRoutes=(
    <Route path={Path.ROOT} element={<App/>}>
     <Route path={Path.HOME} element={<Home/>}/>
     <Route path={Path.CONTACT} lazy={()=>import("../Pages/contact")}/>
     <Route path={Path.About} lazy={()=>import("../Pages/about")}/>
     {/* <Route path={Path.PROPERTY} lazy={()=>import("../Pages/property")}/> */}
     <Route path={Path.PROPERTY_AGENT} lazy={()=>import("../Pages/propertyAgent")}/>
     <Route path={Path.PROPERTY_LIST} lazy={()=>import("../Pages/propertyList")}/>
     <Route path={Path.PROPERTY_TYPE} lazy={()=>import("../Pages/propertyType")}/>
     <Route path={Path.TESTIMONIAL} lazy={()=>import("../Pages/Testimonial")}/>
    </Route>
)
  

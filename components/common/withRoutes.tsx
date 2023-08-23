// import {
//     useLocation,
//     useNavigate,
//     useParams
// } from "react-router-dom";
import { useParams } from "next/navigation";

function withRoutes(Component: any) {
  function ComponentWithRouterProp(props: any) {
    // let location = useLocation();
    // let navigate = useNavigate();
    let params = useParams();
    // return <Component {...props} router={{ "location", "navigate", params }} />;
    return <Component {...props} router={{ params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRoutes;

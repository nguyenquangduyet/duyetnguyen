import React, {lazy, Suspense} from "react";
import {Skeleton} from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import {helper} from '../helper/commom';


const SearchPage = lazy(() => import('../page/search/index'));
const PopularPage = lazy(() => import('../page/popular/index'));
const ComingPage = lazy(() => import('../page/upcoming/index'));
const LoginPage = lazy(() => import('../page/login/index'));
const DetailPage = lazy(() => import('../page/detail/index'));


const PrivateRouter = ({children,...rest}) =>{
    const auth = helper.isAuthentcated();
    return(
        <Route
            {...rest}
            render={({ location}) => auth
                    ?(children)
                    :<Redirect to={{ pathname: '/', 
                    state:{from: location}
                }} />
        }
        />
    )
}

const IsLoginRouter = ({children,...rest}) =>{
    const auth = helper.isAuthentcated();
    return(
        <Route
            {...rest}
            render={({ location}) => auth
                    ?<Redirect to={{ pathname: '/search-movie', 
                    state:{from: location}
                }} />:(children)
        }
        />
    )
}

const RouterMovie = () => {
    return (
        <Router>
            <Suspense fallback={<Skeleton active/>}>
                <Switch>
                    <IsLoginRouter path="/" exact>  
                        <LoginPage/>
                    </IsLoginRouter>
                    <PrivateRouter path="/popular-movie">
                        <PopularPage/>
                    </PrivateRouter>
                    <PrivateRouter path="/coming-movie">
                        <ComingPage/>    
                    </PrivateRouter>
                    <PrivateRouter path="/search-movie">
                        <SearchPage/>    
                    </PrivateRouter>
                    <PrivateRouter path="/movie-detail/:slug~:id">
                        <DetailPage/>
                    </PrivateRouter>
                </Switch>
            </Suspense>
        </Router>
    )
}
export default React.memo(RouterMovie);
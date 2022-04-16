import {Routes, Route, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {Homepage, Userspage, Postspage, Singlepostpage, Singleuserpage, Notfoundpage} from "./pages";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/home'}/>}> </Route>
                <Route path={'home'} element={<Homepage/>}> </Route>
                <Route path={'users'} element={<Userspage/>}>>
                    <Route path={':userId'} element={<Singleuserpage/>}>> </Route>
                </Route>
                <Route path={'posts'} element={<Postspage/>}>> </Route>
                {/*<Route path={`:UserID`} element={<Singlepostpage/>}>> </Route>*/}

                <Route path={'*'} element={<Notfoundpage/>}>> </Route>
            </Route>
        </Routes>

    )
}

export default App;

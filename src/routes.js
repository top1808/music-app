import NotFoungPage from "./pages/NotFoundPage/NotFoundPage"
import HomePage from "./pages/HomePage/HomePage"
import IndividualPage from "./pages/IndividualPage/IndividualPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import MVPage from "./pages/MVPage/MVPage"
import VideoClipPage from "./pages/VideoClipPage/VideoClipPage"
import Top100Page from "./pages/Top100Page/Top100Page"
import ListSingerPage from "./pages/ListSingerPage/ListSingerPage"
import SingerPage from "./pages/SingerPage/SingerPage"


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/individual',
        exact: false,
        main: () => <IndividualPage/>
    },
    {
        path: '/new-song',
        exact: false,
        main: () => <NotFoungPage/>
    },
    {
        path: '/top-100/:slug',
        exact: false,
        main: ({match}) => <Top100Page match={match}/>
    },
    {
        path: '/MV/:slug',
        exact: false,
        main: ({match}) => <MVPage match={match}/>
    },
    {
        path: '/singers',
        exact: true,
        main: () => <ListSingerPage/>
    },
    {
        path: '/singers/:slug/:id',
        exact: false,
        main: ({history, match}) => <SingerPage history={history} match={match}/>
    },
    {
        path: '/video-clip/:id',
        exact: false,
        main: ({history,match}) => <VideoClipPage history={history} match={match}/>
    },
    {
        path: '/login',
        exact: false,
        main: () => <LoginPage/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoungPage />
    }
]

export default routes;
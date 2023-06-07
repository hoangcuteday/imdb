import HomeLayout from "../layout/HomeLayout";
import DetailMoviePage from "../pages/DetailMoivePage";
import DetailTvPage from "../pages/DetailTvPage";
import HomePage from "../pages/HomePage";

const publicRouter = [
      {
        path: '/',
        element: HomePage,
        layout: HomeLayout
      },
      {
        path: '/movie/:id',
        element: DetailMoviePage,
        layout:HomeLayout,
      },
      {
        path: '/tv/:id',
        element: DetailTvPage,
        layout:HomeLayout,
      }
]

export { publicRouter };
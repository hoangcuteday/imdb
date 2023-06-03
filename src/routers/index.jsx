import HomeLayout from "../layout/HomeLayout";
import HomePage from "../pages/HomePage";

const publicRouter = [
      {
        path: '/',
        element: HomePage,
        layout: HomeLayout
      }
]

export { publicRouter };
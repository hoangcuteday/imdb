import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import { publicRouter } from "./routers";

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {
              publicRouter.map((value, index) => {
                const Page = value.element;
                const Layout = value.layout;
                return (
                  <Route
                    key={index}
                    path={value.path}
                    element=
                    {
                      <Layout>
                        <Page />
                      </Layout>
                    } />
                )
              })
            }
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

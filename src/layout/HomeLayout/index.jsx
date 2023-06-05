import Footer from "../../pages/Components/Footer";
import Header from "../../pages/Components/Header";

function HomeLayout({ children }) {
    return (
        <div className="flex flex-col">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default HomeLayout;
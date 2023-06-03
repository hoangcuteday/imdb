import Header from "../../pages/Components/Header";

function HomeLayout({ children }) {
    return (
        <div className="flex flex-col">
            <Header />
            {children}
        </div>
    );
}

export default HomeLayout;
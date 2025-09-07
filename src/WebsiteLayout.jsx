import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";

const WebsiteLayout = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col">
            <ScrollToTop />
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default WebsiteLayout;
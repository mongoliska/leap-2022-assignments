import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";
import SlimNav from "../components/SlimNav"

export default function Article() {
    return (
        <>
            <SlimNav />

            <div className="container">
                <div className="row">
                    <div className="col-7"><MainPage /></div>
                    <div className="col-1"></div>
                    <div className="col-4"><SideBar /></div>
                </div>
            </div>

        </>
    );
}
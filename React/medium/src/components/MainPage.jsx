import Cassie from "./Cassie"
import SocialMedia from "./SocialMedia"

export default function MainPage() {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="profile d-flex ">
                    <Cassie />
                    <div className="title">
                        <p>Cassie Kozyrkov</p>
                        <p>Dec 27, 2022 · 9 min read</p>
                    </div>
                </div>
                <div className="logos">
                    <SocialMedia />
                </div>


            </div>
        </>




    )
}
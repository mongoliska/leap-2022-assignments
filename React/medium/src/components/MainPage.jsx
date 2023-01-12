import Cassie from "./Cassie"
import SocialMedia from "./SocialMedia"
import shampansk from "../images/shampansk.png"
import Claps from "./icon/Claps"
import Comment from "./icon/Comment"
import Share from "./icon/Share"
import Save from "./icon/Save"
import MainButton from './MainButton'
import PlusMail from './PlusMail'
import AritcleText from "./AritcleText"


export default function MainPage() {

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="profile d-flex mt-2">
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
            <div className="pretext">
                    <h3>The best New Year’s resolutions you can make</h3>
                    <p>Resolutions that actually work, according to a decision scientist</p>
                    <p>Happy almost-2023! Chances are that you’re contemplating making some New Year’s resolutions, so let’s get you set up for success with a few resolutions that will unlock the best version of you.</p>
            </div>
            <div className="shampansk">
                <img src={shampansk} alt="" />
            </div>
            <div className="gol d-flex justify-content-center">All copyright belongs to the author.</div>

            <div className="text-1">
                <p><b>#1 — Resolve to stop borrowing resolutions</b></p>
                <p>Different people are different, so what works for you might not be what works for anyone else.</p>
                <p>Understanding this is the single biggest step you can take in the direction of success. That’s precisely why I’m not going to do the standard guru thing of suggesting you copy my exact wellness plan after proving to you that I have a stack of credentials (I do) and I’m in shape (I am). My plan fits me, but <b>you need a plan that fits you.</b></p>
            </div>
            <div className="text-2">
                <p><b>Quit borrowing other people’s resolutions</b></p>
                <p>Whenever you’re tempted to copy your favorite celeb’s latest health plan, take a moment to think about some potential reasons that person is able to stick with it (assuming they are) which you might not know about. Do they have a private chef who prevents them from making food decisions? Do they secretly loooove cabbage? Is their job less stressful than yours? And so on.</p>
                
                <div className="icons d-flex justify-content-between py-2">
                    <div className="first">
                    <ul className="icon-menu d-flex align-items-center">
                    <li className="iconby px-4">
                       <Claps /> 1.5k
                    </li>
                    <li className="iconyb">
                        <Comment /> 30
                    </li>
                    </ul>
                </div>
                <div className="second">
                    <ul className="icon-menu d-flex align-items-center">
                        <li className="iconby px-4">
                            <Share /> 
                        </li>
                        <li><Save /></li>
                    </ul>
                </div>
                </div>

                <div className="d-flex py-2 gap-2">
                <button className="t-button">Resolutions</button>
                <button className="t-button">Desicion Making</button>
                <button className="t-button">Psychology</button>
                <button className="t-button">Self Improvement</button>
                <button className="t-button">Science</button>
                </div>
            </div>

            <div className="text-3 d-flex justify-content-between p-3">
                    <div className="one">
                    <p>More from Cassie Kozyrkov</p>
                    </div>
                    <div className="two">
                    <MainButton>Follow</MainButton>
                    <span className="p-2"><MainButton><PlusMail /></MainButton></span>
                    </div>
            </div>

            <div className="text-3 d-flex justify-content-between p-3">
                <div>
                    <AritcleText />
                </div>
            </div>
                
        </>




    )
}
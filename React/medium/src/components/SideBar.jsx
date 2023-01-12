import Cassie from "./Cassie"
import MainButton from './MainButton'
import PlusMail from './PlusMail'

export default function SideBar () {
    return (
        <div className="mt-3">
            <div className="profile">
                <img src={Cassie} alt="" />
                <p>Cassie Kozyrkov</p>
                <p>115K Followers</p>
                <p>Chief Decision Scientist, Google. ❤️ Stats, ML/AI, data, puns, art, theatre, decision science. All views are my own. twitter.com/quaesita</p>
            </div>
            <div className="pinkbutton">
                <MainButton>Follow</MainButton>
                <span className="p-2"><MainButton><PlusMail /></MainButton></span>
            </div>

            <div className="my-3">
                More from Medium
            </div>


        </div>
    )
};
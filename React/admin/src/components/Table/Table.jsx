import Tbody from "./Tbody";
import Thead from "./Thead";

export default function Table () {
    return (
        <>
        <table className="table table-bordered table-hover">
          <Thead/>
          <Tbody/>
        </table>
        </>
    )
}
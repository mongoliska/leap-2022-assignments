import { SlPencil, SlTrash} from "react-icons/sl";

export default function Tbody () {
    return (
        <>
        <tbody>
            <tr>
              <td scope="row">1</td>
              <td>How to become peaceful</td>
              <td>...</td>
              <td style={{ whiteSpace: 'nowrap' }}>
                <button className="btn btn-sm btn-outline-primary me-2"><SlPencil/></button>
                <button className="btn btn-sm btn-outline-danger"><SlTrash/></button>
              </td>
            </tr>
          </tbody>
        </>
    );
}

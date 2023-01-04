export default function Tbody () {
    return (
        <>
        <tbody>
            <tr>
              <td scope="row">1</td>
              <td>How to become peaceful</td>
              <td>...</td>
              <td style={{ whiteSpace: 'nowrap' }}>
                <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                <button className="btn btn-sm btn-outline-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </>
    )
}
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlPencil, SlTrash } from 'react-icons/sl';
import { toast } from 'react-toastify';
import parse from 'html-react-parser'

const ListItem = ({ item, index, onEdit }) => {
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  const deleteItem = () => {
    let statusCode;
    fetch('https://demo-api-one.vercel.app/api/articles', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({ id: item.id }),
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })
      .then((data) => {
        console.log(statusCode)
        if (statusCode === 200) {
          toast.success('amjilttai ustgalaa')
          setDeleted(true);
        } else {
          if (statusCode === 403 || statusCode === 401) {
            navigate('/signout');
          }
          toast.error(data.message);
        }
      }).catch((err) => {
        console.log(err);
        toast.error('aldaa garlaa');
      });
  };
  if (deleted) return <></>;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.text && parse(item.text)}</td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(item)}>
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          <SlTrash />
        </button>
      </td>
    </tr>
  );
}

export default function CategoryList({ items, onEdit }) {

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Text</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <ListItem item={item} index={index + 1} key={`list-item-${index}`} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}


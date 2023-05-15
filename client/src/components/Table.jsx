import { useEffect } from "react";
import { Table as TableBootstrap } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Table({ data, setData, setDefaultValues, setIsFormEdited }) {
  useEffect(() => {
    axios
      .get("http://localhost:4001/users")
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));
  }, [data]);

  const handleUserDelete = (id) => {
    axios.delete(`http://localhost:4001/users/${id}`);
  };

  const handleUserEdit = (item) => {
    setDefaultValues(item);
    setIsFormEdited(true);
  };

  return (
    <div className="w-[100%] mt-12 mb-12">
      {data.length !== 0 && <TableBootstrap
        striped
        bordered
        hover
        variant="dark"
        className="w-[80%] m-auto"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>
                  <Button
                    variant="warning"
                    className="bg-yellow-500"
                    onClick={() => handleUserEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="bg-red-500 ml-2"
                    onClick={() => handleUserDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TableBootstrap>}
    </div>
  );
}

export default Table;

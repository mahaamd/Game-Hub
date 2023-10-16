import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

interface Props {
  Expences: Expence[];
  onDelete: (id: number) => void;
}

interface Expence {
  id: number;
  Desciptoin: string;
  Amount: number;
  Category: string;
}

const ExpenceList = ({ Expences, onDelete }: Props) => {
  let items = ["milk", "not milk"];

  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Discrption</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Expences.map((item) => (
              <tr key={item.id}>
                <td>{item.Amount}</td>
                <td>{item.Desciptoin}</td>
                <td>{item.Category}</td>
                <td>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="btn btn-outline-danger"
                  >
                    {" "}
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenceList;

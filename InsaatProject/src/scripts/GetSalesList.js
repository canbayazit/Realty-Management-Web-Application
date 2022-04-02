import React, { useState, useEffect } from "react";
import axios from "axios";
import myLink from "./Links";

function GetSalesList() {
  const [myArrayData, setMyArrayData] = useState([]);

  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getSaleLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].SalesTable);
  }, []);
  return (
    <tbody>
      {myArrayData.map((item) => (
        <tr key={item.SaleID}>
          <td>{item.SaleDate}</td>
          <td>
            {item.CustomerName} {item.CustomerSurname}
          </td>
          <td>{item.FlatNo}</td>
          <td>{item.Price}</td>
          <td>
            {item.EmployeeName} {item.EmployeeSurname}
          </td>
          <td>{item.Notes}</td>
          <td>{item.CreationDate}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default GetSalesList;

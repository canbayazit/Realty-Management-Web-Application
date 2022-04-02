import React, { useState, useEffect } from "react";
import axios from "axios";
import myLink from "./Links";

function GetFlatTypeNameChk({ btnAdd }) {
  const [myArrayData, setMyArrayData] = useState([]);

  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getFlatTypeLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].FlatsTypeTable);
  }, []);

  const btnChk = async (index) => {
    let box = document.getElementById(`chkFlatType${index}`);
    btnAdd(box.value);
  };
  return (
    <span>
      {myArrayData.map((item) => (
        <span key={item.FlatTypeID}>
          <input
            type="checkbox"
            className="form-body"
            name="chkFlatType"
            id={`chkFlatType${item.FlatTypeID}`}
            onClick={() => btnChk(item.FlatTypeID)}
            value={item.FlatTypeID}
          />
          &nbsp;&nbsp;
          <label>{item.FlatTypeName}&nbsp;&nbsp;</label>
        </span>
      ))}
    </span>
  );
}

export default GetFlatTypeNameChk;

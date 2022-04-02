import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetGenderNameRadio({ setGenderID, genderID }) {
  const [myArrayData, setMyArrayData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.getGenderLink, {
      params: { myJwt: _myJwt },
    });

    setMyArrayData(response.data[0].GendersTable);
    var gender = document.getElementsByName("rdGender");
    for (var i = 0; gender.lenght; i++) {
      if (gender[i].checked) {
        genderID = gender[i].value;
      }
    }
  }, []);
  return (
    <span>
      {myArrayData.map((item) => (
        <span key={item.GenderID}>
          &nbsp;&nbsp;
          <input
            type="radio"
            className="form-body"
            name="rdGender"
            id={`rdGender${item.GenderID}`}
            onChange={(e) => setGenderID(e.target.value)}
            value={item.GenderID}
          />
          &nbsp; &nbsp;
          <label>{item.GenderName}&nbsp;&nbsp;</label>
        </span>
      ))}
    </span>
  );
}

export default GetGenderNameRadio;

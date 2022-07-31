import React from "react";
import { useState } from "react";
import "./Form.css";
import { nanoid } from "nanoid";
function Form() {
  const [fromDestination, setFromDestination] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    fromDestination: "",
    id: nanoid(),
  });
  const { name, email, number, loading, deleteDestination } = state;
  const inputHandler = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      fromDestination: fromDestination,
      [e.target.name]: value,
    });
  };
  const selectfromDestination = (e) => {
    setFromDestination(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault()
    setState({ loading: true });
    setTimeout(() => {
      setState({
        loading: false,
        name: "",
        email: "",
        number: "",
        deleteDestination: "",
      });
    }, 2000);

    fetch(
      "http://localhost:7000/reservation", //Method POST
      {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
      }
    );
  };

  return (
    <div>
      <form data-aos="fade-left" className="form-css" onSubmit={submitHandler} method="POST" action="page.php">
        <div className="form-title">
          <h2>Make your trip</h2>
        </div>
        <div>
          <input
            className="inp-form"
            required
            onChange={inputHandler}
            name="name"
            placeholder="name"
            type="text"
            value={name}
          />
        </div>
        <div>
          <input
            className="inp-form"
            onChange={inputHandler}
            name="email"
            placeholder="email"
            type="email"
            value={email}
          />
        </div>
        <div>
          <input
            className="inp-form"
            required
            onChange={inputHandler}
            name="number"
            placeholder="number"
            type="number"
            value={number}
          />
        </div>
        <div>
          <select
            className="inp-form"
            onChange={selectfromDestination}
            value={deleteDestination}
            name="fromDestination"
          >
            <option value="From Destination">From Destination</option>
            <option value="one destination">one destination</option>
            <option value="two destination">two destination</option>
            <option value="three destination">three destination</option>
          </select>
        </div>
        <div>
          <button className="inp-button" type="submit">
            {loading && <><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading..</>}
            {!loading && <span>MAKE RESERVATION</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

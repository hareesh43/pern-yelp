import React from "react";

export default function AddRestaurant() {
  return (
    <div className="mb-4 mt-5 ">
      <form action="">
        <div className="row">
          <div className="col-3">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col-5">
            <select
              className="form-select"
              aria-label="Price Range"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Price select
              </option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary col-1">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

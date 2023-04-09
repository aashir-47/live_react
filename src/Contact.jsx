import React, { useState } from "react";

export const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container-fluid contact_div ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onChange={InputEvent}
                    name="fname"
                    value={data.fname}
                    placeholder="Full Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onChange={InputEvent}
                    name="phone"
                    value={data.phone}
                    placeholder="Phone"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    onChange={InputEvent}
                    name="email"
                    value={data.email}
                    placeholder="Email Address"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    onChange={InputEvent}
                    name="msg"
                    value={data.msg}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

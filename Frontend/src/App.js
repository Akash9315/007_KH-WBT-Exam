import { useState } from "react";

export default function app() {
  return (
    <div>
      <Header />
      <MessageBox />
    </div>
  );
}

function Header() {
  return (
    <div className="row bg-secondary text-white">
      <div className="fs-1 col-2"> MyChatApp </div>
      <div className="col d-flex align-items-center">
        By Akash Rathod ID : 210940320007
      </div>
    </div>
  );
}

function MessageBox() {
  const [validation, setvalidationerror] = useState(false);

  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);

  const handleMessage = (e) => {
    setmessage(e.target.value);
  };

  const addMessage = () => {
    if (message == "") {
      setvalidationerror(true);
      return;
    }
    const newlist = [...list, message];
    setlist(newlist);
    setmessage("");
    setvalidationerror(false);
  };

  return (
    <div className="row mt-3 ">
      <div className="col-10 ms-3">
        <input
          type="text"
          placeholder="Let's chat here...."
          value={message}
          onChange={handleMessage}
          className={
            message == "" && validation
              ? "border border-2 border-danger form-control"
              : "form-control"
          }
        />
      </div>
      <div className="col">
        <input
          type="button"
          value="send"
          onClick={addMessage}
          className="form-control m-x-2 btn btn-dark "
        ></input>
      </div>
      <div className="mt-3">
        {list.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className=" alert alert-success ">
                {item}
              </div>
            );
          } else {
            return (
              <div className=" alert alert-success row justify-content-end">
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
    /* messages*/
  );
}

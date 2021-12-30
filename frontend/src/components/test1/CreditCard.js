

export const Test = () => {
    return (
        <div>
            <h1>Test</h1>
            <hr />

            

        </div>
    )
}


/*
const CreditCard = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiration, SetExpiration] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiration(e.target.value);
  };
  const handleExpiration = (e) => {
    SetExpiration(month.concat(e.target.value));
  };

  return (
    <>
   

      <div clasName="card card--test">
        <Cards
          number={number}
          name={name}
          expiration={expiration}
          cvc={cvc}
          focused={focus}
        />
      </div>

      <br />
      <form>
        <div className="row">
          <div className="col-sm-11">
            <label for="name">Card Number</label>
            <input
              type="tel"
              className="form-control"
              value={number}
              name="number"
              maxlength="16"
              pattern="[0-9]+"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-11">
            <label for="name">Card Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div
            className="col=sm-8"
            style={{
              ...{ "padding-right": "12em" },
              ...{ "padding-left": "1em" }
            }}
          >
            <label for="month">Expiration Date</label>
          </div>
          <div className="col=sm-4">
            <label for="cvv">CVV</label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiration"
              onChange={handleDate}
            >
              <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
          &nbsp;
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiration"
              onChange={handleExpiration}
            >
              <option value=" ">Year</option>
              <option value="21">2022</option>
              <option value="22">2023</option>
              <option value="23">2024</option>
              <option value="24">2025</option>
              <option value="25">2026</option>
              
            </select>
          </div>
          <div className="col-sm-3">
            <input
              type="tel"
              name="cvc"
              maxlength="3"
              className=" form-control card"
              value={cvc}
              pattern="\d*"
              onChange={(e) => {
                SetCvc(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <input
          type="submit"
          className="btn btn-secondary form-control"
          value="Submit"
        />
      </form>
    </>
  );
};


*/
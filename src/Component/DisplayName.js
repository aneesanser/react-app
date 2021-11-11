import { useForm } from "./Useform";
import {useState} from "react"
import {Link} from "react-router-dom"

function DisplayName() {
  const [data, setData] = useState("")
  const [value, handleChange] = useForm({
    FirstName: "",
    SecondName: "",
    Prefix: "",
    Suffix: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleData= (e)=>
  {
      setData(e.target.value)
      console.log(e.target.value)
  }

  return (
    <div>
      <select className="browser-default custom-select " onChange={handleData}>
        <option selected>Open this select menu</option>
        <option value="in" name="india"  >In</option>
        <option value="usa">USA</option>
        <option value="ca">CA</option>
      </select>
      {data==="in"?
      <select className="browser-default custom-select mt-3">
        <option selected>Open this select menu</option>
        <option value="Ka">kA</option>
        <option value="Kl">KL</option>
        <option value="Tn">MH</option>
        <option value="Mh">TN</option>
      </select>:null}
      {data==="usa"?
      <select className="browser-default custom-select mt-3">
        <option selected>Open this select menu</option>
        <option value="Al">Al</option>
        <option value="De">DE</option>
        <option value="Ga">GA</option>
      </select>:null}
      {data==="ca"?
      <select class="browser-default custom-select mt-3">
        <option selected>Open this select menu</option>
        <option value="On">On</option>
        <option value="Qc">Qc</option>
        <option value="Bc">Bc</option>
      </select>:null}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="FirstName">First name</label>
          <input
            type="text"
            className="form-control"
            id="FirstName"
            name="FirstName"
            value={value.FirstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="SecondName">Second name</label>
          <input
            type="text"
            className="form-control"
            id="SecondName"
            name="SecondName"
            value={value.SecondName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Prefix">Prefix</label>
          <input
            type="text"
            className="form-control"
            id="Prefix"
            name="Prefix"
            value={value.Prefix}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Suffix">Suffix</label>
          <input
            type="text"
            className="form-control"
            id="Suffix"
            name="Suffix"
            value={value.Suffix}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h4>{value.FirstName}&nbsp;{value.SecondName}&nbsp;{value.Prefix} &nbsp;{value.Suffix}</h4>
      <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <Link to="#0">edit</Link>
    <Link className="colors" to="#0">delete</Link>
    <Link   to="#0">insert</Link>
  </div>
</div>
    </div>
  );
}

export default DisplayName;

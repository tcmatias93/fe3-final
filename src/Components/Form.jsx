import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim().length > 5 && emailRegex.test(user.email)) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingrese su Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button>Send</button>
      </form>

      {error ? (
        <h4 style={{ color: "red" }}>
          Por favor verifique su información nuevamente
        </h4>
      ) : null}

      {show ? (
        <p>Gracias {user.name}, te contactaremos cuando antes vía mail</p>
      ) : null}
    </div>
  );
};

export default Form;

const Table = ({ doctor }) => {
  const { name, email, phone, website } = doctor;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{website}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

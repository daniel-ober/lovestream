import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [formData, setFormData] = useState([{
    userFirstname: "",
    userLastname: "",
    userPhone: "",
  }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFirstname = e.target[0].value;
    const userLastname = e.target[1].value;
    const userPhone = e.target[2].value;
    setFormData([...formData, {
      userFirstname: userFirstname,
      userLastname: userLastname,
      userPhone: userPhone
    }]);
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}
        className="PhoneBookForm">
        <label>First name:</label>
        <br />
        <input
          style={style.form.inputs}
          className='userFirstname'
          name='userFirstname'
          type='text'
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          style={style.form.inputs}
          className='userLastname'
          name='userLastname'
          type='text'
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className='userPhone'
          name='userPhone'
          type='text'
        />
        <br />
        <input
          style={style.form.submitBtn}
          className='submitButton'
          type='submit'
          value='Add User'
        />
      </form>
    </div>
  )
}

function InformationTable(props) {
  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.userFirstname}>First name</th>
          <th style={style.userLastname}>Last name</th>
          <th style={style.userPhone}>Phone Number</th>
        </tr>
      </thead>
    </table>
  );
}

function Application(props) {
  return (
    <section>
      <PhoneBookForm />
      <InformationTable />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
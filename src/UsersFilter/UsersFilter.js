import React, {useState} from 'react';

import './UsersFilter.css';

const UsersFilter = (props) => {
    const {applyFilters} = props;
    const [filterFields, setFilterFields] = useState({
        name: '',
        username: '',
        email: '',
    });

    function setFilters() {
        applyFilters(filterFields);
    }

    function handleChangeName(e) {
        setFilterFields({
            ...filterFields,
            name: e.target.value
        });
    }

    function handleChangeUsername(e) {
        setFilterFields({
            ...filterFields,
            username: e.target.value
        });
    }

    function handleChangeEmail(e) {
        setFilterFields({
            ...filterFields,
            email: e.target.value
        });
    }

    /*  const handleChange = (fieldName) => (e) => {
          setFilterFields({
              ...filterFields,
              [fieldName]: e.target.value
          });
      };*/


    return (
        <div className="row">
            <form className="row">
                <div>
                    <label>
                        Name:
                        <input name="name"
                               value={filterFields.name}
                               onChange={handleChangeName}
                            // onChange={handleChange('name')}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        UserName:
                        <input name="username"
                               value={filterFields.username}
                               onChange={handleChangeUsername}
                            // onChange={handleChange('username')}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input name="email"
                               value={filterFields.email}
                               onChange={handleChangeEmail}
                            // onChange={handleChange('email')}
                        />
                    </label>
                </div>

            </form>

            <button onClick={setFilters}>Filter</button>
        </div>
    );
};

export default UsersFilter;
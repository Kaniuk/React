import React from 'react';

const User = (props) => {
    const {id, name, surname, email, address, geo, phone} = props.user;

    return (
        <div className='item'>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <div>email:{email}</div>
            <div className="address">
                address:
                <div>street:{address.street}</div>
                <div>suite:{address.suite}</div>
                <div>city:{address.city}</div>
                <div>zipcode:{address.zipcode}</div>
                <div className='geo'>
                    geo:
                    <div>lat:{address.geo.lat}</div>
                    <div>lng:{address.geo.lng}</div>
                </div>
            </div>
            <div>phone:{phone}</div>
        </div>
    );
};

export default User;
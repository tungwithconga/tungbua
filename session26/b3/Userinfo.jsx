import React, { Component } from 'react';

class UserInfo extends Component {
    render() {
        // Tạo đối tượng user với các trường cần thiết
        const user = {
            fullName: "NV A",
            gioitinh:"Nam",
            date:"6/3/2024",
            email: "nva@gmail.com",
            address: "Thanh Xuan,Ha NOi"
        };

        return (
            <div>
                <h1>Thông tin cá nhân</h1>
                <p><strong>Full Name:</strong> {user.fullName}</p>
                <p><strong>Gioi tinh:</strong> {user.gioitinh}</p>
                <p><strong>Date:</strong> {user.date}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address}</p>
            </div>
        );
    }
}

export default UserInfo;

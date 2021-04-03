import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{[user.username]}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'taehwan',
            email: '1234@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: '12345@gmail.com'
        },
        {
            id: 3,
            username: 'person',
            email: '123456@gmail.com'
        }
    ];

    return (
        <div>
            {
                users.map(
                    (user => (<User user={user} key={user.id} />)
                    ))
            }
        </div>
    )
}

export default UserList;


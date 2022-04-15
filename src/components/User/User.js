import React from 'react';

export const User = ({user,setUser}) => {
    return (
        <div>
            {user.id}. {user.name}
            <button>ABOUT</button>
        </div>
    );
};


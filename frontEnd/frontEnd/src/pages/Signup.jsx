import React from 'react'

function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }
    return (
        <div>Signup</div>
    )
}

export default Signup
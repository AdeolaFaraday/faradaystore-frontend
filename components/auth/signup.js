import {useState} from 'react';
import {signup} from '../../actions/auth'
import Layout  from '../Layout'
const Signup = () => {
    const [values, setValues] = useState({
        name: 'tech_faraday',
        email: 'adex@gmail.com',
        message: '',
        password: 'lonToursex98.'
    })

    const {name, email, password, message} = values

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {name, email, password}
        signup(user).then(data => {
            console.log(data)
            if(data.error) {
                console.log(data)
                setValues({...values, message: data.error})
            } else {
                console.log(data)
                setValues({...values, message: 'Sign up success'})
            }
        })
    }

    return (
        <React.Fragment>
           <div>
            <div class="input">
            <form class="input-form" onSubmit={handleSubmit}>
                {JSON.stringify(message)}
                <h3>Login</h3>
                <input class="txtb" type="text" value={name} placeholder="Enter Name" onChange={handleChange('name')} />
                <input class="txtb" type="text" value={email} placeholder="Enter Email" onChange={handleChange('email')}/>
                <input class="txtb" type="password" value={password} placeholder="Enter Password" onChange={handleChange('password')}/>
                {/* <input class="txts" type="button" style={{cursor: 'pointer'}} value="Sign In" /> */}
                <button class="txts">Sign up</button>
            </form>
            </div>
        </div>
    </React.Fragment>
    );
};

export default Signup;
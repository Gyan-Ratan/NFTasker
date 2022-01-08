import React,{Component} from 'react'
import GoogleLogin from 'react-google-login'
import Todo from '../components/Todo';
export class Login extends Component{

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj)
    }

    render(){
        return(
            <div >
                <GoogleLogin
                clientId="374903690406-7tsc6sl2m8pguj0agrlv8n6t2ie8tlec.apps.googleusercontent.com"
                buttonText="GOOGLE LOGIN"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
                
                <Todo/>
            </div>
            
    )
    }
}

export default Login

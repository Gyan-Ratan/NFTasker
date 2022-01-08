import React,{Component} from 'react'
import GoogleLogin from 'react-google-login'
export class App extends Component{

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj)
    }

    render(){
        <div className='.bg-gray-400'>
            <div className='.bg-gray-200 .justify-center'>
                <GoogleLogin
                clientId="374903690406-7tsc6sl2m8pguj0agrlv8n6t2ie8tlec.apps.googleusercontent.com"
                buttonText="GOOGLE LOGIN"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
            </div>
    }
}

export default Login

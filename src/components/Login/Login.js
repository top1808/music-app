import './Login.scss';
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {onGetUserRequest} from './../../actions/index'
import {useEffect} from 'react'

function Login(props) {
    const {handleSubmit, register, setValue} = useForm()
    const {userList, history} = props
    const data = JSON.parse(localStorage.getItem('data'))

    useEffect(() => {
        props.onGetUser()
    },[])

    useEffect(() => {
        const fields = ['username', 'password', 'remember']
        fields.forEach((field) => {
            setValue(field, data[field])
        })
    },[data])

    const onSubmit = (data) => {
        if (data.remember) {
            localStorage.setItem('data', JSON.stringify(data))
        } else {
            localStorage.setItem('data', JSON.stringify(""))
        }
        userList.forEach((user) => {
            if (user.username === data.username && user.password === data.password) {
                history.goBack()
            } else if (user.username !== data.username) {
                console.log("user")
            } else {
                console.log("password")
            }
        })
    }

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-header">Đăng Nhập</div>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3 d-flex align-items-center">
                        <i className="fas fa-user user-icon"></i>
                        <input type="text" className="username form-control" {...register('username', {required: true, minLength: 6})} placeholder="Username"/>
                    </div>
                    <div className="mb-3 d-flex align-items-center">
                        <i className="fas fa-lock password-icon"></i>
                        <input type="password" className="password form-control" {...register('password', {required: true, minLength: 6})} placeholder="Password"/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div class="form-check ">
                            <input type="checkbox" className="form-check-input" {...register('remember')} value="checkedValue"/>
                            <label class="form-check-label" for="">
                                Remember me
                            </label>
                        </div>
                        <div className="forgot-password">Forgot Password?</div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-login">Đăng Nhập</button>
                </form>
                <div className="login-suggetion">
                    Chưa có tài khoản? 
                    <a className="change-page" href="#"> Đăng ký</a>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {    
        userList: state.userList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetUser: () => {
            dispatch(onGetUserRequest())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
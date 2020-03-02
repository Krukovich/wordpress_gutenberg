import "./style.scss";

const LoginForm = ({data}) => {
    const {
        formName,
        position,
        titleSize,
    } = data

    return (
        <div className={position}>
            <form className="login-form">
                <div className="login-form-title" 
                     style={{
                         fontSize: `${titleSize}px`,
                     }}
                >
                    {formName}
                </div>
                <div className="login-form__item">
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className="login-form__item">
                    <label>Email</label>
                    <input type="text" required/>
                </div>
                <div className="login-form__item">
                    <label>Password</label>
                    <input type="text" required/>
                </div>
                <input type="submit" value="Enter" />
            </form>
        </div>
    )
}

export default LoginForm
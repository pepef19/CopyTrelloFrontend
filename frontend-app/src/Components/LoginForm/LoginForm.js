import React, {useState} from "react";
import './LoginForm.css';
import { useHistory } from "react-router-dom";
import Api from "../../api";

const LoginForm = props => {
    const [data, setData] = useState({email: "", password: ""});
    const [formError, setFormError] = useState({email: false, password: false});
    const [errors, setErrors] =useState(false)

    const handleInputChange = (key, newValue) => {
        setData({...data, [key]:newValue});
    };

    const validateUser = (email) => {
        const pattern = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/;
        const regex = RegExp(pattern);
        return regex.test(email);
    };

    /*const validatePass = (password) => {
        const pattern = /^(?=^[ -~]{6,64}$)(?=.*([a-z][A-Z]))(?=.*[0-9])(.*[ -/|:-@|\[-`|{-~]).+$/;
        const regex = RegExp(pattern);
        return regex.test(password);
    };*/


    const handleInputOnblur = (key, newValue) => {
        let isValid = true;
        if (key === "email") {
            isValid = validateUser(newValue)
        } /*if (key === "password") {
            isValid = validatePass(newValue)
        }*/
        setFormError({...formError, [key]: !isValid});
    };


    const formHasErrors = (errors) => {
        let errorForm = false;
        Object.values(errors).forEach(value => {
            if(value) {
                errorForm = true;
            }
        });
        return errorForm;
    }

    const history = useHistory();

    const handleOnClickSubmit = () => {
        if (!formHasErrors(errors)) {
            Api.fetchResource("login", {
                method: "post",
                body: data,
             }).then(response => {
                if (response.error) {
                    setErrors({...errors, response: errors})
                } else {
                    localStorage.setItem('token', response.access_token);
                    history.push('/home');
                }
            }).catch(function (error) {
                console.log('Hubo un problema con la petición Fetch:' + error);
            })
        }
    };

    return (
        <div className="container-login">
            <div>
                <img alt="Trello" className="trello-main-logo-login"
                     src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg"/>
                <section className="inner-section-login ">
                    <div className="formBox">

                        {errors ? <p className="input-error-message-login">No existe ninguna cuenta para este nombre de usuario o la contraseña introducida no es la correcta.</p> : undefined}

                        <div><h1 className="headForm"> Iniciar sesión en Trello</h1></div>
                        <div>
                            <div>
                                <input
                                    onChange={event => handleInputChange('email', event.target.value)}
                                    onBlur={event => handleInputOnblur('email', event.target.value)}
                                    value={data.email}
                                    type="text"
                                    name="user"
                                    id="user"
                                    className={!formError.email ? "userFormField" : "error-login"}
                                    placeholder="Introduzca el correo electrónico"
                                    autoComplete="username email"
                                    inputMode="email"
                                    pattern="[a-z]{1,15}"
                                    title="Username should only contain lowercase letters. e.g. john"
                                    required/>
                            </div>
                            <div>
                                <input
                                    value={data.password}
                                    onChange={event => handleInputChange('password', event.target.value)}
                                    onBlur={event => handleInputOnblur('password', event.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={!formError.password ? "userFormField" : "error-login"}
                                    placeholder="Introduzca la contraseña"
                                    autoComplete="current-password"
                                    required/>
                                    {formError.password && <legend className="errorMessage" >Hay un error en el password</legend>}
                            </div>

                            <div>
                                <button disabled={!formHasErrors} className="loginButton" onClick={handleOnClickSubmit}>
                                    Iniciar sesión
                                </button>
                            </div>
                            <div>
                                <h1 className="oSeparator">
                                    O
                                </h1>
                                    <div>
                                        <button className="ExternalLoginButton">
                                        <img src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png"
                                             alt="x" className="googleIcon"/>
                                        Accede con Google
                                    </button>

                                    </div>
                                    <div>
                                        <button className="ExternalLoginButton">
                                            <img src="http://www.pngplay.com/wp-content/uploads/1/Microsoft-Logo-Transparent-Background.png"
                                                alt="x" className="googleIcon"/>
                                                Accede con Microsoft
                                        </button>
                                    </div>
                                <div className="line"></div>
                                <div>
                                    <ul className="bottomFromLink">
                                        <li className="bottomFromLinkText">¿No puede inicar sesión?</li>
                                        <li className="bottomFromLinkText"><a href="/signup">Registrese para crear una cuenta</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className="footer-login">
                <div className="FooterLine"></div>
                <div>
                    <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
                         alt="x" className="AtlassianLogo"/>
                </div>
            </footer>
        </div>
    );
};

export default LoginForm
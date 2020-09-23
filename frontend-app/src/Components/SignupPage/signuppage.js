import React, {useDebugValue, useState} from 'react';
import './signuppage.css';
import imageRight from '../../Components/SignupPage/images/Captura de pantalla 2020-07-03 a las 19.41.19.png'
import imageLeft from '../../Components/SignupPage/images/Captura de pantalla 2020-07-03 a las 19.41.48.png'
import {InputForm} from "./InputForm/inputform";
import {useHistory} from 'react-router-dom';
import Api from "../../api";

const Signup = props => {

    const initialState = {
        email: "",
        name: "",
        password: ""
    };

    const [ data, setData ] = useState(initialState);
    const [ errors, setErrors ] = useState({email: false, password: false})
    const [ userAlreadyRegisteredError, setUserAlreadyRegisteredError ] = useState(false);

    const history = useHistory();

    const isEnabled = data["email"].length > 0 && data["password"].length > 0 && data["name"].length > 0;

    const handleChange = (key, newValue) => {
        setData({
            ...data,
            [key]: newValue,
        });
    };

    const validateEmail = () => {
        const pattern = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+).([a-zA-Z]{2,5})$/;
        const regex = RegExp(pattern);
        if(data.email.length > 0){
            setErrors({...errors, email:!regex.test(data.email)});
        }
    };

    const validatePassword = () => {
        const pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        const regex = RegExp(pattern);
        if(data.password.length > 0){
            setErrors({...errors, password:!regex.test(data.password)});
        }
    };

    const handleOnClickSubmit = () => {
        if(!errors.password && !errors.email) {
            Api.fetchResource("register", {
                "method": "POST",
                "body": data,
            }).then(response => {
                if(response.error) {
                    setUserAlreadyRegisteredError(true)
                }else{
                    localStorage.setItem('token', response.access_token);
                    Api.fetchResource("sendEmail", {
                        "method": "POST",
                        "body": data,
                    }).then(() => {
                        history.push('/home');
                    })
                }
        }).catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error);
        })
        }
        }


    return(
        <div className="root-signup">
            <div className="display-image-left">
                <img src={imageRight} alt="imageRight" width="300px" height="300px"/>
            </div>
            <div>
                <div className="image-container">
                    <a href="/home">
                        <img alt="Trello" className="trello-main-logo"
                             src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/76ceb1faa939ede03abacb6efacdde16/trello-logo-blue.svg" />
                    </a>
                    <section className="inner-section">
                        <div className="section-wrapper">
                            <div id="signup-form"
                                 className="layout-account-form">

                                <div id="signup-password"
                                     className="quick-switch">

                                    {errors.password ? <p className="input-error-message-password">La contraseña debe contener al menos 8 caracteres, una letra mayúscula y un número.</p> : undefined}
                                    {userAlreadyRegisteredError ? <p className="input-error-message-password">Correo electrónico ya utilizado por otra cuenta. Puede utilizar <a className="duplicate-email-error-register" href="/login" >el inicio de sesión o la página de contraseña olvidada</a> para restablecer su contraseña.</p> : undefined}

                                    <h1>Crea tu cuenta</h1>

                                    <InputForm type="email"
                                               onChange={event => handleChange("email", event.target.value)}
                                               value={data.email}
                                               error={errors.email ? "Esto no parece una dirección de correo electrónico..." : undefined}
                                               onBlur={validateEmail}
                                               name="email"
                                               id="email"
                                               typeof="email"
                                               className="form-field"
                                               placeholder="Introduzca el correo electrónico"
                                               autoFocus={true}/>

                                    <InputForm type="text"
                                               value={data.name}
                                               onChange={event => handleChange("name", event.target.value)}
                                               name="name"
                                               id="name"
                                               className="form-field"
                                               placeholder="Introduzca el nombre completo"/>

                                    <InputForm type="password"
                                               value={data.password}
                                               onChange={event => handleChange("password", event.target.value)}
                                               onBlur={validatePassword}
                                               name="password"
                                               id="password"
                                               className="form-field"
                                               placeholder="Crear contraseña" />

                                    <p className="quiet-tos">
                                       Al registrarse, confirma que ha leído y aceptado nuestras
                                       <a href="#" target="_blank"> Condiciones del Servicio </a>
                                       y nuestra
                                       <a href="#" target="_blank"> Política de Privacidad.</a>
                                    </p>

                                    <button id="signup-submit"
                                            tabIndex="0"
                                            type="submit"
                                            className="submit-button"
                                            value="Registrarse"
                                            disabled={!isEnabled}
                                            onClick={handleOnClickSubmit} >Registrarse</button>
                                    <hr />
                                    <span className="bottom-form-link">
                                            <a href="/login">¿Ya tiene una cuenta? Inicie sesión</a>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="global-footer">
                    <form id="language-picker-container">
                        <label htmlFor="language-picker"/>
                        <select id="language-picker" name="language-picker">
                            <option value="Čeština">Čeština</option>
                        </select>
                    </form>
                    <div>
                        <hr/>
                        <img className="atlassian-logo-small"
                             src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/16006ae28f149063408d601e8c80eddc/atlassian-logo-blue-small.svg"
                             width="150"  alt="atlassian-logo"/>
                    </div>
                    <ul className="global-footer-list">
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Plantillas</a>
                        </li>
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Precios</a>
                        </li>
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Aplicaciones</a>
                        </li>
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Trabajos</a>
                        </li>
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Blog</a>
                        </li>
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Desarrolladores</a>
                        </li>
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Acerca de </a>
                        </li>
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Ayuda</a>
                        </li>
                        <li className="global-footer-list-item">
                            <a className="global-footer-list-item-link" href="#">Configuración de las cookies</a>
                        </li>
                    </ul>
                </footer>
            </div>
            <div className="display-image-right">
                <img src={imageLeft} alt="imageRight" width="300px" height="300px"/>
            </div>
        </div>
    );
};

export default Signup;


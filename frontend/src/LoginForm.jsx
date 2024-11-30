import {useFormik} from "formik";
import * as Yup from "yup";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";

const LoginForm = () => {

    const SignupSchema = Yup.object().shape({
        login: Yup.string()
            .min(2, 'Минимум 2 буквы')
            .max(50, 'Максимум 50 букв')
            .required('Обязательное поле'),
        password: Yup.string()
            .min(2, 'Минимум 2 буквы')
            .max(50, 'Максимум 50 букв')
            .required('Обязательное поле'),
    });

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
            <Form onSubmit={formik.handleSubmit}
                  className={"col-12 col-md-6 mt-3 mt-md-0"}>
                <h1 className="text-center mb-4">Войти</h1>
                <Form.Group className="form-floating mb-3" >
                    <Form.Control onChange={formik.handleChange}
                                  name="login"
                                  type="text"
                                  required
                                  placeholder="Ваш ник"
                                  value={formik.values.login}
                    />
                    <Form.Label
                        className={"form-label col-form-label col"}
                        column={true}>Ваш ник
                    </Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-3">
                    <Form.Control onChange={formik.handleChange}
                                  name="password"
                                  id="password"
                                  type="password"
                                  required
                                  placeholder="Пароль"
                                  value={formik.values.password}
                    />
                    <Form.Label
                        className={"form-label col-form-label col"}
                        column={true}>Пароль
                    </Form.Label>
                </Form.Group>
                {(formik.touched.login && formik.touched.password) && (formik.errors.login || formik.errors.password)
                    ? ( <Alert variant={"danger"}>{'Неверные имя пользователя или пароль'}</Alert>)
                    : null
                }
                <Button variant={"w-100 mb-3 btn btn-outline-primary"} type={"submit"}>Войти</Button>
            </Form>
    )
}

export default LoginForm;

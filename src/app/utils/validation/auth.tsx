import { object, string } from "yup";

export const loginSchema = object({
  email: string()
    .email('Email invalido')
    .required('Email es requerido')
    .test('isValidPass', 'Email invalido', (value, context) => {
      const isEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );
      let validConditionsEmail = 0;
      const conditions = [isEmail];
      conditions.forEach((condition) =>
        condition ? validConditionsEmail++ : null
      );
      if (validConditionsEmail >= 1) {
        return true;
      }
      return false;
    }),
  password: string().min(8, 'Minimo 8 caracteres').required('La contraseña es necesaria')
});


export const registerSchema =object({
  email: string()
    .email('Email invalido')
    .required('Email es requerido')
    .test('isValidPass', 'Email invalido', (value, context) => {
      const isEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );
      let validConditionsEmail = 0;
      const conditions = [isEmail];
      conditions.forEach((condition) =>
        condition ? validConditionsEmail++ : null
      );
      if (validConditionsEmail >= 1) {
        return true;
      }
      return false;
    }),
  password: string().min(8, 'Minimo 8 caracteres').required('La contraseña es necesaria'),
  fullname: string().required('Es necesario').min(3)
});

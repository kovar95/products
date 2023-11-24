"use client";

import { FC, useEffect, useState } from "react";
import { Alert, Stack } from "@mui/material";
import SubmitButton from "@/ui/SubmitButton";
import Input from "@/ui/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useSession } from "@/providers/SessionProvider";
import { correctUser } from "@/constants";

type FormikValues = {
  email: string;
  password: string;
};

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("E-mail adresa nije u ispravnom formatu")
    .required("Ovo polje je obavezno"),
  password: Yup.string().required("Ovo polje je obavezno"),
});

const Login: FC = () => {
  const router = useRouter();
  const { isAuth, setIsAuth } = useSession();

  // This will imitate middleware for auth user
  useEffect(() => {
    if (isAuth) {
      router.push("/products");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const [error, setError] = useState<null | string>(null);

  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik<FormikValues>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Schema,
      onSubmit: (val) => {
        if (
          val.email === correctUser.email &&
          val.password === correctUser.password
        ) {
          setIsAuth(true);
        } else {
          setError("E-mail adresa ili lozinka su netačni");
        }
      },
    });
  const { email, password } = values;

  return (
    <Stack height="90%" justifyContent="center" alignItems="center">
      <Stack gap={3}>
        <h2>Prijavi se na svoj nalog</h2>

        <Input
          label="E-mail adresa"
          variant="standard"
          placeholder="Upisite email"
          value={email}
          name="email"
          error={!!errors.email && !!touched.email}
          helperText={errors.email}
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{ maxLength: 50 }}
        />
        <Input
          label="Šifra"
          variant="standard"
          placeholder="Upišite šifru"
          value={password}
          name="password"
          error={!!errors.password && !!touched.password}
          helperText={errors.password}
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{ maxLength: 50 }}
        />
        <SubmitButton
          disabled={!!Object.keys(errors).length}
          onClick={() => handleSubmit()}
        >
          Prijavi se na nalog
        </SubmitButton>
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </Stack>
  );
};

export default Login;

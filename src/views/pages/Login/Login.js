import React, { Suspense } from "react";
const LoginForm = React.lazy(() =>
  import("../../../components/LoginForm/LoginForm")
);
const Login = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </>
  );
};

export default Login;

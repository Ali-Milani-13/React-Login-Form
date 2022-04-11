import React, { Suspense } from "react";
const Form = React.lazy(() => import("../../../components/Form/Form"));
const SignUp = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Form />
      </Suspense>
    </>
  );
};

export default SignUp;

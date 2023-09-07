import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormProp {
  isSignInPage?: boolean | undefined;
}

export default function Form({ isSignInPage = false }: FormProp) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: "",
    }),
    email: "",
    password: "",
  });

  const handleChangeInput = (key: string, value: string) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleRedirect = () => {
    const route = isSignInPage ? "/sign-up" : "/sign-in";
    return navigate(route);
  };

  return (
    <div className="h-screen bg-[#edf3fc] flex justify-center items-center">
      <section
        className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg 
      flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-extrabold">
          Welcome {isSignInPage && "Back"}
        </h1>
        <h2 className="text-xl font-light mb-10">
          {isSignInPage
            ? "Sign in to get explored"
            : "Sign up now to get started"}
        </h2>
        <form
          className=" flex flex-col items-center w-full"
          onSubmit={() => console.log("Submitted")}
        >
          {!isSignInPage && (
            <Input
              label="Full name"
              name="name"
              placeholder="Enter your full name"
              className="mb-6"
              value={data.fullName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeInput("fullName", e.target.value)
              }
            />
          )}
          <Input
            label="Email address"
            name="email"
            placeholder="Enter your email"
            type="email"
            className="mb-6"
            value={data.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeInput("email", e.target.value)
            }
          />
          <Input
            label="Password"
            name="password"
            placeholder="Enter your password"
            type="password"
            className="mb-10"
            value={data.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeInput("password", e.target.value)
            }
          />
          <Button
            label={isSignInPage ? "Sign in" : "Sign up"}
            className="w-1/2 mb-2"
            type="submit"
          />
        </form>
        <div>
          Already have an account?{" "}
          <span
            className="text-primary cursor-pointer underline"
            onClick={handleRedirect}
          >
            {isSignInPage ? "Sign up" : "Sign in"}
          </span>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect } from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import login from '../assets/images/login.svg';
import useLogin from "../hooks/useLogin";
import GoogleButton from "react-google-button";
import { UserAuth } from "../contexts/AuthContextFirebase";
import useSignup from "../hooks/useSignup";

const Signin = () => {
  const { googleSignIn, isAuthenticated } = UserAuth();
  const navigate = useNavigate();
  const { error, loading, loginUser } = useLogin();
  const { error: signupError, loading: signupLoading, registerUser } = useSignup();

  const handleGoogleSignIn = async () => {
    try {
      const user = await googleSignIn();
      handleRegister(user);
      navigate('/home');
      // window.location.reload();



    } 
    catch (error) 
    {

    }
  };

  const handleRegister = (user) => {
    if (user) {
      console.log(user)
      const userDetails = {
        name: user.name,
        email: user.email,
        password: '123',
        passwordConfirm: '123'
      };
      registerUser(userDetails , true);
    }
  };

  const handleLogin = async (values) => {
    await loginUser(values);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <Card className="form-container w-[1000px]">
        <Flex gap="large" align="center">
          <Flex flex={1}>
            <img src={login} alt="" className="w-[100%] rounded-lg" />
          </Flex>

          <Flex vertical flex={1}>
            <Typography.Title level={3} strong className="title text-center">
              Sign In
            </Typography.Title>
            <p className="text-base font-medium text-gray-400 text-center">
              Welcome back!
            </p>

            <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    type: "email",
                    message: "Enter a valid email",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password size="large" placeholder="Enter your password" />
              </Form.Item>

              {error && <Alert description={error} type='error' showIcon closable className='mb-[1.5rem]' />}

              <Form.Item>
                <Button type={`${loading ? "" : "primary"}`} htmlType="submit" size="large" className="w-[100%]">
                  {loading ? <Spin /> : 'Sign In'}
                </Button>
              </Form.Item>

              <Form.Item>
                <Link to="/">
                  <Button size="large" className="w-[100%]">
                    Create Account
                  </Button>
                </Link>
              </Form.Item>

              <div className="flex items-center font-medium text-gray-300 mb-[1.5rem]">
                <div className="w-[45%] h-[2px] bg-gray-200 mr-2"></div>
                OR
                <div className="w-[45%] h-[2px] bg-gray-200 ml-2"></div>
              </div>

              <Form.Item className="">
                <Button onClick={handleGoogleSignIn} size="large" className="w-[100%]">
                  <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" className="h-7" />Sign in with Google
                </Button>
              </Form.Item>
            </Form>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default Signin;

import React from "react";
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
import register from "../assets/images/register.svg";

const Signup = () => {

    const {loading, error, registerUser} = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <div className="flex flex-col md:flex h-[100vh] md:items-center md:justify-center">
      <Card className="form-container md:w-[90%]">
        <Flex gap="large" align="center" className="flex flex-col-reverse md:flex md:flex-row">
          {/* form */}
          <Flex vertical flex={0.7}>
            <Typography.Title level={3} strong className="title text-center">
              Create an account
            </Typography.Title>
            <p className="text-base font-medium mb-4 text-gray-400 text-center ">
              Join for exclusive access!
            </p>
            <Form
              layout="vertical"
              onFinish={handleRegister}
              autoComplete="off"
            >
              <Form.Item className="font-medium"
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name!",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your full name" />
              </Form.Item>

              <Form.Item className="font-medium"
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

              <Form.Item className="font-medium"
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item className="font-medium"
                label="Confirm Password"
                name="passwordConfirm"
                rules={[
                  {
                    required: true,
                    message: "Please input your password again!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Re-enter your password"
                />
              </Form.Item>

              {error && <Alert description={error} type='error' showIcon closable className='mb-[1.5rem]'/>}

              <Form.Item>
                <Button
                  type={`${loading ? "" : "primary"}`}
                  htmlType="submit"
                  size="large"
                  className="w-[100%] mt-2 font-medium"
                >
                  {loading ? <Spin /> : 'Create Account'}
                  
                </Button>
              </Form.Item>

              <Form.Item>
                <Link to="/signin">
                  <Button size="large" className="w-[100%] -mt-2 font-medium">
                    Sign In
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </Flex>

          {/* image */}
          <Flex flex={1}>
            <img src={register} alt="" className="w-[100%] rounded-lg" />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

export default Signup;

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
    <div className="flex h-[100vh] items-center justify-center">
      <Card className="form-container w-[1000px]">
        <Flex gap="large" align="center">
          {/* form */}
          <Flex vertical flex={1}>
            <Typography.Title level={3} strong className="title text-center">
              Create an account
            </Typography.Title>
            <p className="text-base font-medium text-gray-400 text-center">
              Join for exclusive access!
            </p>
            {/* <Typography.Title type='secondary' className='slogan text-center'>
                    Join for exclusive access!
                </Typography.Title> */}

            <Form
              layout="vertical"
              onFinish={handleRegister}
              autoComplete="off"
            >
              <Form.Item
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
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item
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
                  className="w-[100%]"
                >
                  {loading ? <Spin /> : 'Create Account'}
                  
                </Button>
              </Form.Item>

              <Form.Item>
                <Link to="/signin">
                  <Button size="large" className="w-[100%]">
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

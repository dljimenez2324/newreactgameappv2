import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Heading>Oh! oh! You have an Error</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected Error has occurred"}
      </Text>
    </>
  );
};

export default ErrorPage;

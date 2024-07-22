import { Alert } from "./alert";

export const ServerErrorAlert = () => {

  return (
    <Alert
      title="Sorry! We encountered an issue while processing your request."
      message="Please refresh and retry. If the issue persists, please contact support: contact@goodtoshow.ca."
    />
  );
};

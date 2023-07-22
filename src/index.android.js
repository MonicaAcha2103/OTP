import retrieveVerificationCode from "./retrieveVerificationCode";
import startSmsHandling, { stopSmsHandling } from "./startSmsHandling";
import useSmsUserConsent from "./hooks/useSmsUserConsent";
import addErrorListener from "./addErrorListener";
import useErrorListener from "./hooks/useErrorListener";

export {
  retrieveVerificationCode,
  startSmsHandling,
  useSmsUserConsent,
  addErrorListener,
  useErrorListener,
  stopSmsHandling,
};

export default {
  retrieveVerificationCode,
  startSmsHandling,
  useSmsUserConsent,
  addErrorListener,
  useErrorListener,
  stopSmsHandling,
};

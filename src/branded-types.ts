const emailRegexp = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

type EmailAddress = string & { __brand: "EmailAddress" };

const isEmailAddress = (email: string): email is EmailAddress =>
  emailRegexp.test(email);

// keep in mind that TypeScript cannot use arrowFunctions for assertions.
function assertEmailAddress(email: string): asserts email is EmailAddress {
  if (!isEmailAddress(email)) {
    throw new Error(`${email} is not a valid email address`);
  }
}

function sendWelcomeEmail(email: EmailAddress) {
  // ...
}

function signUp(email: string) {
  assertEmailAddress(email);

  sendWelcomeEmail(email);
}

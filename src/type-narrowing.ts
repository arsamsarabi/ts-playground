// For primitive types
function toNumber(val: string | number): number {
  if (typeof val === "string") {
    return parseInt(val, 10);
  }

  return val;
}

// using the "in" keyword
declare function getStandardSessionToken(name: string, ttl: number): string;
declare function getAdminSessionToken(
  name: string,
  accessLevel: string
): string;

type StandardUser = {
  name: string;
  sessionTTL: number;
};

type AdminUser = StandardUser & {
  isAdmin: true;
  access: "read-admin" | "write-admin";
};

function login(user: StandardUser | AdminUser) {
  if ("isAdmin" in user) {
    return getAdminSessionToken(user.name, user.access);
  }

  return getStandardSessionToken(user.name, user.sessionTTL);
}

// using type predicates
type User = StandardUser | AdminUser;

const users = [
  { name: "Arsam", sessionTTL: Infinity, isAdmin: true, access: "write-admin" },
  { name: "John", sessionTTL: 7 },
  { name: "Joe", sessionTTL: 2 },
  { name: "Jane", sessionTTL: Infinity, isAdmin: true, access: "read-admin" },
];

const standardUsers = users.filter((user): user is StandardUser => {
  return !(user as AdminUser).isAdmin;
});

// Discriminated unions
type StandardUser2 = {
  type: "standard";
  name: string;
  sessionTTl: number;
};

type AdminUser2 = {
  type: "admin";
  name: string;
  access: "write-admin" | "read-admin";
};

type ProspectUser = {
  type: "prospect";
};

type User2 = StandardUser2 | AdminUser2 | ProspectUser;

function login2(user: User2) {
  // exhaustive switch
  switch (user.type) {
    case "standard":
      return getStandardSessionToken(user.name, user.sessionTTl);
    case "admin":
      return getAdminSessionToken(user.name, user.access);
    case "prospect":
      return null;
    default:
      const notPossible: never = user;
      return;
  }
}

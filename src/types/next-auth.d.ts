import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      // modifying next-auth user
      _id?: string;
      isVerified?: boolean;
      isAcceptingMessages?: boolean;
      username?: string;
    } & DefaultSession["user"]; // default session will always have a key i.e user
  }

  interface User {
    // adding new fields in User
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
  }
}

declare module "next-auth/jwt" {
  // modifying next-auth's jwt field
  interface JWT {
    _id?: string;
    isVerified?: boolean;
    isAcceptingMessages?: boolean;
    username?: string;
  }
}

/*
there are 2 ways in which we can modify a field of next-auth 
M#1 --> directly creating an interface as we did in User
M#@ --> doclaring it using module as done in session and jwt 
All are same , just slight different syntax
 */

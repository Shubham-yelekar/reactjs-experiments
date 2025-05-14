import { Heading } from "@radix-ui/themes";
import { type Info } from "../types";

type UserInfoProp = {
  user: Info;
};

const UserInfo: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
      <Heading>User</Heading>
      <p>Id : {user.id}</p>
      <p>Namw : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
  );
};

export default UserInfo;

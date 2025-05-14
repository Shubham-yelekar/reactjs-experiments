import { Heading } from "@radix-ui/themes";
import { type AdminInfoType } from "../types";

type AdminInfoProp = {
  admin: AdminInfoType;
};

const AdminInfo: React.FC<AdminInfoProp> = ({ admin }) => {
  return (
    <div>
      <Heading>Admin</Heading>
      <p>Id : {admin.id}</p>
      <p>Namw : {admin.name}</p>
      <p>Email : {admin.email}</p>
    </div>
  );
};

export default AdminInfo;

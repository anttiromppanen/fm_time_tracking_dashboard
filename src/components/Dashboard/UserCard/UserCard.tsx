import UserCardTop from "./Top";
import UserCardBottom from "./Bottom";
import Card from "../../Card";

function UserCard() {
  return (
    <Card>
      <div className="flex h-full w-full flex-col justify-between">
        <UserCardTop />
        <UserCardBottom />
      </div>
    </Card>
  );
}

export default UserCard;

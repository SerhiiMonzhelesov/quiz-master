import { useSelector } from "react-redux";
import Avatar from "../../../../shared/components/Avatar/Avatar";
import {
  AvatarImg,
  InfoText,
  Line,
  LineHeight,
  PassedBox,
  TitleText,
  UserCard,
  UserName,
} from "./UserStatsStyled";
import { selectUser } from "../../../../redux/user/userSelectors";

const UserStats = () => {
  const userInfo = useSelector(selectUser);
  const averageSuccess = userInfo ? Math.round(userInfo.average) : "";

  return (
    <UserCard>
      {userInfo && userInfo.userAvatar ? (
        <Avatar
          size="large"
          src={userInfo.userAvatar}
          alt="Photo"
          width="100px"
        />
      ) : (
        <AvatarImg>
          {userInfo && userInfo.name
            ? userInfo.name.trim().charAt(0).toUpperCase()
            : ""}
        </AvatarImg>
      )}
      <UserName>{userInfo ? userInfo.name : ""}</UserName>
      <PassedBox>
        <div>
          <TitleText>Passed quizzes</TitleText>
          <InfoText>
            {userInfo && userInfo.passedQuizzes
              ? userInfo.passedQuizzes.length
              : ""}
          </InfoText>
        </div>
        <Line />
        <LineHeight />
        <div>
          <TitleText>Average success</TitleText>
          <InfoText>
            {userInfo ? `${averageSuccess}%` : ""}
          </InfoText>
        </div>
      </PassedBox>
    </UserCard>
  );
};

export default UserStats;

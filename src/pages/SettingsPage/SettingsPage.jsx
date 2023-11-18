import GoBackBtn from "../../shared/components/Buttons/GoBackBtn/GoBackBtn";
import PageTitle from "../../shared/components/PageTitle/PageTitle";
import {
  PageWrapper,
  SectionWrapper,
  TitleWrapper,
} from "./SettingsPageStyled";
import UserProfileForm from "../../modules/settingPage/UserProfileForm/UserProfileForm";

const SettingsPage = () => {
  return (
    <>
      <PageWrapper>
        <SectionWrapper>
          <TitleWrapper>
            <GoBackBtn to="/" />
            <PageTitle children="Settings"/>
          </TitleWrapper>
          <UserProfileForm>
          </UserProfileForm>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};

export default SettingsPage;

import UserPageHeader from "../../../components/header/UserPageHeader";
import LogOutLink from "../../../components/footerLinks/LogOutLink";
import StoreList from "../../../components/store/StoreList";

const UserPage = () => {
  return (
    <>
      <header>
        <UserPageHeader />
      </header>
      <main>
        <StoreList />
      </main>
      <footer>
        <LogOutLink />
      </footer>
    </>
  );
};

export default UserPage;

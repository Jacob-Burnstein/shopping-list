import NavBar from "../../../components/header/NavBar";
import LogOutLink from "../../../components/footerLinks/LogOutLink";
import StoreList from "../../../components/store/StoreList";

const UserPage = () => {
  return (
    <>
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

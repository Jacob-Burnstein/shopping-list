import LogOutLink from "../../components/footerLinks/LogOutLink";
import StoreList from "../../components//store/StoreList";

const UserPage = () => {
  return (
    <>
      <main>
        <h1>Username</h1>
      </main>
      <StoreList />
      <footer>
        <LogOutLink />
      </footer>
    </>
  );
};

export default UserPage;

import StoreList from "../../../components/store/StoreList";
import getTokenInfo from "../../../utils/getTokenInfo";

const UserPage = () => {
  const tokenInfo = getTokenInfo();

  return (
    <>
      <h1 className="text-xl font-semibold pb-2">Your Stores</h1>
      <main>
        {tokenInfo ? (
          <StoreList />
        ) : (
          <p>You must be logged in to view this page.</p>
        )}
      </main>
    </>
  );
};

export default UserPage;

import { GoogleLogout } from "@react-oauth/google";

const clientId =
  "669117859281-8v0u7ajnh9i0pq6ui8t55gk2hvfltqrd.apps.googleusercontent.com";

function Logout() {
  const onSuccess = (res) => {
    console.log("Logout SUCCESS! ");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;

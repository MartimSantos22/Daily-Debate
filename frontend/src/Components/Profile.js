import React from "react";
import BigNews from "./BigNews";
import Header from "./Header";
import Footer from "./Footer";
import LoginMenu from "./LoginMenu";
import UserProfile from "./UserProfile"; // componente do perfil do usuário

function Profile() {
  const isLoggedIn = !!localStorage.getItem("token");
    <Header />
  return (
    <>
      <Header />
      {isLoggedIn ? <UserProfile /> : <LoginMenu />}
      <Footer />
    </>
  );

    <Footer />
}

export default Profile;

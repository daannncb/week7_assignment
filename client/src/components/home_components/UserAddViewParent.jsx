import UserNameForm from "./UserNameForm";
import AddMoviesHome from "./AddMoviesHome"; //? to be rendered conditionally when user state != ""
import ViewMoviesHome from "./ViewMoviesHome"; //? to be rendered conditionally when user state != ""

export default function UserAddViewParent({ user, handleSubmit }) {
  return (
    <>
      <UserNameForm user={user} handleSubmit={handleSubmit} />
      <div id="home-add-view-options">
        {user ? (
          <>
            <AddMoviesHome user={user} />
            <ViewMoviesHome />
          </>
        ) : (
          <p>please enter user</p>
        )}
      </div>
    </>
  );
}

import React, { Suspense } from "react";
import UserList from "./UserList";

const App: React.VFC<{}> = ({}) => {
  return (
    <div>
      <section>
        <h2>Hello, React</h2>
      </section>
      <Suspense fallback={<p>fetch user is Pending...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default App;

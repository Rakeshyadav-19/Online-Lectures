// To pass data from here we need to creatre a context

// Cretated data to share
import { createContext } from "react";


// Using this we can pass the data from this file to all files, as it wrpas the app.jsx
export const DataContext = createContext();

const UsersContext = ({ children }) => {
  const UserData = {
    username: "Rax Lord",
    Age: 20,
    City: "Nice",
  };
  const username = "Rax";
  return (
    <div>
      <DataContext.Provider value={UserData}>{children}</DataContext.Provider>
    </div>
  );
};

export default UsersContext;

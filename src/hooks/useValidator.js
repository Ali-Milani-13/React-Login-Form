const useValidator = (username, Password) => {
  const users = localStorage.getItem("users");
  const data = JSON.parse(users);
  const validator = () => {
    let truthTable = [];
    for (const property in data) {
      const user = Object.values(data[property]).includes(username);
      const pass = Object.values(data[property]).includes(Password);
      truthTable.push(user && pass);
    }

    return truthTable.includes(true);
  };
  return { validator };
};

export default useValidator;

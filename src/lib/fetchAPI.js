export const fetchRequest = async (urlPath, options = {}) => {
  try {
    const BASE_URL = "https://todo-73628-default-rtdb.firebaseio.com";
    const requestOption = {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        UserID: "Sagyn",
      },
    };

    if (options.method !== "GET") {
      requestOption.body = JSON.stringify(options.body);
    }

    const responce = await fetch(`${BASE_URL}/${urlPath}.json`, requestOption);
    const data = await responce.json();
    return data.data;
  } catch (error) {
    new Error(error);
  }
};

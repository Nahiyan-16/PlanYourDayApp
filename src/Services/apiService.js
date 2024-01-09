const BASE_URL = "http://localhost:3001";

export const signUpService = async (email, password, username, schedule) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username, schedule }),
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

export const loginService = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const { message, username } = data;
    return username;
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const getScheduleService = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/getSchedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const schedule = await response.json();
    return schedule;
  } catch (error) {
    console.error("Error", error.message);
  }
};

export const setScheduleService = async (email, formData) => {
  try {
    const response = await fetch(`${BASE_URL}/setSchedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, formData }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error", error.message);
  }
};

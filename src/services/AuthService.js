import axios from "axios";

const API_URL = "https://lms-backend-production-8431.up.railway.app/auth";

class AuthService {
    register(user) {
        return axios.post(`${API_URL}/register`, user);
    }

    login(credentials) {
        return axios.post(`${API_URL}/login`, credentials);
    }
}

export default new AuthService();

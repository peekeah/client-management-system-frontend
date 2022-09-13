import jwt_decode from "jwt-decode";

const validateToken = (req, res) => {
    const token = localStorage.getItem("token");

    const decodedToken = jwt_decode(token);
    if(decodedToken) {
        return decodedToken;
    } else {
        return 0;
    }
};

export default validateToken;

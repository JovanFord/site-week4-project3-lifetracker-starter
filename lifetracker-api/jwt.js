const jwt = require("jsonwebtoken")
const SECRET_KEY = "RICE"

const generateToken = (data) => jwt.sign(data, SECRET_KEY, {algorithm: "HS256", expiresIn: "1h"})

const validateTokens = (token) => jwt.verify(token, SECRET_KEY )

const testTokens = () =>{
    const user = {email: "random@email.com"}

    const token = generateToken(user)
    console.log("token:", token)
    const validateToken = validateTokens(token)
    console.log("validateToken:", validateToken)
}

testTokens()
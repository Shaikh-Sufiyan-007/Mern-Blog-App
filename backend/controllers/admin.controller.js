import jwt from 'jsonwebtoken'

export const adminLogin = async(req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password) return res.status(400).json({message: "Please enter email and password"});

        if(email !== process.env.ADMIN_EMAIL) {
            return res.status(400).json({message: "Invalid email"});
        }

        if(password !== process.env.ADMIN_PASSWORD) {
            return res.status(400).json({message: "Invalid password"});
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET, {expiresIn: "1d"});

        res.status(200).json({success: true ,message: "Login successful", token});
    } catch (error) {
        res.status(500).json({success: false,message: error.message});
        console.log(error);
    }
}
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

exports.protect = (req, res, next) => {
  const token = req.cookies.token; // Ensure token is correctly obtained from cookies
  if (!token) return res.status(401).json({ message: 'Not authorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use environment variable for secret
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Not authorized' });
  }
};

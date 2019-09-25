const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authRouter = require('../auth/auth-router');
const userRouter = require('../users/users-router');
const crimeTotalRouter = require('../population/pop-router')
const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use("/api/total",crimeTotalRouter)
server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);
server.get('/', (req, res) => {
	res.json({ api: 'my boy is alive' });
});




module.exports = server;
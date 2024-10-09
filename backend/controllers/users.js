const bcrypt = require('bcrypt');//npm install bcrypt
const jwt = require('jsonwebtoken');//npm install jsonwebtoken
const userModel = require('../models/user');
const { errorHandler, OK_STATUS, CREATED_STATUS } = require('../config');
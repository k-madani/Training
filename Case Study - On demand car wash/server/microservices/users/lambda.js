// lambda.js
'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const users = require('./app')
const server = awsServerlessExpress.createServer(users)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
// lambda.js
'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const admin = require('./app')
const server = awsServerlessExpress.createServer(admin)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
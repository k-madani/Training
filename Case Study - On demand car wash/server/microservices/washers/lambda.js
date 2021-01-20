// lambda.js
'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const washers = require('./app')
const server = awsServerlessExpress.createServer(washers)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
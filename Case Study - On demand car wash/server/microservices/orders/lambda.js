// lambda.js
'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const orders = require('./app')
const server = awsServerlessExpress.createServer(orders)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
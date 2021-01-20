// lambda.js
'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const offers = require('./app')
const server = awsServerlessExpress.createServer(offers)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
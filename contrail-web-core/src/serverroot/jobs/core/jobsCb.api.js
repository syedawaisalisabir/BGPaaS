/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

/* This file is automatically generated from the jobProcess.xml at
   Sun Nov 20 2016 01:02:58 GMT+0000 (UTC)
   Please do not edit this file.
 */

var parseJobsReq = require('../../common/parseJobsRequire')
  ;


if (!module.parent) {
  console.log("Call main app through 'node app'");
  process.exit(1);
}
var jobsCb = module.exports;


var defMaxActiveJobs = 10;
var maxActiveJobs = parseJobsReq.config.maxActiveJobs || defMaxActiveJobs;

jobsCb.jobsProcess = function() {}

jobsCb.addjobListenerEvent = function() {
}
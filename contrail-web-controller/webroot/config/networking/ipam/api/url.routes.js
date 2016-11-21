/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

/* This file is automatically generated from the parseURL.xml at
   Sun Nov 20 2016 01:02:58 GMT+0000 (UTC)
   Please do not edit this file.
 */

var parseURLReq = require(process.mainModule.exports["corePath"] + '/src/serverroot/common/parseURLRequire')
  , ipamconfigapi = require('./ipamconfig.api')
  ;


if (!module.parent) {
  console.log("Call main app through 'node app'");
  process.exit(1);
}
urlRoutes = module.exports;

/* Default handler for request timeout */
function defHandleReqTimeout (req, res)
{
  var str = "Request timed out: URL::" + req.url;
  if (req.pubChannel) {
    /* Delete the Req Pending Q Entry */
    parseURLReq.cacheApi.deleteCachePendingQueueEntry(req.pubChannel);
  };
  res.req.invalidated = true;
  res.send(parseURLReq.global.HTTP_STATUS_GATEWAY_TIMEOUT, str);
}

urlRoutes.registerURLsToApp = function(app) {
/* Register the URL with callback */
  app.get('/api/tenants/config/ipams', ipamconfigapi_listIpams);
  app.get('/api/tenants/config/ipam/:id', ipamconfigapi_getIpam);
  app.get('/api/tenants/config/ipam-details/:parentid', ipamconfigapi_getIpamDetails);
  app.post('/api/tenants/config/ipams', ipamconfigapi_createIpam);
  app.delete('/api/tenants/config/ipam/:id', ipamconfigapi_deleteIpam);
  app.put('/api/tenants/config/ipam/:id', ipamconfigapi_updateIpam);
  app.put('/api/tenants/config/ipam/:id/option', ipamconfigapi_updateIpamDns);


  parseURLReq.rbac.setFeatureByURL('/api/tenants/config/ipams', 'get', app.routes, 'ipamconfig');
  parseURLReq.rbac.setFeatureByURL('/api/tenants/config/ipam/:id', 'get', app.routes, 'ipamconfig');
  parseURLReq.rbac.setFeatureByURL('/api/tenants/config/ipam-details/:parentid', 'get', app.routes, 'ipamconfig');
  parseURLReq.rbac.setFeatureByURL('/api/tenants/config/ipams', 'post', app.routes, 'ipamconfig');
  parseURLReq.rbac.setFeatureByURL('/api/tenants/config/ipam/:id', 'delete', app.routes, 'ipamconfig');
  parseURLReq.rbac.setFeatureByURL('/api/tenants/config/ipam/:id', 'put', app.routes, 'ipamconfig');
  parseURLReq.rbac.setFeatureByURL('/api/tenants/config/ipam/:id/option', 'put', app.routes, 'ipamconfig');
}
ipamconfigapi_listIpams = function(req, res, next) {
  /* Check if this request needs to be added in 
     pendingQ 
   */
  var reqCtx = parseURLReq.longPoll.routeAll(req, res, next);
  if (null == reqCtx) {
    /* either not a valid URL, or unAuthed session */
  } else {
    /* Set the request timeout */
    parseURLReq.timeout(req, res, parseURLReq.global.DFLT_HTTP_REQUEST_TIMEOUT_TIME);
    req.once('timeout', defHandleReqTimeout);
    /* Now process the resuest */
    parseURLReq.longPoll.processPendingReq(reqCtx, next, ipamconfigapi.listIpams);
  }
}
ipamconfigapi_getIpam = function(req, res, next) {
  /* Check if this request needs to be added in 
     pendingQ 
   */
  var reqCtx = parseURLReq.longPoll.routeAll(req, res, next);
  if (null == reqCtx) {
    /* either not a valid URL, or unAuthed session */
  } else {
    /* Set the request timeout */
    parseURLReq.timeout(req, res, parseURLReq.global.DFLT_HTTP_REQUEST_TIMEOUT_TIME);
    req.once('timeout', defHandleReqTimeout);
    /* Now process the resuest */
    parseURLReq.longPoll.processPendingReq(reqCtx, next, ipamconfigapi.getIpam);
  }
}
ipamconfigapi_getIpamDetails = function(req, res, next) {
  /* Check if this request needs to be added in 
     pendingQ 
   */
  var reqCtx = parseURLReq.longPoll.routeAll(req, res, next);
  if (null == reqCtx) {
    /* either not a valid URL, or unAuthed session */
  } else {
    /* Set the request timeout */
    parseURLReq.timeout(req, res, parseURLReq.global.DFLT_HTTP_REQUEST_TIMEOUT_TIME);
    req.once('timeout', defHandleReqTimeout);
    /* Now process the resuest */
    parseURLReq.longPoll.processPendingReq(reqCtx, next, ipamconfigapi.getIpamDetails);
  }
}
ipamconfigapi_createIpam = function(req, res, next) {
  /* Check if this request needs to be added in 
     pendingQ 
   */
  var reqCtx = parseURLReq.longPoll.routeAll(req, res, next);
  if (null == reqCtx) {
    /* either not a valid URL, or unAuthed session */
  } else {
    /* Set the request timeout */
    parseURLReq.timeout(req, res, parseURLReq.global.DFLT_HTTP_REQUEST_TIMEOUT_TIME);
    req.once('timeout', defHandleReqTimeout);
    /* Now process the resuest */
    parseURLReq.longPoll.processPendingReq(reqCtx, next, ipamconfigapi.createIpam);
  }
}
ipamconfigapi_deleteIpam = function(req, res, next) {
  /* Check if this request needs to be added in 
     pendingQ 
   */
  var reqCtx = parseURLReq.longPoll.routeAll(req, res, next);
  if (null == reqCtx) {
    /* either not a valid URL, or unAuthed session */
  } else {
    /* Set the request timeout */
    parseURLReq.timeout(req, res, parseURLReq.global.DFLT_HTTP_REQUEST_TIMEOUT_TIME);
    req.once('timeout', defHandleReqTimeout);
    /* Now process the resuest */
    parseURLReq.longPoll.processPendingReq(reqCtx, next, ipamconfigapi.deleteIpam);
  }
}
ipamconfigapi_updateIpam = function(req, res, next) {
  /* Check if this request needs to be added in 
     pendingQ 
   */
  var reqCtx = parseURLReq.longPoll.routeAll(req, res, next);
  if (null == reqCtx) {
    /* either not a valid URL, or unAuthed session */
  } else {
    /* Set the request timeout */
    parseURLReq.timeout(req, res, parseURLReq.global.DFLT_HTTP_REQUEST_TIMEOUT_TIME);
    req.once('timeout', defHandleReqTimeout);
    /* Now process the resuest */
    parseURLReq.longPoll.processPendingReq(reqCtx, next, ipamconfigapi.updateIpam);
  }
}
ipamconfigapi_updateIpamDns = function(req, res, next) {
  /* Check if this request needs to be added in 
     pendingQ 
   */
  var reqCtx = parseURLReq.longPoll.routeAll(req, res, next);
  if (null == reqCtx) {
    /* either not a valid URL, or unAuthed session */
  } else {
    /* Set the request timeout */
    parseURLReq.timeout(req, res, parseURLReq.global.DFLT_HTTP_REQUEST_TIMEOUT_TIME);
    req.once('timeout', defHandleReqTimeout);
    /* Now process the resuest */
    parseURLReq.longPoll.processPendingReq(reqCtx, next, ipamconfigapi.updateIpamDns);
  }
}
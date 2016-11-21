/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

/* This file is automatically generated from the parseURL.xml at
   Sun Nov 20 2016 01:02:58 GMT+0000 (UTC)
   Please do not edit this file.
 */

var parseURLReq = require(process.mainModule.exports["corePath"] + '/src/serverroot/common/parseURLRequire')
  , underlayApi = require('./underlay_overlay.api')
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
  app.get('/api/tenant/networking/underlay-topology', underlayApi_getUnderlayTopology);
  app.post('/api/tenant/networking/underlay-path', underlayApi_getUnderlayPath);
  app.post('/api/tenant/networking/underlay-stats', underlayApi_getUnderlayStats);
  app.post('/api/tenant/networking/trace-flow', underlayApi_getTraceFlow);
  app.post('/api/tenant/networking/underlay/prouter-link-stats', underlayApi_getpRouterLinkStats);
  app.get('/api/tenant/networking/underlay/vrouter/stats', underlayApi_getvnStatsPerVrouter);


  parseURLReq.rbac.setFeatureByURL('/api/tenant/networking/underlay-topology', 'get', app.routes, 'underlay');
  parseURLReq.rbac.setFeatureByURL('/api/tenant/networking/underlay-path', 'post', app.routes, 'underlay');
  parseURLReq.rbac.setFeatureByURL('/api/tenant/networking/underlay-stats', 'post', app.routes, 'underlay');
  parseURLReq.rbac.setFeatureByURL('/api/tenant/networking/trace-flow', 'post', app.routes, 'underlay');
  parseURLReq.rbac.setFeatureByURL('/api/tenant/networking/underlay/prouter-link-stats', 'post', app.routes, 'underlay');
  parseURLReq.rbac.setFeatureByURL('/api/tenant/networking/underlay/vrouter/stats', 'get', app.routes, 'underlay');
}
underlayApi_getUnderlayTopology = function(req, res, next) {
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
    parseURLReq.longPoll.processPendingReq(reqCtx, next, underlayApi.getUnderlayTopology);
  }
}
underlayApi_getUnderlayPath = function(req, res, next) {
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
    parseURLReq.longPoll.processPendingReq(reqCtx, next, underlayApi.getUnderlayPath);
  }
}
underlayApi_getUnderlayStats = function(req, res, next) {
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
    parseURLReq.longPoll.processPendingReq(reqCtx, next, underlayApi.getUnderlayStats);
  }
}
underlayApi_getTraceFlow = function(req, res, next) {
  /* Check if this request needs to be added in 
     pendingQ 
   */
  var reqCtx = parseURLReq.longPoll.routeAll(req, res, next);
  if (null == reqCtx) {
    /* either not a valid URL, or unAuthed session */
  } else {
    /* Set the request timeout */
    parseURLReq.timeout(req, res, 300);
    req.once('timeout', defHandleReqTimeout);
    /* Now process the resuest */
    parseURLReq.longPoll.processPendingReq(reqCtx, next, underlayApi.getTraceFlow);
  }
}
underlayApi_getpRouterLinkStats = function(req, res, next) {
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
    parseURLReq.longPoll.processPendingReq(reqCtx, next, underlayApi.getpRouterLinkStats);
  }
}
underlayApi_getvnStatsPerVrouter = function(req, res, next) {
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
    parseURLReq.longPoll.processPendingReq(reqCtx, next, underlayApi.getvnStatsPerVrouter);
  }
}
/*
 * Copyright (c) 2014 Juniper Networks, Inc. All rights reserved.
 */

/* This file is automatically generated from the featureList.xml at
   Sun Nov 20 2016 01:02:58 GMT+0000 (UTC)
   Please do not edit this file.
 */

var parseFeatureReq = require(process.mainModule.exports["corePath"] + '/src/serverroot/common/parseFeatureRequire')
  ;


if (!module.parent) {
  console.log("Call main app through 'node app'");
  process.exit(1);
}
featureList = module.exports;

featureList.registerFeature = function() {
  parseFeatureReq.rbac.addFeatureAccess('bgp', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('pcapture', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('control-node', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('analytics-node', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('config-node', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('database-node', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('query-engine', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('compute-node', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('globalvrouterconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('underlay', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('mxviz', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('vnconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('vCenterVNconfig', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('policyconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('routingpolicyconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('fipconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('projectconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('ipamconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('stconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('siconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('virtualdnsserversconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('virtualdnsrecordsconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('quotasconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('securitygroupconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('logicalroutersconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('virtualroutersconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('physicalroutersconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('physicalinterfacesconfig', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('portsconfigapi', 'member,cloudAdmin', 'member,cloudAdmin');
  parseFeatureReq.rbac.addFeatureAccess('portconfig', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('configUtil', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('svcAppliance', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('svcApplianceSet', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('rtTableConfig', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('bgpasaserviceconfig', 'all', 'all');
  parseFeatureReq.rbac.addFeatureAccess('routeaggregateconfig', 'all', 'all');
}

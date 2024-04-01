
if (typeof gdjs.evtsExt__CameraShake__Create !== "undefined") {
  gdjs.evtsExt__CameraShake__Create.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__Create = {};


gdjs.evtsExt__CameraShake__Create.userFunc0x122cf08 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const name = eventsFunctionContext.getArgument("Name");

gdjs._cameraShakeExtension.noiseManager.getGenerator(name);
};
gdjs.evtsExt__CameraShake__Create.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__Create.userFunc0x122cf08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CameraShake__Create.func = function(runtimeScene, Name, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Name") return Name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__Create.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CameraShake__Create.registeredGdjsCallbacks = [];
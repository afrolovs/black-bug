gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.GDBGObjects1= [];
gdjs.Main_32MenuCode.GDBGObjects2= [];
gdjs.Main_32MenuCode.GDBGObjects3= [];
gdjs.Main_32MenuCode.GDControlsObjects1= [];
gdjs.Main_32MenuCode.GDControlsObjects2= [];
gdjs.Main_32MenuCode.GDControlsObjects3= [];
gdjs.Main_32MenuCode.GDAuthorTitleObjects1= [];
gdjs.Main_32MenuCode.GDAuthorTitleObjects2= [];
gdjs.Main_32MenuCode.GDAuthorTitleObjects3= [];
gdjs.Main_32MenuCode.GDAudioTitleObjects1= [];
gdjs.Main_32MenuCode.GDAudioTitleObjects2= [];
gdjs.Main_32MenuCode.GDAudioTitleObjects3= [];
gdjs.Main_32MenuCode.GDAuthorNameObjects1= [];
gdjs.Main_32MenuCode.GDAuthorNameObjects2= [];
gdjs.Main_32MenuCode.GDAuthorNameObjects3= [];
gdjs.Main_32MenuCode.GDAudioNameObjects1= [];
gdjs.Main_32MenuCode.GDAudioNameObjects2= [];
gdjs.Main_32MenuCode.GDAudioNameObjects3= [];
gdjs.Main_32MenuCode.GDRerunBtnObjects1= [];
gdjs.Main_32MenuCode.GDRerunBtnObjects2= [];
gdjs.Main_32MenuCode.GDRerunBtnObjects3= [];
gdjs.Main_32MenuCode.GDStartGameBtnObjects1= [];
gdjs.Main_32MenuCode.GDStartGameBtnObjects2= [];
gdjs.Main_32MenuCode.GDStartGameBtnObjects3= [];
gdjs.Main_32MenuCode.GDBlackBGObjects1= [];
gdjs.Main_32MenuCode.GDBlackBGObjects2= [];
gdjs.Main_32MenuCode.GDBlackBGObjects3= [];
gdjs.Main_32MenuCode.GDExitBtnObjects1= [];
gdjs.Main_32MenuCode.GDExitBtnObjects2= [];
gdjs.Main_32MenuCode.GDExitBtnObjects3= [];
gdjs.Main_32MenuCode.GDBlackRetryBGObjects1= [];
gdjs.Main_32MenuCode.GDBlackRetryBGObjects2= [];
gdjs.Main_32MenuCode.GDBlackRetryBGObjects3= [];
gdjs.Main_32MenuCode.GDShareBtnImgObjects1= [];
gdjs.Main_32MenuCode.GDShareBtnImgObjects2= [];
gdjs.Main_32MenuCode.GDShareBtnImgObjects3= [];
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1= [];
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects2= [];
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects3= [];
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1= [];
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects2= [];
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects3= [];
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1= [];
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects2= [];
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects3= [];
gdjs.Main_32MenuCode.GDShareHintObjects1= [];
gdjs.Main_32MenuCode.GDShareHintObjects2= [];
gdjs.Main_32MenuCode.GDShareHintObjects3= [];
gdjs.Main_32MenuCode.GDShareBtnObjects1= [];
gdjs.Main_32MenuCode.GDShareBtnObjects2= [];
gdjs.Main_32MenuCode.GDShareBtnObjects3= [];
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1= [];
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects2= [];
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects3= [];
gdjs.Main_32MenuCode.GDProgressObjects1= [];
gdjs.Main_32MenuCode.GDProgressObjects2= [];
gdjs.Main_32MenuCode.GDProgressObjects3= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.Main_32MenuCode.GDControlsObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDControlsObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDControlsObjects2[i].getBehavior("Text").setText(gdjs.Main_32MenuCode.GDControlsObjects2[i].getBehavior("Text").getText() + ("Управляй героем тапами по частям экрана -" + gdjs.evtTools.string.newLine() + "влево и вправо."));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Controls"), gdjs.Main_32MenuCode.GDControlsObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDControlsObjects1[i].getBehavior("Text").setText(gdjs.Main_32MenuCode.GDControlsObjects1[i].getBehavior("Text").getText() + ("Управляй героем стрелками на клавиатуре -" + gdjs.evtTools.string.newLine() + "влево и вправо."));
}
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDRerunBtnObjects1Objects = Hashtable.newFrom({"RerunBtn": gdjs.Main_32MenuCode.GDRerunBtnObjects1});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDShareBtnObjects1Objects = Hashtable.newFrom({"ShareBtn": gdjs.Main_32MenuCode.GDShareBtnObjects1});
gdjs.Main_32MenuCode.asyncCallback13349324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback13349324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.asyncCallback13348868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ShareHint"), gdjs.Main_32MenuCode.GDShareHintObjects2);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareHintObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareHintObjects2[i].getBehavior("Tween").addObjectOpacityTween2("ColorChange", 0, "easeInOutQuad", 2, false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
for (const obj of gdjs.Main_32MenuCode.GDShareHintObjects1) asyncObjectsList.addObject("ShareHint", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback13348868(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) != "None";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !((gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("status"))).startsWith("2"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13356244);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDShareHintObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareHintObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareHintObjects2[i].getBehavior("Text").setText("Ошибка отправки данных (" + runtimeScene.getScene().getVariables().getFromIndex(1).getChild("status").getAsString() + ")");
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareHintObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareHintObjects2[i].setColor("255;83;83");
}
}}

}


};gdjs.Main_32MenuCode.asyncCallback13354852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("ShareHint"), gdjs.Main_32MenuCode.GDShareHintObjects2);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareHintObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareHintObjects2[i].getBehavior("Text").setText("Ваш рекорд зафиксирован!");
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
for (const obj of gdjs.Main_32MenuCode.GDShareHintObjects1) asyncObjectsList.addObject("ShareHint", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func(runtimeScene, "stats", runtimeScene.getScene().getVariables().getFromIndex(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback13354852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13339252);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackBG"), gdjs.Main_32MenuCode.GDBlackBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRetryBG"), gdjs.Main_32MenuCode.GDBlackRetryBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("CurrentScoreHint"), gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("CurrentScoreText"), gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("CurrentScoreValue"), gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.Main_32MenuCode.GDExitBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShareBtnImg"), gdjs.Main_32MenuCode.GDShareBtnImgObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShareHint"), gdjs.Main_32MenuCode.GDShareHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartGameBtn"), gdjs.Main_32MenuCode.GDStartGameBtnObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDStartGameBtnObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDStartGameBtnObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDExitBtnObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDExitBtnObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackRetryBGObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackRetryBGObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareBtnImgObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareBtnImgObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareHintObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareHintObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackBGObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackBGObjects1[i].getBehavior("Tween").addObjectOpacityTween2("BGoff", 0, "easeOutQuad", 1, true);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(75);
variables._declare("MiscAlpha", variable);
}
gdjs.Main_32MenuCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13343396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AudioName"), gdjs.Main_32MenuCode.GDAudioNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("AudioTitle"), gdjs.Main_32MenuCode.GDAudioTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("AuthorName"), gdjs.Main_32MenuCode.GDAuthorNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("AuthorTitle"), gdjs.Main_32MenuCode.GDAuthorTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("BlackRetryBG"), gdjs.Main_32MenuCode.GDBlackRetryBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("CurrentScoreHint"), gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("CurrentScoreText"), gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("CurrentScoreValue"), gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShareBtnImg"), gdjs.Main_32MenuCode.GDShareBtnImgObjects1);
gdjs.Main_32MenuCode.GDRerunBtnObjects1.length = 0;

gdjs.Main_32MenuCode.GDShareBtnObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDRerunBtnObjects1Objects, 0, 770, "Modal");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDShareBtnObjects1Objects, 9, 983, "Modal");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareBtnObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareBtnObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareBtnObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareBtnObjects1[i].getBehavior("Resizable").setSize(200, 200);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBlackRetryBGObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBlackRetryBGObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareBtnImgObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareBtnImgObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDAuthorTitleObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDAuthorTitleObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDAuthorNameObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDAuthorNameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDAudioTitleObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDAudioTitleObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDAudioNameObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDAudioNameObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Main_32MenuCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}
gdjs.Main_32MenuCode.localVariables.pop();

}


{

gdjs.copyArray(runtimeScene.getObjects("ShareHint"), gdjs.Main_32MenuCode.GDShareHintObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDShareHintObjects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDShareHintObjects1[i].getBehavior("Tween").isPlaying("ColorChange")) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDShareHintObjects1[k] = gdjs.Main_32MenuCode.GDShareHintObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDShareHintObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDShareHintObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareHintObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareHintObjects1[i].getBehavior("Tween").addObjectOpacityTween2("ColorChange", 255, "easeInOutQuad", 2, false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGameBtn"), gdjs.Main_32MenuCode.GDStartGameBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDStartGameBtnObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDStartGameBtnObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDStartGameBtnObjects1[k] = gdjs.Main_32MenuCode.GDStartGameBtnObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDStartGameBtnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13350092);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://okko.vernosti.keenetic.link/play", "", "GET", "", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "The game", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitBtn"), gdjs.Main_32MenuCode.GDExitBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDExitBtnObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDExitBtnObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDExitBtnObjects1[k] = gdjs.Main_32MenuCode.GDExitBtnObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDExitBtnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13351764);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LoginForm", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShareBtn"), gdjs.Main_32MenuCode.GDShareBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDShareBtnObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDShareBtnObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDShareBtnObjects1[k] = gdjs.Main_32MenuCode.GDShareBtnObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDShareBtnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13352620);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDShareBtnObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ShareBtnImg"), gdjs.Main_32MenuCode.GDShareBtnImgObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShareHint"), gdjs.Main_32MenuCode.GDShareHintObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareBtnImgObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareBtnImgObjects1[i].getBehavior("Opacity").setOpacity(75);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareBtnObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareBtnObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShareHintObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShareHintObjects1[i].getBehavior("Text").setText("Отправляем данные...");
}
}{gdjs.evtsExt__AdvancedHTTP__CreateRequest.func(runtimeScene, "stats", "https://okko.vernosti.keenetic.link/submit", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__UseCORSBypass.func(runtimeScene, "stats", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestMethod.func(runtimeScene, "stats", "GET", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AdvancedHTTP__SetRequestURL.func(runtimeScene, "https://okko.vernosti.keenetic.link/submit?name=" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + "&score=" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "&id=player" + gdjs.evtTools.common.toString(gdjs.evtTools.string.strLen(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString()) + 4096), "stats", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1[i].HasJustBeenChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1[k] = gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1[i].HasJustBeenUnchecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1[k] = gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setBoolean(false);
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects3.length = 0;
gdjs.Main_32MenuCode.GDAuthorTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDAuthorTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDAuthorTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDAudioTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDAudioTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDAudioTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDAuthorNameObjects1.length = 0;
gdjs.Main_32MenuCode.GDAuthorNameObjects2.length = 0;
gdjs.Main_32MenuCode.GDAuthorNameObjects3.length = 0;
gdjs.Main_32MenuCode.GDAudioNameObjects1.length = 0;
gdjs.Main_32MenuCode.GDAudioNameObjects2.length = 0;
gdjs.Main_32MenuCode.GDAudioNameObjects3.length = 0;
gdjs.Main_32MenuCode.GDRerunBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDRerunBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDRerunBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartGameBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartGameBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartGameBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlackBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlackBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlackBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDExitBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlackRetryBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlackRetryBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlackRetryBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDShareBtnImgObjects1.length = 0;
gdjs.Main_32MenuCode.GDShareBtnImgObjects2.length = 0;
gdjs.Main_32MenuCode.GDShareBtnImgObjects3.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects3.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects2.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects3.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects2.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects3.length = 0;
gdjs.Main_32MenuCode.GDShareHintObjects1.length = 0;
gdjs.Main_32MenuCode.GDShareHintObjects2.length = 0;
gdjs.Main_32MenuCode.GDShareHintObjects3.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects3.length = 0;
gdjs.Main_32MenuCode.GDProgressObjects1.length = 0;
gdjs.Main_32MenuCode.GDProgressObjects2.length = 0;
gdjs.Main_32MenuCode.GDProgressObjects3.length = 0;

gdjs.Main_32MenuCode.eventsList5(runtimeScene);
gdjs.Main_32MenuCode.GDBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects3.length = 0;
gdjs.Main_32MenuCode.GDAuthorTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDAuthorTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDAuthorTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDAudioTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDAudioTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDAudioTitleObjects3.length = 0;
gdjs.Main_32MenuCode.GDAuthorNameObjects1.length = 0;
gdjs.Main_32MenuCode.GDAuthorNameObjects2.length = 0;
gdjs.Main_32MenuCode.GDAuthorNameObjects3.length = 0;
gdjs.Main_32MenuCode.GDAudioNameObjects1.length = 0;
gdjs.Main_32MenuCode.GDAudioNameObjects2.length = 0;
gdjs.Main_32MenuCode.GDAudioNameObjects3.length = 0;
gdjs.Main_32MenuCode.GDRerunBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDRerunBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDRerunBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDStartGameBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDStartGameBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDStartGameBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlackBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlackBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlackBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDExitBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDExitBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDExitBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDBlackRetryBGObjects1.length = 0;
gdjs.Main_32MenuCode.GDBlackRetryBGObjects2.length = 0;
gdjs.Main_32MenuCode.GDBlackRetryBGObjects3.length = 0;
gdjs.Main_32MenuCode.GDShareBtnImgObjects1.length = 0;
gdjs.Main_32MenuCode.GDShareBtnImgObjects2.length = 0;
gdjs.Main_32MenuCode.GDShareBtnImgObjects3.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreTextObjects3.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects1.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects2.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreHintObjects3.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects1.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects2.length = 0;
gdjs.Main_32MenuCode.GDCurrentScoreValueObjects3.length = 0;
gdjs.Main_32MenuCode.GDShareHintObjects1.length = 0;
gdjs.Main_32MenuCode.GDShareHintObjects2.length = 0;
gdjs.Main_32MenuCode.GDShareHintObjects3.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects1.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects2.length = 0;
gdjs.Main_32MenuCode.GDShareBtnObjects3.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteToggleObjects3.length = 0;
gdjs.Main_32MenuCode.GDProgressObjects1.length = 0;
gdjs.Main_32MenuCode.GDProgressObjects2.length = 0;
gdjs.Main_32MenuCode.GDProgressObjects3.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;

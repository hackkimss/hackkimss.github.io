var xhr = new XMLHttpRequest();
xhr.open('POST', '/sdm/security/user/updateRoleServiceSettingClient.rui', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
xhr.send('dui_datasetdata=[{"metaData":{"dataSetId":"dsAppWorker","count":1,"totalCount":0},"records":[{"duistate":1,"appIds":"visitportal,lgedumadang,CMIS","userId":"MJUSERtest","useYn":"Y"}]}]&dui_datasetdatatype=1&');

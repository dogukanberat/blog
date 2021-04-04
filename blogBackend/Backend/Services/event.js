let async = require('async'),
    parseString = require('xml2js').parseString;

let util = require('../Utilities/util'),
    eventDAO = require('../DAO/eventDAO');
//config = require("../Utilities/config").config;


/**API to create the atricle */
let createFollower = (data, callback) => {
    async.auto({
        event: (cb) => {
            var dataToSet = {
                "mail": data.mail
            }
            console.log(dataToSet);
            eventDAO.createFollower(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.event);
    });
}

/**API to update the event */
let updateFollower = (data,callback) => {
    async.auto({
        eventUpdate :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id : data.id,
            }
            var dataToSet={
                "mail": data.mail


            }
            console.log(criteria,'test',dataToSet);
            eventDAO.updateFollower(criteria, dataToSet, (err, dbData)=>{
                if(err){
                    cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                    return;
                }
                else{
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
                }
            });
        }
    }, (err,response) => {
        callback(response.eventUpdate);
    });
}

/**API to delete the subject */
let deleteFollower = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removeFollower :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            eventDAO.deleteFollower(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removeFollower);
    });
}

/***API to get the event list */
let getFollower = (data, callback) => {
    async.auto({
        event: (cb) => {
            eventDAO.getFollower({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}

/***API to get the event detail by id */
let getFollowerById = (data, callback) => {
    async.auto({
        event: (cb) => {
            let criteria = {
                "id":data.id
            }
            eventDAO.getFollowerDetail(criteria,(err, data) => {
                if (err) {
                    console.log(err,'error----');
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}




/**API to create the atricle */
let createUser = (data, callback) => {
    async.auto({
        event: (cb) => {
            var dataToSet = {
                "uName": data.uName,
                "pW":data.pW,
                "uType":data.uType,
            }
            console.log(dataToSet);
            eventDAO.createUser(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.event);
    });
}

/**API to update the event */
let updateUser = (data,callback) => {
    async.auto({
        eventUpdate :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id : data.id,
            }
            var dataToSet={
                "uName": data.uName,
                "pW":data.pW,
                "uType":data.uType,

            }
            console.log(criteria,'test',dataToSet);
            eventDAO.updateUser(criteria, dataToSet, (err, dbData)=>{
                if(err){
                    cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                    return;
                }
                else{
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
                }
            });
        }
    }, (err,response) => {
        callback(response.eventUpdate);
    });
}

/**API to delete the subject */
let deleteUser = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removeUser :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            eventDAO.deleteUser(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removeUser);
    });
}

/***API to get the event list */
let getUser = (data, callback) => {
    async.auto({
        event: (cb) => {
            eventDAO.getUser({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}

/***API to get the event detail by id */
let getUserById = (data, callback) => {
    async.auto({
        event: (cb) => {
            let criteria = {
                "id":data.id
            }
            eventDAO.getUserDetail(criteria,(err, data) => {
                if (err) {
                    console.log(err,'error----');
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}












/**API to create the atricle */
let createFooterLink = (data, callback) => {
    async.auto({
        footerlink: (cb) => {
            var dataToSet = {
                "name":data.name?data.name:'',
                "url":data.url
            }
            console.log(dataToSet);
            eventDAO.createFooterLink(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.footerlink);
    });
}


/**API to update the FooterLink */
let updateFooterLink = (data,callback) => {
    async.auto({
        footerlinkUpdate :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id : data.id,
            }
            var dataToSet={
                "name": data.name,
                "url": data.url
            }
            console.log(criteria,'test',dataToSet);
            eventDAO.updateFooterLink(criteria, dataToSet, (err, dbData)=>{
                if(err){
                    cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                    return;
                }
                else{
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
                }
            });
        }
    }, (err,response) => {
        callback(response.footerlinkUpdate);
    });
}

/**API to delete the subject */
let deleteFooterLink = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removeFooterLink :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            eventDAO.deleteFooterLink(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removeFooterLink);
    });
}

/***API to get the footerlink list */
let getFooterLink = (data, callback) => {
    async.auto({
        footerlink: (cb) => {
            eventDAO.getFooterLink({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.footerlink);
    })
}

/***API to get the footerlink detail by id */
let getFooterLinkById = (data, callback) => {
    async.auto({
        footerlink: (cb) => {
            let criteria = {
                "id":data.id
            }
            eventDAO.getFooterLinkDetail(criteria,(err, data) => {
                if (err) {
                    console.log(err,'error----');
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.footerlink);
    })
}




/**API to create the atricle */
let createEvent = (data, callback) => {
    async.auto({
        event: (cb) => {
            var dataToSet = {
                "category":data.category?data.category:'',
                "title":data.title,
                "image":data.image,
                "iframeLink":data.iframeLink,
                "descR":data.descR,
                "descRDJ":data.descRDJ

            }
            console.log(dataToSet);
            eventDAO.createEvent(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.event);
    });
}

/**API to update the event */
let updateEvent = (data,callback) => {
    async.auto({
        eventUpdate :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id : data.id,
            }
            var dataToSet={
                "category": data.category,
                "title":data.title,
                "image":data.image,
                "iframeLink":data.iframeLink,
                "descR":data.descR,
                "descRDJ":data.descRDJ

            }
            console.log(criteria,'test',dataToSet);
            eventDAO.updateEvent(criteria, dataToSet, (err, dbData)=>{
                if(err){
                    cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                    return;
                }
                else{
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
                }
            });
        }
    }, (err,response) => {
        callback(response.eventUpdate);
    });
}

/**API to delete the subject */
let deleteEvent = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removeEvent :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            eventDAO.deleteEvent(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removeEvent);
    });
}

/***API to get the event list */
let getEvent = (data, callback) => {
    async.auto({
        event: (cb) => {
            eventDAO.getEvent({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}

/***API to get the event detail by id */
let getEventById = (data, callback) => {
    async.auto({
        event: (cb) => {
            let criteria = {
                "id":data.id
            }
            eventDAO.getEventDetail(criteria,(err, data) => {
                if (err) {
                    console.log(err,'error----');
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}








/**API to create the atricle */
let createUploadLink = (data, callback) => {
    async.auto({
        link: (cb) => {
            var dataToSet = {
                "link":data.link
            }
            console.log(dataToSet);
            eventDAO.createUploadLink(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.link);
    });
}

/**API to update the event */
let updateUploadLink = (data,callback) => {
    async.auto({
        linkUpdate :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id : data.id,
            }
            var dataToSet={
                "link":data.link
            }
            console.log(criteria,'test',dataToSet);
            eventDAO.updateUploadLink(criteria, dataToSet, (err, dbData)=>{
                if(err){
                    cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                    return;
                }
                else{
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
                }
            });
        }
    }, (err,response) => {
        callback(response.linkUpdate);
    });
}

/**API to delete the subject */
let deleteUploadLink = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removeLink :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            eventDAO.deleteUploadLink(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removeLink);
    });
}

/***API to get the event list */
let getUploadLink = (data, callback) => {
    async.auto({
        link: (cb) => {
            eventDAO.getUploadLink({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.link);
    })
}

/***API to get the event detail by id */
let getUploadLinkById = (data, callback) => {
    async.auto({
        event: (cb) => {
            let criteria = {
                "id":data.id
            }
            eventDAO.getUploadLinkDetail(criteria,(err, data) => {
                if (err) {
                    console.log(err,'error----');
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}











/**API to create the atricle */
let createPage = (data, callback) => {
    async.auto({
        event: (cb) => {
            var dataToSet = {
                "category":data.category?data.category:'',
                "title":data.title,
                "descR":data.descR
            }
            console.log(dataToSet);
            eventDAO.createPage(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.event);
    });
}

/**API to update the event */
let updatePage = (data,callback) => {
    async.auto({
        eventUpdate :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id : data.id,
            }
            var dataToSet={
                "category": data.category,
                "title":data.title,
                "descR":data.descR
            }
            console.log(criteria,'test',dataToSet);
            eventDAO.updatePage(criteria, dataToSet, (err, dbData)=>{
                if(err){
                    cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                    return;
                }
                else{
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
                }
            });
        }
    }, (err,response) => {
        callback(response.eventUpdate);
    });
}

/**API to delete the subject */
let deletePage = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removePage :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            eventDAO.deletePage(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removePage);
    });
}

/***API to get the event list */
let getPage = (data, callback) => {
    async.auto({
        event: (cb) => {
            eventDAO.getPage({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}

/***API to get the event detail by id */
let getPageById = (data, callback) => {
    async.auto({
        event: (cb) => {
            let criteria = {
                "id":data.id
            }
            eventDAO.getPageDetail(criteria,(err, data) => {
                if (err) {
                    console.log(err,'error----');
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}


/**API to create the atricle */
let createEventCategory = (data, callback) => {
    async.auto({
        event: (cb) => {
            var dataToSet = {
                "category":data.category?data.category:'',

            }
            console.log(dataToSet);
            eventDAO.createEventCategory(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.event);
    });
}

/**API to update the event */
let updateEventCategory = (data,callback) => {
    async.auto({
        eventUpdate :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id : data.id,
            }
            var dataToSet={
                "category": data.category
            }
            console.log(criteria,'test',dataToSet);
            eventDAO.updateEventCategory(criteria, dataToSet, (err, dbData)=>{
                if(err){
                    cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                    return;
                }
                else{
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
                }
            });
        }
    }, (err,response) => {
        callback(response.eventUpdate);
    });
}

/**API to delete the subject */
let deleteEventCategory = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removeEventCategory :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            eventDAO.deleteEventCategory(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removeEventCategory);
    });
}

/***API to get the event list */
let getEventCategory = (data, callback) => {
    async.auto({
        event: (cb) => {
            eventDAO.getEventCategory({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.event);
    })
}

/***API to get the event detail by id */
let getEventCategoryById = (data, callback) => {
    async.auto({
        eventCategoryById: (cb) => {
            let criteria = {
                "id":data.id
            }
            eventDAO.getEventCategoryDetail(criteria,(err, data) => {
                if (err) {
                    console.log(err,'error----');
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.eventCategoryById);
    })
}


/**API to create the atricle */
let createSlider = (data, callback) => {
    async.auto({
        slider: (cb) => {
            var dataToSet = {
                "url":data.url?data.url:'',
                "href":data.href?data.href:'',

            }
            console.log(dataToSet);
            eventDAO.createSlider(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.slider);
    });
}

/**API to update the event */
let updateSlider = (data,callback) => {
    async.auto({
        sliderUpdate :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            console.log('phase 1');
            var criteria = {
                id : data.id,
            }
            var dataToSet={
                "url": data.url,
                "href": data.href
            }
            console.log(criteria,'test',dataToSet);
            eventDAO.updateSlider(criteria, dataToSet, (err, dbData)=>{
                if(err){
                    cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                    return;
                }
                else{
                    cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
                }
            });
        }
    }, (err,response) => {
        callback(response.sliderUpdate);
    });
}

/**API to delete the subject */
let deleteSlider = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removeSlider :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            eventDAO.deleteSlider(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removeSlider);
    });
}

/***API to get the event list */
let getSlider = (data, callback) => {
    async.auto({
        slider: (cb) => {
            eventDAO.getSlider({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.slider);
    })
}

/***API to get the event detail by id */
let getSliderById = (data, callback) => {
    async.auto({
        sliderById: (cb) => {
            let criteria = {
                "id":data.id
            }
            eventDAO.getSliderDetail(criteria,(err, data) => {
                if (err) {
                    console.log(err,'error----');
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data[0]);
                return;
            });
        }
    }, (err, response) => {
        callback(response.sliderById);
    })
}

module.exports = {

    getFollower : getFollower,
    createFollower : createFollower,
    deleteFollower : deleteFollower,
    updateFollower : updateFollower,
    getFollowerById : getFollowerById,

    getUser : getUser,
    createUser : createUser,
    deleteUser : deleteUser,
    updateUser : updateUser,
    getUserById : getUserById,

    getUploadLink : getUploadLink,
    createUploadLink : createUploadLink,
    deleteUploadLink : deleteUploadLink,
    updateUploadLink : updateUploadLink,
    getUploadLinkById : getUploadLinkById,

    getPage : getPage,
    createPage : createPage,
    deletePage : deletePage,
    updatePage : updatePage,
    getPageById : getPageById,

    getEvent : getEvent,
    createEvent : createEvent,
    deleteEvent : deleteEvent,
    updateEvent : updateEvent,
    getEventById : getEventById,

    createSlider : createSlider,
    updateSlider : updateSlider,
    deleteSlider : deleteSlider,
    getSlider : getSlider,
    getSliderById : getSliderById,

    createEventCategory : createEventCategory,
    updateEventCategory : updateEventCategory,
    deleteEventCategory : deleteEventCategory,
    getEventCategory : getEventCategory,
    getEventCategoryById : getEventCategoryById,


    getFooterLink : getFooterLink,
    createFooterLink : createFooterLink,
    deleteFooterLink : deleteFooterLink,
    updateFooterLink : updateFooterLink,
    getFooterLinkById : getFooterLinkById,
};

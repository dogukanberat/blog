let dbConfig = require("../Utilities/mysqlConfig");


let getUser= (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from users where 1`,criteria, callback);
}

let getUserDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from users where 1 ${conditions}`, callback);
}

let createUser = (dataToSet, callback) => {
    console.log("insert into users set ? ", dataToSet)
    dbConfig.getDB().query("insert into users set ? ", dataToSet, callback);
}

let deleteUser = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from users where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from users where 1 ${conditions}`, callback);

}

let updateUser = (criteria,dataToSet,callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.uName ? setData += `uName = '${dataToSet.uName}'` : true;
    dataToSet.pW ? setData += `, pW = '${dataToSet.pW}'` : true;
    dataToSet.uType ? setData += `, uType = '${dataToSet.uType}'` : true;
    console.log(`UPDATE users SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE users SET ${setData} where 1 ${conditions}`, callback);
}




let getFollower= (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from followers where 1`,criteria, callback);
}

let getFollowerDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from followers where 1 ${conditions}`, callback);
}

let createFollower = (dataToSet, callback) => {
    console.log("insert into followers set ? ", dataToSet)
    dbConfig.getDB().query("insert into followers set ? ", dataToSet, callback);
}

let deleteFollower = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from followers where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from followers where 1 ${conditions}`, callback);

}

let updateFollower = (criteria,dataToSet,callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.mail ? setData += `mail = '${dataToSet.mail}'` : true;

    console.log(`UPDATE followers SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE followers SET ${setData} where 1 ${conditions}`, callback);
}








let getEvent = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from event where 1`,criteria, callback);
}

let getEventDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from event where 1 ${conditions}`, callback);
}

let createEvent = (dataToSet, callback) => {
    console.log("insert into event set ? ", dataToSet)
    dbConfig.getDB().query("insert into event set ? ", dataToSet, callback);
}

let deleteEvent = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from event where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from event where 1 ${conditions}`, callback);

}

let updateEvent = (criteria,dataToSet,callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.category ? setData += `category = '${dataToSet.category}'` : true;
    dataToSet.title ? setData += `, title = '${dataToSet.title}'` : true;
    dataToSet.iframeLink ? setData += `, iframeLink = '${dataToSet.iframeLink}'` : true;
    dataToSet.image ? setData += `, image = '${dataToSet.image}'` : true;
    dataToSet.descR ? setData += `, descR = '${dataToSet.descR}'` : true;
    dataToSet.descRDJ ? setData += `, descRDJ = '${dataToSet.descRDJ}'` : true;
    console.log(`UPDATE event SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE event SET ${setData} where 1 ${conditions}`, callback);
}

let getPage = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from page where 1`,criteria, callback);
}

let getPageDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from page where 1 ${conditions}`, callback);
}

let createPage = (dataToSet, callback) => {
    console.log("insert into page set ? ", dataToSet)
    dbConfig.getDB().query("insert into page set ? ", dataToSet, callback);
}

let deletePage = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from page where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from page where 1 ${conditions}`, callback);

}

let updatePage = (criteria,dataToSet,callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.category ? setData += `category = '${dataToSet.category}'` : true;
    dataToSet.title ? setData += `, title = '${dataToSet.title}'` : true;
    dataToSet.descR ? setData += `, descR = '${dataToSet.descR}'` : true;
    console.log(`UPDATE page SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE page SET ${setData} where 1 ${conditions}`, callback);
}


let getFooterLink = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from footerlink where 1`,criteria, callback);
}

let getFooterLinkDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from footerlink where 1 ${conditions}`, callback);
}

let createFooterLink = (dataToSet, callback) => {
    console.log("insert into footerlink set ? ", dataToSet)
    dbConfig.getDB().query("insert into footerlink set ? ", dataToSet, callback);
}

let deleteFooterLink = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from footerlink where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from footerlink where 1 ${conditions}`, callback);

}

let updateFooterLink = (criteria,dataToSet,callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.name ? setData += `name = '${dataToSet.name}'` : true;
    dataToSet.url ? setData += `, url = '${dataToSet.url}'` : true;
    console.log(`UPDATE footerlink SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE footerlink SET ${setData} where 1 ${conditions}`, callback);
}





let createUploadLink = (dataToSet, callback) => {
    console.log("insert into uploadLink set ? ", dataToSet)
    dbConfig.getDB().query("insert into uploadLink set ? ", dataToSet, callback);
}
let getUploadLink = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from uploadLink where 1`,criteria, callback);
}
let getUploadLinkDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from uploadLink where 1 ${conditions}`, callback);
}
let deleteUploadLink = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from uploadLink where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from uploadLink where 1 ${conditions}`, callback);

}
let updateUploadLink = (criteria,dataToSet,callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.url ? setData += `link = '${dataToSet.link}'` : true;
    console.log(`UPDATE uploadLink SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE uploadLink SET ${setData} where 1 ${conditions}`, callback);
}







let createSlider = (dataToSet, callback) => {
    console.log("insert into slider set ? ", dataToSet)
    dbConfig.getDB().query("insert into slider set ? ", dataToSet, callback);
}
let getSlider = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from slider where 1`,criteria, callback);
}
let getSliderDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from slider where 1 ${conditions}`, callback);
}
let deleteSlider = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from slider where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from slider where 1 ${conditions}`, callback);

}
let updateSlider = (criteria,dataToSet,callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.url ? setData += `url = '${dataToSet.url}'` : true;
    dataToSet.href ? setData += `, href = '${dataToSet.href}'` : true;
    console.log(`UPDATE slider SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE slider SET ${setData} where 1 ${conditions}`, callback);
}









let createEventCategory = (dataToSet, callback) => {
    console.log("insert into page set ? ", dataToSet)
    dbConfig.getDB().query("insert into category set ? ", dataToSet, callback);
}
let getEventCategory = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
    dbConfig.getDB().query(`select * from category where 1`,criteria, callback);
}
let getEventCategoryDetail = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dbConfig.getDB().query(`select * from category where 1 ${conditions}`, callback);
}
let deleteEventCategory = (criteria, callback) => {
    let conditions = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    console.log(`delete from category where 1 ${conditions}`);
    dbConfig.getDB().query(`delete from category where 1 ${conditions}`, callback);

}
let updateEventCategory = (criteria,dataToSet,callback) => {
    let conditions = "";
    let setData = "";
    criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
    dataToSet.category ? setData += `category = '${dataToSet.category}'` : true;
    console.log(`UPDATE category SET ${setData} where 1 ${conditions}`);
    dbConfig.getDB().query(`UPDATE category SET ${setData} where 1 ${conditions}`, callback);
}

module.exports = {
    getFollower : getFollower,
    createFollower : createFollower,
    deleteFollower : deleteFollower,
    updateFollower : updateFollower,
    getFollowerDetail : getFollowerDetail,

    getUser : getUser,
    createUser : createUser,
    deleteUser : deleteUser,
    updateUser : updateUser,
    getUserDetail : getUserDetail,


    getEvent : getEvent,
    createEvent : createEvent,
    deleteEvent : deleteEvent,
    updateEvent : updateEvent,
    getEventDetail : getEventDetail,


    getSlider : getSlider,
    createSlider : createSlider,
    deleteSlider : deleteSlider,
    updateSlider : updateSlider,
    getSliderDetail : getSliderDetail,


    getPage : getPage,
    createPage : createPage,
    deletePage : deletePage,
    updatePage : updatePage,
    getPageDetail : getPageDetail,

    getFooterLink : getFooterLink,
    createFooterLink : createFooterLink,
    deleteFooterLink : deleteFooterLink,
    updateFooterLink : updateFooterLink,
    getFooterLinkDetail : getFooterLinkDetail,

    createUploadLink : createUploadLink,
    deleteUploadLink : deleteUploadLink,
    updateUploadLink : updateUploadLink,
    getUploadLinkDetail : getUploadLinkDetail,
    getUploadLink : getUploadLink,

    createEventCategory : createEventCategory,
    deleteEventCategory : deleteEventCategory,
    updateEventCategory : updateEventCategory,
    getEventCategoryDetail : getEventCategoryDetail,
    getEventCategory : getEventCategory,
}

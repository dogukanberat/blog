let async = require('async'),
    parseString = require('xml2js').parseString;

let util = require('../Utilities/util'),
    articleDAO = require('../DAO/articleDAO');
//config = require("../Utilities/config").config;


/**API to create the atricle */
let createArticle = (data, callback) => {
    async.auto({
        article: (cb) => {
            var dataToSet = {
                "category":data.category?data.category:'',
                "title":data.title,
            }
            console.log(dataToSet);
            articleDAO.createArticle(dataToSet, (err, dbData) => {
                if (err) {
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }

                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
            });
        }
//]
    }, (err, response) => {
        callback(response.article);
    });
}

/**API to update the article */
let updateArticle = (data,callback) => {
    async.auto({
        articleUpdate :(cb) =>{
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
            }
            console.log(criteria,'test',dataToSet);
            articleDAO.updateArticle(criteria, dataToSet, (err, dbData)=>{
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
        callback(response.articleUpdate);
    });
}

/**API to delete the subject */
let deleteArticle = (data,callback) => {
    console.log(data,'data to set')
    async.auto({
        removeArticle :(cb) =>{
            if (!data.id) {
                cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
                return;
            }
            var criteria = {
                id : data.id,
            }
            articleDAO.deleteArticle(criteria,(err,dbData) => {
                if (err) {
                    console.log(err);
                    cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
                    return;
                }
                cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
            });
        }
    }, (err,response) => {
        callback(response.removeArticle);
    });
}

/***API to get the article list */
let getArticle = (data, callback) => {
    async.auto({
        article: (cb) => {
            articleDAO.getArticle({},(err, data) => {
                if (err) {
                    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
                    return;
                }
                cb(null, data);
                return;
            });
        }
    }, (err, response) => {
        callback(response.article);
    })
}

/***API to get the article detail by id */
let getArticleById = (data, callback) => {
    async.auto({
        article: (cb) => {
            let criteria = {
                "id":data.id
            }
            articleDAO.getArticleDetail(criteria,(err, data) => {
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
        callback(response.article);
    })
}

module.exports = {
    createArticle : createArticle,
    updateArticle : updateArticle,
    deleteArticle : deleteArticle,
    getArticle : getArticle,
    getArticleById : getArticleById
};

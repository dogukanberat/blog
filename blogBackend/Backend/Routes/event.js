let express = require('express'),
    router = express.Router(),
    util = require('../Utilities/util'),
    eventService = require('../Services/event');





/**Api to create event */
router.post('/create-follower', (req, res) => {
    eventService.createFollower(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update event */
router.put('/update-follower', (req, res) => {
    eventService.updateFollower(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the event */
router.delete('/delete-follower', (req, res) => {
    eventService.deleteFollower(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of event */
router.get('/get-follower', (req, res) => {
    eventService.getFollower(req.query, (data) => {
        res.send(data);
    });
});

// /**API to get the event by id... */
router.get('/get-follower-by-id', (req, res) => {
    eventService.getFollowerById(req.query, (data) => {
        res.send(data);
    });
});











/**Api to create event */
router.post('/create-user', (req, res) => {
    eventService.createUser(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update event */
router.put('/update-user', (req, res) => {
    eventService.updateUser(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the event */
router.delete('/delete-user', (req, res) => {
    eventService.deleteUser(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of event */
router.get('/get-user', (req, res) => {
    eventService.getUser(req.query, (data) => {
        res.send(data);
    });
});

// /**API to get the event by id... */
router.get('/get-user-by-id', (req, res) => {
    eventService.getUserById(req.query, (data) => {
        res.send(data);
    });
});












/**Api to create event */
router.post('/create-category', (req, res) => {
    eventService.createEventCategory(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update event */
router.put('/update-category', (req, res) => {
    eventService.updateEventCategory(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the event */
router.delete('/delete-category', (req, res) => {
    eventService.deleteEventCategory(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of event */
router.get('/get-category', (req, res) => {
    eventService.getEventCategory(req.query, (data) => {
        res.send(data);
    });
});

// /**API to get the event by id... */
router.get('/get-category-by-id', (req, res) => {
    eventService.getEventCategoryById(req.query, (data) => {
        res.send(data);
    });
});









/**Api to create event */
router.post('/create-footer', (req, res) => {
    eventService.createFooterLink(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update event */
router.put('/update-footer', (req, res) => {
    eventService.updateFooterLink(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the event */
router.delete('/delete-footer', (req, res) => {
    eventService.deleteFooterLink(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of event */
router.get('/get-footer', (req, res) => {
    eventService.getFooterLink(req.query, (data) => {
        res.send(data);
    });
});
// /**API to get the event by id... */
router.get('/get-footer-by-id', (req, res) => {
    eventService.getFooterLinkById(req.query, (data) => {
        res.send(data);
    });
});







/**Api to create event */
router.post('/create-page', (req, res) => {
    eventService.createPage(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update event */
router.put('/update-page', (req, res) => {
    eventService.updatePage(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the event */
router.delete('/delete-page', (req, res) => {
    eventService.deletePage(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of event */
router.get('/get-page', (req, res) => {
    eventService.getPage(req.query, (data) => {
        res.send(data);
    });
});

// /**API to get the event by id... */
router.get('/get-page-by-id', (req, res) => {
    eventService.getPageById(req.query, (data) => {
        res.send(data);
    });
});








/**Api to create event */
router.post('/create-uploadLink', (req, res) => {
    eventService.createUploadLink(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update event */
router.put('/update-uploadLink', (req, res) => {
    eventService.updateUploadLink(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the event */
router.delete('/delete-uploadLink', (req, res) => {
    eventService.deleteUploadLink(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of event */
router.get('/get-uploadLink', (req, res) => {
    eventService.getUploadLink(req.query, (data) => {
        res.send(data);
    });
});

// /**API to get the event by id... */
router.get('/get-uploadLink-by-id', (req, res) => {
    eventService.getUploadLinkById(req.query, (data) => {
        res.send(data);
    });
});





/**Api to create event */
router.post('/create-slider', (req, res) => {
    eventService.createSlider(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update event */
router.put('/update-slider', (req, res) => {
    eventService.updateSlider(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the event */
router.delete('/delete-slider', (req, res) => {
    eventService.deleteSlider(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of event */
router.get('/get-slider', (req, res) => {
    eventService.getSlider(req.query, (data) => {
        res.send(data);
    });
});

// /**API to get the event by id... */
router.get('/get-slider-by-id', (req, res) => {
    eventService.getSliderById(req.query, (data) => {
        res.send(data);
    });
});



/**Api to create event */
router.post('/create-event', (req, res) => {
    eventService.createEvent(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update event */
router.put('/update-event', (req, res) => {
    eventService.updateEvent(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the event */
router.delete('/delete-event', (req, res) => {
    eventService.deleteEvent(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of event */
router.get('/get-event', (req, res) => {
    eventService.getEvent(req.query, (data) => {
        res.send(data);
    });
});

// /**API to get the event by id... */
router.get('/get-event-by-id', (req, res) => {
    eventService.getEventById(req.query, (data) => {
        res.send(data);
    });
});


module.exports = router;

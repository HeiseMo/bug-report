const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Report Modal
const Report       = require('../Model/report');
const Message      = require('../Model/Messages')
const User      = require('../Model/userModel')

//Add Report Stuff
router.post('/create-report', (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const priority = req.body.priority;
    const reportCreator = req.body.reportCreator;
    const creationDate = req.body.creationDate;
    const owner = req.body.owner;
    const object = ({
        title: title,
        description: description,
        status: status,
        priority: priority,
        reportCreator: reportCreator,
        creationDate: creationDate,
        owner: owner
    });
    Report.create(object, function(err, result) {
        if (err) {
          res.send(err);
        } else {
            res.send(result);
        }
    });
  });

  router.get("/allreports", (req, res) => {
    Report.aggregate([
      { "$lookup": {
      "from": "users",
      "localField": "reportCreator",
      "foreignField": "_id",
      "as": "userinfo"
      } }
      ])
    /*Report.find()*/
    .then(reports => {
        return res.json(reports);
      })
      .catch((err) => {
        return res.json(err);
      });
  });

  router.get("/myreports", (req, res) => {
    myData = req.query.data
    console.log(myData)
    //myDataObj = ObjectId(myData); // wrap in ObjectID
    Report.aggregate([
      { "$match" : { "owner": myData } },
      { "$lookup": {
      "from": "users",
      "localField": "reportCreator",
      "foreignField": "_id",
      "as": "userinfo"
      } }
      ])
    /*Report.find()*/
    .then(reports => {
        res.json(reports);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/mycreatedreports", (req, res) => {
    myData = req.query.data
    console.log(myData)
   myDataObj = ObjectId(myData); // wrap in ObjectID
    Report.aggregate([
      { "$match" : { "reportCreator": myDataObj } },
      { "$lookup": {
      "from": "users",
      "localField": "reportCreator",
      "foreignField": "_id",
      "as": "userinfo"
      } }
      ])
    /*Report.find()*/
    .then(reports => {
        res.json(reports);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get("/report", (req, res) => {
    Report.findOne().sort({ _id: -1 }).limit(1)
    .then(reports => {
      res.json(reports);
    })
    .catch((err) => {
      res.json(err);
    });
  });

  

  router.delete("/deleteReport", (req, res) => {
    deleteReportId = req.query.id
    console.log(deleteReportId)
    Report.findByIdAndDelete(deleteReportId)
    .then(reports => {
      res.json(reports);
    })
    .catch((err) => {
      res.json(err);
    });
  });

  router.post("/updateReport", (req, res) => {
    const id = req.body.id;
    const status = req.body.status;
    Report.findByIdAndUpdate(id, {status: status}, {new: true})
    .then(reports => {
      res.json(reports);
    })
    .catch((err) => {
      res.json(err);
    });
  });
  router.post("/updateReportPriority", (req, res) => {
    const id = req.body.id;
    const priority = req.body.priority;
    Report.findByIdAndUpdate(id, {priority: priority}, {new: true})
    .then(reports => {
      res.json(reports);
    })
    .catch((err) => {
      res.json(err);
    });
  });
  router.post("/updateReportOwner", (req, res) => {
    const id = req.body.id;
    const owner = req.body.owner;
    Report.findByIdAndUpdate(id, {owner: owner}, {new: true})
    .then(reports => {
      res.json(reports);
    })
    .catch((err) => {
      res.json(err);
    });
  });
// Message Stuff
router.post('/create-message', (req, res, next) => {
  const message = req.body.message;
  const messageCreator = req.body.messageCreator;
  const report = req.body.report;
  const object = ({
      message: message,
      messageCreator: messageCreator,
      reportId: report
  });
  Message.create(object, function(err, result) {
      if (err) {
        res.send(err);
      } else {
          res.send(result);
      }
  });
});

router.delete("/delete-messages", (req, res) => {
  deleteReportId = req.query.id
  console.log(deleteReportId)
  Message.findByIdAndDelete(deleteReportId)
  .then(reports => {
    res.json(reports);
  })
  .catch((err) => {
    res.json(err);
  });
});


router.get("/collect-messages", (req, res) => {
  const reportMessages = req.query.reportMsgId;
  //Message.find({ reportId: reportMessages}).sort({ _id: -1 })
  Message.aggregate([
    { "$match": { "reportId": reportMessages } },
    { "$lookup": {
    "from": "users",
    "localField": "messageCreator",
    "foreignField": "_id",
    "as": "userinfo"
    } }
    ]).sort({_id: -1})
  .then(messages => {
    res.json(messages);
  })
  .catch((err) => {
    console.log(err)
    res.json(err);
  })
});

module.exports = router;
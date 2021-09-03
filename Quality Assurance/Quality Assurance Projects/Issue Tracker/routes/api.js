'use strict';

const issues = {apitest: [{"_id":"1673097268792","issue_title":"abc","issue_text":"abc","created_by":"abc","assigned_to":"abc","status_text":"abc","open":true,"created_on":"2023-01-07T13:14:28.792Z","updated_on":"2023-01-07T13:14:28.792Z"},{"_id":"1673097280371","issue_title":"qwerty","issue_text":"qwerty","created_by":"qwerty","assigned_to":"qwerty","status_text":"qwerty","open":true,"created_on":"2023-01-07T13:14:40.371Z","updated_on":"2023-01-07T13:14:40.371Z"}]};

// const issues = {};

module.exports = function (app) {
  app.route('/api/issues/:project')
  
  .get(function (req, res){
    let { project } = req.params;
    const { query } = req;

    // check if project exists
    if (issues[project] === undefined) return res.json([]);

    // check if queries exist
    if (Object.keys(query).length === undefined) return res.json(issues[project]);

    const filteredIssues = [];

    // filer queries
    issues[project].forEach((e, i) => {
      let ifMatch = true;

      Object.keys(query).forEach((element, index, value) => {
        if (e[element] !== query[element]) {
          ifMatch = false;
        }
      })

      if (ifMatch) return filteredIssues.push(e);
    });

    return res.json(filteredIssues);
  })
    
  .post(function (req, res){
    let { project } = req.params;
    let { body } = req;
    
    if (body.issue_title === undefined || body.issue_text === undefined || body.created_by === undefined) {
      return res.json({ error: 'required field(s) missing' })
    }

    const id = Date.now().toString();
    const date = new Date;
    const time = date.toISOString();

    body = {
      _id: id, 
      ...body,
      assigned_to: body.assigned_to === undefined ? '' : body.assigned_to,
      status_text: body.status_text === undefined ? '' : body.status_text,
      open: true,
      created_on: time, 
      updated_on: time
    }

    if (issues[project] === undefined) {
      issues[project] = [body]
    } else {
      issues[project].push(body);
    }

    return res.json(body);
  })
  
  .put(function (req, res){
    let { project } = req.params;
    const { body } = req;

    // check if _id is missing
    if (body._id === undefined) return res.json({ error: 'missing _id' });

    if (Object.keys(body).length === 1) return res.json({ error: 'no update field(s) sent', '_id': body._id });

    if (
      body.issue_title === '' && 
      body.issue_text === '' && 
      body.created_by === '' && 
      body.assigned_to === '' && 
      body.status_text === '' && 
      body.open === undefined
    ) return res.json({ error: 'no update field(s) sent', '_id': body._id });

    // check if project exists
    if (issues[project] === undefined) return res.json({ error: 'could not update', _id: body._id });

    // get index of issue
    const issueIndex = issues[project].findIndex((e) => e._id === body._id);

    // check if issue with id exists
    if (issueIndex === -1) return res.json({ error: 'could not update', _id: body._id });

    issues[project][issueIndex] = {
      ...issues[project][issueIndex],
      issue_title: body.issue_title === undefined ? issues[project][issueIndex].issue_title : body.issue_title,
      issue_text: body.issue_text === undefined ? issues[project][issueIndex].issue_text : body.issue_text,
      created_by: body.created_by === undefined ? issues[project][issueIndex].created_by : body.created_by,
      assigned_to: body.assigned_to === undefined ? issues[project][issueIndex].assigned_to : body.assigned_to,
      status_text: body.status_text === undefined ? issues[project][issueIndex].status_text : body.status_text,
      open: body.open === undefined ? issues[project][issueIndex].open : false,
      // updated_on: date.toISOString()
    };
      
    const date = new Date;
    issues[project][issueIndex].updated_on = date.toISOString();

    return res.json({ result: 'successfully updated', '_id': body._id });
  })
  
  .delete(function (req, res){
    let { project } = req.params;
    const { body } = req;

    // check if _id is missing
    if (body._id === undefined) return res.json({ error: 'missing _id' });

    // check if project exists
    if (issues[project] === undefined) return res.json({ error: 'could not delete', _id: body._id });

    // get index of issue
    const issueIndex = issues[project].findIndex((e) => e._id === body._id);

    // check if issue with id exists
    if (issueIndex === -1) return res.json({ error: 'could not delete', _id: body._id });

    issues[project].splice(issueIndex, 1)

    return res.json({ result: 'successfully deleted', _id: body._id });
  });
};

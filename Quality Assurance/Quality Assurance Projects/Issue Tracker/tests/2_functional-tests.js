const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    // 1. 
    test('Create an issue with every field: POST request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .post('/api/issues/apitest')
            .send({
                issue_title: 'test',
                issue_text: 'test',
                created_by: 'test',
                assigned_to: 'test',
                status_text: 'test'
            })
            .end((req, res) => {
                const { body } = res;
                
                assert.equal(body.issue_title, 'test');
                assert.equal(body.issue_text, 'test');
                assert.equal(body.created_by, 'test');
                assert.equal(body.assigned_to, 'test');
                assert.equal(body.status_text, 'test');
            });
        done();
    });

    // 2. 
    test('Create an issue with only required fields: POST request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .post('/api/issues/apitest')
            .send({
                issue_title: 'test',
                issue_text: 'test',
                created_by: 'test'
            })
            .end((req, res) => {
                const { body } = res;
                
                assert.equal(body.issue_title, 'test');
                assert.equal(body.issue_text, 'test');
                assert.equal(body.created_by, 'test');
                assert.equal(body.assigned_to, '');
                assert.equal(body.status_text, '');
            });
        done();
    });

    // 3. 
    test('Create an issue with missing required fields: POST request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .post('/api/issues/apitest')
            .send({})
            .end((req, res) => {
                const { body } = res;
                
                assert.equal(body.error, 'required field(s) missing');
            });
        done();
    });

    // 4. 
    test('View issues on a project: GET request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .get('/api/issues/apitest')
            .end((req, res) => {
                const { body } = res;
                
                assert.isArray(body);
            });
        done();
    });

    // 5. 
    test('View issues on a project with one filter: GET request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .get('/api/issues/apitest?issue_title=test')
            .end((req, res) => {
                const { body } = res;
                
                body.forEach((e, i) => {
                    assert.equal(e.issue_title, 'test');
                });
            });
        done();
    });

    // 6. 
    test('View issues on a project with multiple filters: GET request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .get('/api/issues/apitest?issue_title=test')
            .end((req, res) => {
                const { body } = res;
                
                body.forEach((e, i) => {
                    assert.equal(e.issue_title, 'test');
                    assert.equal(e.issue_text, 'test');
                });
            });
        done();
    });

    // 7. 
    test('Update one field on an issue: PUT request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .put('/api/issues/apitest')
            .send({
                _id: "1673097268792",
                issue_text: "New Issue Text"
            })
            .end((req, res) =>  {
                const { body } = res;
                
                assert.equal(body.result, 'successfully updated');
                assert.equal(body._id, '1673097268792');
            });
        done();
    });

    // 8. 
    test('Update multiple fields on an issue: PUT request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .put('/api/issues/apitest')
            .send({
                _id: "1673097268792",
                issue_text: "New Issue Text",
                issue_title: "New Issue Title"
            })
            .end((req, res) =>  {
                const { body } = res;
                
                assert.equal(body.result, 'successfully updated');
                assert.equal(body._id, '1673097268792');
            });
        done();
    });

    // 9. 
    test('Update an issue with missing _id: PUT request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .put('/api/issues/apitest')
            .end((req, res) =>  {
                const { body } = res;
                
                assert.equal(body.error, 'missing _id');
            });
        done();
    });

    // 10. 
    test('Update an issue with no fields to update: PUT request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .put('/api/issues/apitest')
            .send({
                _id: "1673097268792"
            })
            .end((req, res) =>  {
                const { body } = res;
                
                assert.equal(body.error, 'no update field(s) sent');
            });
        done();
    });

    // 11. 
    test('Update an issue with an invalid _id: PUT request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .put('/api/issues/apitest')
            .send({
                _id: "5f665eb46e296f6b9b6a504d",
                issue_text: "New Issue Text"
            })
            .end((req, res) =>  {
                const { body } = res;
                
                assert.equal(body.error, 'could not update');
            });
        done();
    });

    // 12. 
    test('Delete an issue: DELETE request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .delete('/api/issues/apitest')
            .send({
                _id: "1673097268792"
            })
            .end((req, res) =>  {
                const { body } = res;
                
                assert.equal(body.result, 'successfully deleted');
            });
        done();
    });

    // 13. 
    test('Delete an issue with an invalid _id: DELETE request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .delete('/api/issues/apitest')
            .send({
                _id: "1673097268792"
            })
            .end((req, res) =>  {
                const { body } = res;
                
                assert.equal(body.error, 'could not delete');
            });
        done();
    });

    // 14. 
    test('Delete an issue with an invalid _id: DELETE request to /api/issues/{project}', (done) => {
        chai
            .request(server)
            .delete('/api/issues/apitest')
            .end((req, res) =>  {
                const { body } = res;
                
                assert.equal(body.error, 'missing _id');
            });
        done();
    });
});

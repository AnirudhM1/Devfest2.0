const express = require('express');
const router = express.Router();
const projectController = require('../controllers/Project');
const { authCheck } = require('../config/oauth')

router.get('/', authCheck, projectController.getAllProjects);
router.post('/', authCheck, projectController.createProject);

router.route('/:projectId')
    .get(authCheck, projectController.getProject)
    .post(authCheck, projectController.updateProject)

router.route('/:projectId/task')
    .get(authCheck, projectController.getAllTasks)
    .post(authCheck, projectController.createTask)

module.exports = router;
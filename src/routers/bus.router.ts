import express from 'express';
import * as busManage from '../manager/bus.manage';

const router = express.Router();

router.get('/readBuses', busManage.getBuses);
router.get('/readBus/:busColor', busManage.getBus);
router.get('/getTime/', busManage.getTime);
router.delete('/delete/:lineNumber', busManage.deleteBus);
router.patch('/updateBus/:lineNumber', busManage.update);
router.post('/createBus/', busManage.addBus);

export default router;

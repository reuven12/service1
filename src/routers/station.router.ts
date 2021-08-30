import express from 'express';
import * as stationManage from '../manager/station.manage';

const router = express.Router();

router.get('/readStations', stationManage.getStations);
router.get('/readStation/:stationNumber', stationManage.getStation);
router.delete('/delete/:stationNumber', stationManage.deleteStation);
router.patch('/updatestation/:stationNumber', stationManage.update);
router.post('/creatStation/', stationManage.addStation);

export default router;

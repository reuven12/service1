import { Request, Response } from 'express';
import Http from 'axios';

require('dotenv').config();

const moovit = process.env.SERVICE2;
const port = process.env.PORTMOOVIT;
const project: string = `http://${moovit}:${port}/api/stations`;

export const getStations = async (_req: Request, res: Response) => {
  try {
    const getallbuses = await Http.get(`${project}/readStations`);
    res.send(getallbuses.data);
  } catch (err) {
    res.send(err);
  }
};

export const getStation = async (req: Request, res: Response) => {
  try {
    const getbus = await Http.get(
      `${project}/readStation/${req.params.stationNumber}`
    );
    res.send(getbus.data);
  } catch (err) {
    res.send(err);
  }
};

export const deleteStation = async (req: Request, res: Response) => {
  try {
    const deletebus = await Http.delete(
      `${project}/delete/${req.params.stationNumber}`
    );
    res.send(deletebus.data);
  } catch (err) {
    res.send(err);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updateBus = await Http.patch(
      `${project}/updatestation/${req.params.stationNumber}`,
      req.body
    );
    res.send(updateBus.data);
  } catch (err) {
    res.send(err);
  }
};

export const addStation = async (req: Request, res: Response) => {
  try {
    const updateBus = await Http.post(`${project}/creatStation/`, req.body);
    res.send(updateBus.data);
  } catch (err) {
    res.send(err);
  }
};

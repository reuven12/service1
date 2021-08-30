import { Request, Response } from 'express';
import Http from 'axios';

const project: string = 'http://localhost:3000/api/stations';

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

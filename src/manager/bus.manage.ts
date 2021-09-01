import { Request, Response } from 'express';
import Http from 'axios';

require('dotenv').config();

const moovit = process.env.SERVICE2;
const port = process.env.PORTMOOVIT;
const project: string = `http://${moovit}:${port}/api/buses`;

export const getBuses = async (_req: Request, res: Response) => {
  try {
    const getallbuses = await Http.get(`${project}/readBuses`);
    res.send(getallbuses.data);
  } catch (err) {
    res.send(err);
  }
};

export const getBus = async (req: Request, res: Response) => {
  try {
    const getbus = await Http.get(`${project}/readBus/${req.params.busColor}`);
    res.send(getbus.data);
  } catch (err) {
    res.send(err);
  }
};

export const getTime = async (req: Request, res: Response) => {
  try {
    const gettime = await Http.get(`${project}/getTime/`, req.body);
    res.send(gettime.data);
  } catch (err) {
    res.send(err);
  }
};

export const deleteBus = async (req: Request, res: Response) => {
  try {
    const deletebus = await Http.delete(
      `${project}/delete/${req.params.lineNumber}`
    );
    res.send(deletebus.data);
  } catch (err) {
    res.send(err);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updateBus = await Http.patch(
      `${project}/updateBus/${req.params.lineNumber}`,
      req.body
    );
    res.send(updateBus.data);
  } catch (err) {
    res.send(err);
  }
};

export const addBus = async (req: Request, res: Response) => {
  try {
    const updateBus = await Http.post(`${project}/createBus/`, req.body);
    res.send(updateBus.data);
  } catch (err) {
    res.send(err);
  }
};

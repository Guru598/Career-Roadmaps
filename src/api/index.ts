import axios from 'axios';
import { Roadmap } from '../types';

const API_URL = 'http://localhost:5000/api';

export const getRoadmaps = async (): Promise<Roadmap[]> => {
  const response = await axios.get(`${API_URL}/roadmaps`);
  return response.data;
};

export const createRoadmap = async (roadmap: Omit<Roadmap, '_id'>): Promise<Roadmap> => {
  const response = await axios.post(`${API_URL}/roadmaps`, roadmap);
  return response.data;
};

export const updateRoadmap = async (id: string, roadmap: Omit<Roadmap, '_id'>): Promise<Roadmap> => {
  const response = await axios.put(`${API_URL}/roadmaps/${id}`, roadmap);
  return response.data;
};

export const deleteRoadmap = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/roadmaps/${id}`);
};
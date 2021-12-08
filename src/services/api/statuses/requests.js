import instance from '../instance';
import statusesEndpoint from './endpoints';

const checkStatuses = () => instance.get(statusesEndpoint);

export default checkStatuses;

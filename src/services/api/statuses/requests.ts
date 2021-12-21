import statusesEndpoint from 'services/api/statuses/endpoints';
import instance from '../instance';

const checkStatuses = () => instance.get(statusesEndpoint);

export default checkStatuses;

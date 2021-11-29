import instance from 'services/api/instance';
import specializationsEndpoint from 'services/api/specializations/endpoints';

export const getSpecializations = () => instance.get(specializationsEndpoint);

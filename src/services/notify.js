import { toast } from 'react-toastify';
import { firstLetterToUpperCase } from 'services/heplers';

const config = {
  position: 'bottom-left',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const initial = (message) => toast.loading(message, config);

const errorToMsg = (error) => firstLetterToUpperCase(error.response.data.replace('message: ', ''));

const update = (id, status, message) => {
  switch (status) {
    case 'pending':
      return toast.update(id, { type: 'info', render: message, isLoading: true });
    case 'success':
      return toast.update(id, { type: 'success', render: message, isLoading: false });
    case 'error':
      return toast.update(id, { type: 'error', render: message, isLoading: false });
    default:
      return id;
  }
};

function printToastErrorMsg(message) {
  return toast.error(message, {
    hideProgressBar: true,
    draggable: false,
    closeButton: false,
  });
}

const closeAll = () => toast.dismiss();

export default {
  initial, update, closeAll, printToastErrorMsg, errorToMsg,
};

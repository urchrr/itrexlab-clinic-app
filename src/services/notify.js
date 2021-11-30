import { toast } from 'react-toastify';

const config = {
  position: 'bottom-left',
  autoClose: 0,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const initial = (message) => toast.loading(message, config);

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

export default { initial, update };

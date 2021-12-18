import {
  ReactChild, ReactFragment, ReactPortal, ReactNode,
} from 'react';
import {
  Id, toast, ToastContentProps, ToastOptions,
} from 'react-toastify';
import { firstLetterToUpperCase } from 'services/heplers';

const config:ToastOptions = {
  position: 'bottom-left',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};
type Message = boolean | ReactChild | ReactFragment | ReactPortal |
((props: ToastContentProps<{}>) => ReactNode) | null | undefined;
const initial = (message: Message) => toast.loading(message, config);

const errorToMsg = (error: { response: { data: string; }; }) => firstLetterToUpperCase(error.response.data.replace('message: ', ''));

const update = (id: Id, status: any, message: any) => {
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

function printToastErrorMsg(message: Message) {
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

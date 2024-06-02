import {
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from 'react-icons/fa';
import { toast, ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './_toast.scss';
import CloseButton from './CloseButton';
import { ToastProp } from './models';
import ToastTemplate from './ToastTemplate';

export const Toast = () => (
  <ToastContainer
    limit={3}
    closeButton={(props) => <CloseButton closeToast={props.closeToast} />}
  />
);

const defaultConfig: ToastContainerProps = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
};

export const toastSuccess = (content: ToastProp) =>
  toast(<ToastTemplate content={content} icon={<FaCheckCircle />} />, {
    ...defaultConfig,
    className: 'react-toast toast-success',
    progressClassName: 'toast-progress toast-progress-success',
  });

export const toastWarning = (content: ToastProp) =>
  toast(<ToastTemplate content={content} icon={<FaExclamationTriangle />} />, {
    ...defaultConfig,
    className: 'react-toast toast-warning',
    progressClassName: 'toast-progress toast-progress-warning',
  });

export const toastDanger = (content: ToastProp) =>
  toast(<ToastTemplate content={content} icon={<FaExclamationCircle />} />, {
    ...defaultConfig,
    className: 'react-toast toast-danger',
    progressClassName: 'toast-progress toast-progress-danger',
  });

export const toastInfo = (content: ToastProp) =>
  toast(<ToastTemplate content={content} icon={<FaInfoCircle />} />, {
    ...defaultConfig,
    className: 'react-toast toast-info',
    progressClassName: 'toast-progress toast-progress-info',
  });

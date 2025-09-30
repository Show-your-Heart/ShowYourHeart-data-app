import { Slide, toast } from 'react-toastify';

export default function notification(
  message,
  type
) {
  return toast[type](message, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    theme: "colored",
    transition: Slide,
    pauseOnHover: true,
    draggable: true,
  });
}

import Swal from 'sweetalert2';

const initSwalError = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'error',
    confirmButtonText: 'Ok',
  });
};

const initSwalSuccess = (title) => {
  Swal.fire({
    title,
    toast: true,
    icon: 'success',
    confirmButtonText: 'Ok',
  });
};

export { initSwalSuccess, initSwalError };

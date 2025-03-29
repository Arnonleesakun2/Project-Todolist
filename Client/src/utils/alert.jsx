import Swal from "sweetalert2";

export const sweetAlert = ( text, icon ) => {
  Swal.fire({
    text: text || "Something Wrong!!!",
    icon: icon || "info",
    timer: 1500
  });
};

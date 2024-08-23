import Swal, { SweetAlertIcon } from "sweetalert2";
export default function alert(title: string, icon: SweetAlertIcon) {
  return Swal.fire({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    icon,
    title,
  });
}

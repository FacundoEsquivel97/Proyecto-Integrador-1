window.onload = () =>{

  document.getElementById('formulario').addEventListener('change',()=>{
      if (document.getElementById('btnradio1').checked){
        document.getElementById('presentacion').classList.replace('d-none','d-block');
        document.getElementById('experiencia').classList.replace('d-block','d-none');
        document.getElementById('formacion').classList.replace('d-block','d-none');
      }
      if (document.getElementById('btnradio2').checked){
        document.getElementById('presentacion').classList.replace('d-block','d-none');
        document.getElementById('experiencia').classList.replace('d-none','d-block');
        document.getElementById('formacion').classList.replace('d-block','d-none');
      }
      if (document.getElementById('btnradio3').checked){
        document.getElementById('presentacion').classList.replace('d-block','d-none');
        document.getElementById('experiencia').classList.replace('d-block','d-none');
        document.getElementById('formacion').classList.replace('d-none','d-block');
      }
    })
}

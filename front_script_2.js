console.log(base_url) ;
const html5QrCode = new Html5Qrcode("reader");
const qrCodeSuccessCallback = (decodedText, decodedResult) => {

  $('#notif').modal('show');
  $("#kode").html(decodedText);
  //document.getElementById('kode').html = decodedText;
    /* handle success */
};
const config = { fps: 5, qrbox: { width: 230, height: 230 } };

// If you want to prefer front camera
//html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);

// If you want to prefer back camera
html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);

// Select front camera or fail with `OverconstrainedError`.
//html5QrCode.start({ facingMode: { exact: "user"} }, config, qrCodeSuccessCallback);

// Select back camera or fail with `OverconstrainedError`.
//html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);

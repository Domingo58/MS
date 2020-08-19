function checkSessionActiva() {
    return true;
}

function callEmpresarial(rutConsulted) {
	$("#rutEmpr").val(rutConsulted);
	$("#consultEmpr").submit();
}

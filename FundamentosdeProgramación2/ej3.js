
function Fruteria(K_kiwi, K_peras, K_uvas) {
    var t_uvas = 0;
    var t_kiwi = 0;
    var t_peras = 0;
    if (K_kiwi >= 1) {
        t_kiwi += (parseInt(K_kiwi) * 5)
    }
    if (K_peras >= 1) {
        t_peras += (parseInt(K_peras) * 2);
    }
    if (K_uvas >= 1) {
        t_uvas += (parseInt(K_uvas) * 4);
    }
    if (K_kiwi === 0.5) {
        t_kiwi += (parseInt(K_kiwi) * 2.5);
    }
    if (K_peras === 0.5) {
        t_peras += (parseInt(K_peras) * 1);
    }
    if (K_uvas === 0.5) {
        t_uvas += (parseInt(K_uvas) * 2);
    }
    var total=t_kiwi + t_peras + t_uvas;


    return "Precio total " +total+" euros";

}
function FakultasItem(id, name) {
    this.id = id;
    this.name = name;
}

function DepartmenItem(fakultas_id, name) {
    this.fakultas_id = fakultas_id;
    this.name = name;
}

let fakultas_options = [
    new FakultasItem(1, "FSAD - Fakultas Sains dan Analitika Data"),
    new FakultasItem(2, "FTK - Fakultas Teknologi Kelautan"),
    new FakultasItem(3, "FT-IRS - Fakultas Teknologi Industri dan Rekayasa Sistem"),
    new FakultasItem(4, "FT-EIC - Fakultas Teknologi Elektro dan Informatika Cerdas"),
    new FakultasItem(5, "FT-SPK - Fakultas Teknik Sipil, Perencanaan, dan Kebumian"),
    new FakultasItem(6, "F-DKBD - Fakultas Desain Kreatif dan Bisnis Digital"),
    new FakultasItem(7, "FV - Fakultas Vokasi"),
    new FakultasItem(8, "Fakultas Kedokteran dan Kesehatan"),
    new FakultasItem(9, "Sekolah Interdisiplin Manajemen dan Teknologi"),
];


let departmen_options = [
    new DepartmenItem(1, "Fisika"),
    new DepartmenItem(1, "Matematika"),
    new DepartmenItem(1, "Statistika"),
    new DepartmenItem(1, "Kimia"),
    new DepartmenItem(1, "Biologi"),
    new DepartmenItem(1, "Aktuaria"),
    new DepartmenItem(2, "Teknik Perkapalan"),
    new DepartmenItem(2, "Teknik Sistem Perkapalan"),
    new DepartmenItem(2, "Teknik Kelautan"),
    new DepartmenItem(2, "Teknik Transportasi Laut"),
    new DepartmenItem(3, "Teknik Mesin"),
    new DepartmenItem(3, "Teknik Kimia"),
    new DepartmenItem(3, "Tekink Fisika"),
    new DepartmenItem(3, "Teknik Sistem dan Industri"),
    new DepartmenItem(3, "Teknik Material dan Metalurgi"),
    new DepartmenItem(3, "Teknik Pangan"),
    new DepartmenItem(3, "Rekayasa Keselamatan Proses"),
    new DepartmenItem(4, "Teknik Elektro"),
    new DepartmenItem(4, "Teknik Biomedik"),
    new DepartmenItem(4, "Teknik Komputer"),
    new DepartmenItem(4, "Teknik Informatika"),
    new DepartmenItem(4, "Sistem Informasi"),
    new DepartmenItem(4, "Teknologi Informasi"),
    new DepartmenItem(5, "Teknik Sipil"),
    new DepartmenItem(5, "Arsitektur"),
    new DepartmenItem(5, "Teknik Lingkungan"),
    new DepartmenItem(5, "Perencanaan Wilayah dan Kota"),
    new DepartmenItem(5, "Teknik Geomatika"),
    new DepartmenItem(5, "Teknik Geofisika"),
    new DepartmenItem(6, "Desain Produk Industri"),
    new DepartmenItem(6, "Desain Interior"),
    new DepartmenItem(6, "Desain Komunikasi Visual"),
    new DepartmenItem(6, "Manajemen Bisnis"),
    new DepartmenItem(6, "Studio Pembangunan"),
    new DepartmenItem(7, "Teknik Infrastruktur Sipil"),
    new DepartmenItem(7, "Teknik Mesin Industri"),
    new DepartmenItem(7, "Teknik Kimia Industri"),
    new DepartmenItem(7, "Teknik Instrumentasi"),
    new DepartmenItem(7, "Statistika Bisnis"),
    new DepartmenItem(8, "Teknologi Kedokteran"),
    new DepartmenItem(8, "Kedokteran"),
    new DepartmenItem(8, "Pendidikan Profesi Dokter"),
    new DepartmenItem(9, "Manajemen Teknologi")
];

let fakultas_select = document.getElementById("fakultas-select");
let departmen_select = document.getElementById("departmen-select");

for(let i = 0; i < fakultas_options.length; i++) {
    let new_option = document.createElement("option");
    new_option.value = fakultas_options[i].id;
    new_option.text = fakultas_options[i].name;
    fakultas_select.appendChild(new_option);
}

function fakultas_select_update() {
    let current_fakultas_id = parseInt(fakultas_select.value);
    
    const to_remove = departmen_select.querySelectorAll(".temp-option");
    for(const temp_option of to_remove) {
        temp_option.remove();
    }
    if(current_fakultas_id == null) {
        return;
    }
    let new_option_id_counter = 1;
    for(let i = 0; i < departmen_options.length; i++) {
        if(departmen_options[i].fakultas_id == current_fakultas_id) {
            let new_option = document.createElement("option");
            new_option.value = new_option_id_counter;
            new_option_id_counter++;
            new_option.text = departmen_options[i].name;
            new_option.className = "temp-option";
            departmen_select.appendChild(new_option);
        }
    }
}

let submit_button =  document.getElementById("departmen-select");

function on_submit() {

}

fakultas_select.onchange = fakultas_select_update;
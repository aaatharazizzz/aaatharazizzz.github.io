let jurusan_options = [
    "Fisika",
    "Matematika",
    "Statistika",
    "Kimia",
    "Biologi",
    "Aktuaria",
    "Teknik Perkapalan",
    "Teknik Sistem Perkapalan",
    "Teknik Kelautan",
    "Teknik Transportasi Laut",
    "Teknik Mesin",
    "Teknik Kimia",
    "Tekink Fisika",
    "Teknik Sistem dan Industri",
    "Teknik Material dan Metalurgi",
    "Teknik Pangan",
    "Rekayasa Keselamatan Proses",
    "Teknik Elektro",
    "Teknik Biomedik",
    "Teknik Komputer",
    "Teknik Informatika",
    "Sistem Informasi",
    "Teknologi Informasi",
    "Teknik Sipil",
    "Arsitektur",
    "Teknik Lingkungan",
    "Perencanaan Wilayah dan Kota",
    "Teknik Geomatika",
    "Teknik Geofisika",
    "Desain Produk Industri",
    "Desain Interior",
    "Desain Komunikasi Visual",
    "Manajemen Bisnis",
    "Studio Pembangunan",
    "Teknik Infrastruktur Sipil",
    "Teknik Mesin Industri",
    "Teknik Kimia Industri",
    "Teknik Instrumentasi",
    "Statistika Bisnis",
    "Manajemen Teknologi",
    "Teknologi Kedokteran",
    "Kedokteran",
    "Pendidikan Profesi Dokter"
];

function init_combobox(element, options) {
    let options_div = element.getElementsByClassName("combobox-options")[0];
    if(options_div == null) {
        window.alert("Combobox cannot be created!");
        return;
    }
    for(let i = 0; i < options.length; i++) {
        let new_option = document.createElement("option");
        new_option.className = "combobox-option";
        
    }
}

function update_combobox() {

}
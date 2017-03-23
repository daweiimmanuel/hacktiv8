var Teman = function(nama, kabar, pekerjaan) {
  this.nama = nama;
  this.kabar = kabar;
  this.pekerjaan = pekerjaan;
  
  this.sapa = function(str){
    console.log('Halo '+ str +', apa kabar?');
  };
  
  this.balasSapa = function(str){
    console.log('Halo '+ str +', kabarku '+this.kabar);
  };
  
  this.tanyaPekerjaan = function (){
    console.log('Apa pekerjaanmu saat ini?');
  };
  
  this.balasPekerjaan = function(){
    console.log('Pekerjaanku saat ini adalah '+this.pekerjaan);
  };
  
  this.berpisah = function(obj){
    console.log('Senang bertemu denganmu '+obj.nama+', semoga kamu sukses sebagai '+obj.pekerjaan);
  };
};

var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');

budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);

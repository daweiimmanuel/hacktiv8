var Object1 = {
    hari: 'Senin',
    kehadiran: 'Masuk',
    alasan: ''
};
var Object2 = {
    hari: 'Rabu',
    kehadiran: 'Masuk',
    alasan: ''
};
var Object3 = {
    hari: 'Jumat',
    kehadiran: 'Absen',
    alasan: 'Dinas Luar'
};

var arr = [Object1, Object2, Object3];

var counterHari = 0;
var counterMasuk = 0;
var counterAbsen = 0;

for(var i=0 ; i<arr.length ; i++){
  console.log('Hari: '+ arr[i].hari.toLowerCase());
  console.log('Kehadiran: ' + arr[i].kehadiran.toLowerCase());
  if(arr[i].alasan === ''){
    
  }
  else{
    console.log('Alasan: ' + arr[i].alasan.toLowerCase());
  }
  
  counterHari += 1;
  if(arr[i].kehadiran.toLowerCase() === 'Masuk'.toLowerCase()){
    counterMasuk += 1;
  }
  else if(arr[i].kehadiran.toLowerCase() === 'Absen'.toLowerCase()){
    counterAbsen += 1;
  }
}

console.log('Total hari kerja minggu ini: '+counterHari+' hari');
console.log('Total Masuk: '+counterMasuk+' hari');
console.log('Total Absen: '+counterAbsen+' hari');

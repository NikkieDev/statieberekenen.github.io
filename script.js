const btn=document.getElementById('calculateBtn').addEventListener('click',()=>{
    const kFlesjes=15,blikjes=15;
    const gFlesjes=25;const kratten=500;
    const kFlesjesAmount=document.getElementById('kleine flesjes').value;
    const gFlesjesAmount=document.getElementById('grote fles').value;
    const blikjesAmount=document.getElementById('blikjes').value;
    const krattenAmount=document.getElementById('kratten').value;
    let total=0;

    total = (gFlesjesAmount * gFlesjes);
    total += (kFlesjesAmount * kFlesjes);
    total += (blikjesAmount * blikjes);
    total += (krattenAmount * kratten);

    (total/100 == 0) ? alert("Geen items ingevuld!") : alert(`Totaal statiegeld: €${total / 100 }`);
});
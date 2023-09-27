document.getElementById('calculateBtn').addEventListener('click', () => {
    const total =
      (document.getElementById('grote fles').value * 25) +
      (document.getElementById('kleine flesjes').value * 15) +
      (document.getElementById('blikjes').value * 15) +
      (document.getElementById('kratten').value * 500);
  
    (total === 0)
      ? alert("Geen items ingevuld!")
      : alert(`Totaal statiegeld: €${total / 100}`);
});
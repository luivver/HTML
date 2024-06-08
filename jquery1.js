function sumGenap() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    let sum = 0;
  
    for (let i = min; i <= max; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
  
    document.getElementById('result').textContent = `min = ${min}, max = ${max}, result =${sum}`;
  }
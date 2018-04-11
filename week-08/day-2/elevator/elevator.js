window.onload = () => {
  const rowColumn = document.querySelector('.elevator');
  let currentIndex = 0;
  let currentValue = 0;

  let setUp = () => {
    for (let i = 0; i < 10; i++) {
      rowColumn.appendChild(document.createElement('div'));
    }
  }
  setUp();

  const rows = document.querySelectorAll('.elevator div');
  let here = document.querySelector('.here');
  const addPpl = document.querySelector('.add');
  const rmvPpl = document.querySelector('.remove');
  const up = document.querySelector('.up');
  const down = document.querySelector('.down');
  
  addPpl.onclick = () => {
    if (currentValue !== 10) {
      rows[currentIndex].textContent = currentValue + 1;
      currentValue++;
    }
  };

  rmvPpl.onclick = () => {
    if (currentValue !== 0) {
      rows[currentIndex].textContent = currentValue - 1;
      currentValue--;
    }
  };

  up.onclick = () => {
    if (currentIndex > 0) {
      rows.forEach((row, index) => {
        if (index === currentIndex) {
          row.classList.remove('here');
          row.textContent = '';
        }
        if (index === currentIndex - 1) {
          row.classList.add('here');
          row.textContent = currentValue;
        }
      });
      currentIndex--;
    }
  }
  down.onclick = () => {
    if (currentIndex < rows.length - 1) {
      rows.forEach((row, index) => {
        if (index === currentIndex) {
          row.classList.remove('here');
          row.textContent = '';
        }
        if (index === currentIndex + 1) {
          row.classList.add('here');
          row.textContent = currentValue;
        }
      });
      currentIndex++;
    }
  }
}

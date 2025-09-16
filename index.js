
(function(){
  
 
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      let system = '';
      const parent = this.closest('div');
      if (parent) {
        const span = parent.querySelector('span');
        if (span) system = span.textContent.trim();
      }
      if (!system) {
        system = this.parentElement.previousElementSibling
          ? this.parentElement.previousElementSibling.textContent.trim()
          : 'sistema';
      }
      const status = this.checked ? 'ativado' : 'desativado';
      alert(`Sistema de ${system} ${status}`);
    });
  });

})();

const btnAcionar = document.getElementById('btnAcionar');
const checkboxes = document.querySelectorAll('.toggle-checkbox');

let todosLigados = false;

function atualizarEstilo(checkbox) {
    const toggleDiv = checkbox.nextElementSibling;
    if (checkbox.checked) {
        toggleDiv.classList.add('bg-amazon-green');
        toggleDiv.classList.remove('bg-gray-200');
    } else {
        toggleDiv.classList.remove('bg-amazon-green');
        toggleDiv.classList.add('bg-gray-200');
    }
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        atualizarEstilo(checkbox);
    });
});


btnAcionar.addEventListener('click', () => {
    todosLigados = !todosLigados;

    checkboxes.forEach(checkbox => {
        checkbox.checked = todosLigados;
        atualizarEstilo(checkbox);
    });

    btnAcionar.innerHTML = todosLigados
        ? '<i class="fas fa-stop-circle mr-2"></i>Desligar Todos os Sistemas'
        : '<i class="fas fa-play-circle mr-2"></i>Acionar Todos os Sistemas';
});

      
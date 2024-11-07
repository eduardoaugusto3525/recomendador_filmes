// Base de dados de filmes
const movies = {
    ação: [
      { title: "Mad Max: Estrada da Fúria", minAge: 16 },
      { title: "John Wick", minAge: 18 },
      { title: "Vingadores: Ultimato", minAge: 12 }
    ],
    comédia: [
      { title: "As Branquelas", minAge: 12 },
      { title: "Se Beber, Não Case!", minAge: 16 },
      { title: "Meu Malvado Favorito", minAge: 6 }
    ],
    drama: [
      { title: "A Procura da Felicidade", minAge: 12 },
      { title: "Parasita", minAge: 16 },
      { title: "Titanic", minAge: 10 }
    ],
    terror: [
      { title: "Invocação do Mal", minAge: 16 },
      { title: "Corra!", minAge: 14 },
      { title: "It: A Coisa", minAge: 16 }
    ],
    aventura: [
      { title: "O Senhor dos Anéis", minAge: 12 },
      { title: "Harry Potter", minAge: 10 },
      { title: "Jumanji: Bem-Vindo à Selva", minAge: 10 }
    ],
    ficção: [
      { title: "Interestelar", minAge: 12 },
      { title: "Matrix", minAge: 14 },
      { title: "Duna", minAge: 14 }
    ]
  };
  
  // Lógica de recomendação
  document.getElementById('recommendationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const age = parseInt(document.getElementById('age').value);
    const genre = document.getElementById('genre').value;
  
    const recommendations = movies[genre].filter(movie => age >= movie.minAge);
  
    const resultDiv = document.getElementById('recommendationResult');
    resultDiv.innerHTML = '';
  
    if (recommendations.length > 0) {
      resultDiv.innerHTML = `
        <h2>Filmes Recomendados:</h2>
        <ul>${recommendations.map(movie => `<li>${movie.title}</li>`).join('')}</ul>
      `;
    } else {
      resultDiv.innerHTML = `<p>Nenhum filme disponível para sua idade nesse gênero.</p>`;
    }
  });
  
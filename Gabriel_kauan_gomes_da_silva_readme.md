My Thought Process
Smart Search: I know that users often forget accents when typing in Portuguese. To fix this, I implemented a normalization function. Whether you type tenis or Tênis, the filter will find the product correctly.

Performance (Event Delegation): Instead of attaching a "click listener" to every single button, I attached one to the main container. This makes the app more memory-efficient and ensures that when you click "Add Sample," the new product's button works automatically.

UX (User Experience): I wanted more than just a text change. I wanted the user to clearly see which product was selected, so I added a green border and a subtle visual highlight to the cards.

Semantics & SEO: I used HTML5 semantic tags (article, main, section) because I understand how crucial they are for accessibility and SEO.

 Tech Stack
HTML5 (Semantic structure)

CSS3 (Responsive layout using Grid and Flexbox - Mobile First!)

Vanilla JavaScript (Pure logic, no frameworks, focusing on the basics)

 How to Test:
Open index.html in your browser.

Use the search bar to filter products (try with and without accents!).

Click the "Add to cart" buttons to see the state and style changes.

Click "Add Product Sample" to see the JS creating new elements in real-time.


O que eu pensei enquanto codava:

Busca inteligente: Eu sei que no dia a dia a gente esquece de colocar acento. Por isso, fiz uma função que "limpa" o texto. Se você digitar tenis ou TÊNIS, o filtro vai encontrar o produto do mesmo jeito.

Performance (Event Delegation):
 Em vez de colocar um "escutador de clique" em cada botão, coloquei um só no container principal. Isso deixa o site mais leve e garante que, quando você clicar em "Adicionar Amostra", o botão do novo produto já nasça funcionando automaticamente.

Experiência do Usuário (UX):
 Não queria apenas que o texto mudasse. Queria que o usuário batesse o olho e soubesse que o produto foi selecionado, por isso adicionei a borda verde e um leve destaque visual no card.

Organização:
 Usei tags semânticas do HTML5 (article, main, section) porque sei que isso é fundamental para acessibilidade e SEO.

 O que usei:
HTML5 (Estrutura focada em semântica)

CSS3 (Layout responsivo com Grid e Flexbox - Mobile First!)

JavaScript Vanilla (Lógica pura, sem frameworks, para mostrar a base)

 Como testar:
Abra o index.html no seu navegador.

Use a barra de busca para filtrar os produtos (tente com e sem acento!).

Clique nos botões "Adicionar ao carrinho" para ver a mudança de estado.

Clique em "Adicionar Amostra" para ver o JS criando novos elementos em tempo real.
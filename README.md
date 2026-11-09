# Prisma ORM

ORM (Object Relation Mapper) é uma ferramenta que facilita o trabalho com bancos de dados em aplicações, permitindo interagir com o banco sem escrever consultas SQL diretamente.

Com o ORM, manipula-se tabelas e dados do banco como se fossem objetos com a linguagem de programação, simplificando a leitura, escrita e manutenção do código. Ele também cuida da conversão dos dados entre o banco de dados relacional (tabelas) e os objetos no código.

### Vantagens

- Menos códigos SQL manual
- Facilita manutenção
- Compatível com múltiplos bancos de dados

### ORM x Query Builders

A principal diferença entre um ORM e um Query Builder é o nível de abstração e como eles interagem com o banco de dados.

- ORM: converte tabelas do banco de dados em objetos da linguagem de programação. Usa-se objetos e o ORM faz o SQL.
- Query Builder: ajuda a criar consultas SQL usando código, sem escrever SQL direto. Dá mais controle, mais exige mais trabalho

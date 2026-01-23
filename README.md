# Meu exercícios

git init
- iniciar novo projeto com o git

git add <nome-arquivo>/.
- add os aqruivos que estão prontos para serem comitados

git commit -m "mensagem commit"
- commit os arquivos no historico

git log
- mostra os ultimos commit, log de alterações 

git status 
- como esta o estado da nossa ramificações

git diff
- que mostra o que foi alterado
- o que tem de alteração na ramificação

git merge
- merge de ramificações, mescla ramificações

git branch 
- mostra a branch atual

git checkout <nome-branch>
- muda para essa branch

git branch -b <nome-da-banch>
- cria uma nova branch a partir do historico da branch atual que estamos

git remote add <nome> <url>
- add um novo repositorio remoto 

git push <nome> <nome-da-branch>
- manda nossas alterações locais para o repositorio remoto, para cada branch 

git pull <nome> <nome-da-branch>
- pega as alterações do repositorioremoto, e joga para nossa maquina

git fetch
- atualiza o novo historico local de acordo com o historico salvo la no repositorio remoto
- sicronização do local com o remoto 
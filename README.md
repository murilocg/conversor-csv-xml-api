# Conversor de CSV para XML
Lambdas para converter arquivos CSV em XML e salvar no banco de dados. O repositório contém duas funções: parser e enhancement. A função parser é incializada toda vez que um arquivo CSV e criado em um bucket especifico; converte o CSV em XML; armazena o arquivo convertido em outro bucket. A função enhancement é inicalizada toda vez que um arquivo XML é criado em um bucket especifico; transforma o arquivo em objetos; envia esses dados para a smart-sight-api.

## Requisitos
- Serverless (Latest)
- AWS CLI (Latest)
- NodeJS (12.x)

## Preparando o ambiente
Antes de começar o desenvolvimento precisamos configurar o ambiente. Certifique-se que todos os requisitos foram instalados.
Configure o cli da AWS com as credenciais devidas [AWS Configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html#cli-quick-configuration)

Faça login no serverless [Serverless Login](https://serverless.com/framework/docs/providers/aws/cli-reference/login/)

### Variaveis de Ambiente
O arquivo secrets.json contém todas as variáveis de ambiente que serão utilizadas nas funções. Atualize os valores delas antes de realizar o deploy.

## Realizando Deploy
Para publicar as funções basta executar o commando `serverless deploy` na raiz do repositório. Lembre-se que as credenciais do AWS cli precisam estar configurados. Caso queira publicar apenas uma função execute o comando `serverless deploy function -f functionName`. [Serverless Deploy Function](https://serverless.com/framework/docs/providers/aws/cli-reference/deploy-function/)
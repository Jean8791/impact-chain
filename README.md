# impact-chain
Plataforma Web3 para registro e rastreabilidade de projetos de impacto.


# Impact Chain (Monorepo)

Monorepo com:
- `apps/web`: frontend (Next.js / React)
- `apps/api`: backend (Node)
- `packages/contracts`: smart contracts (Hardhat / Solidity)
- `packages/shared`: tipos e utilitários compartilhados
- `db/migrations`: migrations do banco off-chain
- `docs`: decisões e documentação

## Estrutura
Este repositório usa npm workspaces (definido no `package.json` raiz).

## Próximas etapas
1) Inicializar workspaces e scripts raiz
2) Criar app web
3) Criar contracts
4) Criar api + db

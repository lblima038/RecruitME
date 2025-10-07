# Dashboard do Usuário - RecruitMe

## 📋 Visão Geral

Página de dashboard completa para usuários autenticados na plataforma RecruitMe. Esta página é acessada automaticamente após login ou cadastro bem-sucedido.

## 🎯 Funcionalidades Implementadas

### 1. **Visão Geral do Perfil**
- Avatar e informações do usuário
- Mensagem de boas-vindas personalizada
- Status de membro desde quando se cadastrou

### 2. **Estatísticas Rápidas**
Quatro cards com métricas importantes:
- 📊 **Programas Inscritos**: Total de programas nos quais o usuário se inscreveu
- 🔖 **Salvos**: Programas marcados como favoritos
- 📅 **Eventos Participados**: Eventos que o usuário participou
- 📈 **Taxa de Sucesso**: Percentual de sucesso em inscrições

### 3. **Oportunidades Disponíveis**
Sistema de abas com três visualizações:

#### **Novas Oportunidades**
- Lista de bootcamps, estágios e workshops disponíveis
- Informações exibidas:
  - Título e empresa
  - Tipo de programa (badge colorido)
  - Status (Aberto/Encerrando em breve)
  - Data limite de inscrição
  - Número de participantes inscritos
- Ações:
  - Salvar programa (ícone de bookmark)
  - Inscrever-se imediatamente

#### **Minhas Inscrições**
- Visualização de todas as inscrições ativas do usuário
- Estado vazio com CTA para explorar oportunidades

#### **Salvos**
- Programas que o usuário marcou para revisar depois
- Mostra quando foi salvo
- Ação rápida para ver detalhes

### 4. **Completar Perfil** (Sidebar)
- Barra de progresso visual (0-100%)
- Lista de tarefas pendentes:
  - ✅ Adicionar formação acadêmica
  - Adicionar experiência profissional
  - Definir preferências de oportunidades
- Botão de ação para completar perfil

### 5. **Recomendações Personalizadas**
- Programas recomendados baseados no perfil
- Percentual de match com o perfil do usuário
- Tags coloridas indicando nível de compatibilidade
- Link para ver todas as recomendações

### 6. **Ações Rápidas**
Atalhos para funcionalidades importantes:
- 🔔 Configurar Alertas de oportunidades
- 📅 Acessar calendário de eventos
- 📊 Ver estatísticas detalhadas

## 🔄 Fluxo de Navegação

### Login → Dashboard
```
1. Usuário acessa /pages/login
2. Preenche email e senha
3. Clica em "Entrar"
4. Sistema valida (TODO: implementar autenticação real)
5. Redireciona para /dashboard
```

### Cadastro → Dashboard
```
1. Usuário acessa /pages/signup
2. Preenche nome, email, senha e confirma senha
3. Aceita os termos de serviço
4. Clica em "Criar conta"
5. Sistema valida os dados
6. Redireciona para /dashboard
```

## 🎨 Design e UI

### Componentes Chakra UI Utilizados
- `Card`, `CardHeader`, `CardBody`: Estrutura de cards
- `Grid`, `GridItem`, `SimpleGrid`: Layout responsivo
- `Avatar`: Foto do usuário
- `Badge`: Tags de status e categorias
- `Progress`: Barra de progresso do perfil
- `Icon`: Ícones do react-icons/fa

### Temas e Cores
- **Principal**: Teal (verde-azulado)
- **Secundário**: Blue
- **Status Aberto**: Green
- **Status Encerrando**: Orange
- **Suporte de modo escuro**: Totalmente implementado

### Responsividade
- **Mobile (base)**: Layout em coluna única
- **Tablet (md)**: Grid de 2 colunas para stats
- **Desktop (lg)**: Grid principal 2fr/1fr (conteúdo/sidebar)

## 📁 Estrutura de Arquivos

```
app/
├── dashboard/
│   └── page.tsx          # Página principal do dashboard
├── pages/
│   ├── login/
│   │   └── page.tsx      # Atualizado com redirecionamento
│   └── signup/
│       └── page.tsx      # Atualizado com redirecionamento
└── components/
    └── Layouts/
        ├── Header.tsx    # Header compartilhado
        └── Footer.tsx    # Footer compartilhado
```

## 🔧 Próximas Implementações

### Autenticação Real
```typescript
// TODO: Integrar com backend
- Implementar JWT ou sessões
- Validação de credenciais
- Proteção de rotas (middleware)
- Persistência de usuário logado
```

### Dados Dinâmicos
```typescript
// TODO: Substituir dados mockados
- Conectar com API para oportunidades
- Buscar perfil do usuário autenticado
- Carregar estatísticas reais
- Sistema de recomendações baseado em IA
```

### Funcionalidades Adicionais
- [ ] Sistema de notificações em tempo real
- [ ] Chat para suporte
- [ ] Filtros avançados de oportunidades
- [ ] Calendário integrado de eventos
- [ ] Upload de currículo
- [ ] Sistema de badges/conquistas
- [ ] Compartilhamento social

## 💾 Dados Mockados Atuais

### Usuário
```typescript
{
  name: 'João Silva',
  email: 'joao.silva@email.com',
  role: 'Estudante',
  memberSince: 'Outubro 2024'
}
```

### Oportunidades
- 3 programas disponíveis (Bootcamp, Estágio, Workshop)
- Informações: título, empresa, tipo, deadline, status, participantes

### Programas Salvos
- 2 programas salvos com categoria e data

### Estatísticas
- Programas inscritos: 8
- Salvos: 12
- Eventos participados: 5
- Taxa de sucesso: 75%

## 🚀 Como Testar

1. **Acesse a página de login**:
   ```
   http://localhost:3000/pages/login
   ```

2. **Preencha qualquer email e senha** (validação real ainda não implementada)

3. **Clique em "Entrar"**

4. **Você será redirecionado para** `/dashboard`

**OU**

1. **Acesse a página de cadastro**:
   ```
   http://localhost:3000/pages/signup
   ```

2. **Preencha os dados do formulário**

3. **Aceite os termos**

4. **Clique em "Criar conta"**

5. **Você será redirecionado para** `/dashboard`

## 📱 Compatibilidade

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px+)
- ✅ Tablet (768px+)
- ✅ Mobile (320px+)
- ✅ Modo claro
- ✅ Modo escuro

## 🎯 Experiência do Usuário

### Primeira Visão
O usuário vê imediatamente:
1. Seu nome e avatar
2. Métricas importantes do perfil
3. Oportunidades relevantes
4. Progresso de completude do perfil

### Interações Principais
- **Explorar oportunidades**: Sistema de abas intuitivo
- **Inscrever-se**: Um clique para candidatar-se
- **Salvar para depois**: Bookmark rápido
- **Completar perfil**: Gamificação com barra de progresso

### Feedback Visual
- Badges coloridos por status
- Icons informativos
- Hover states em cards
- Cores semânticas (verde=aberto, laranja=urgente)

---

**Desenvolvido com ❤️ usando Next.js 14, Chakra UI e TypeScript**

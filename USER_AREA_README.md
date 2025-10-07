# Área do Usuário - Atualização da Estrutura

> **📝 Nota:** A página de configurações (`/pages/settings`) foi removida e será implementada posteriormente.

## 🎯 Mudanças Implementadas

### ✅ Nova Estrutura de Pastas

Toda a área autenticada foi reorganizada dentro de `app/pages/` para melhor organização:

```
app/
├── pages/
│   ├── login/
│   │   └── page.tsx          # Página de login
│   ├── signup/
│   │   └── page.tsx          # Página de cadastro
│   ├── forgot-password/
│   │   └── page.tsx          # Recuperação de senha
│   ├── dashboard/            # ✨ MOVIDO
│   │   └── page.tsx          # Dashboard do usuário
│   └── profile/              # ✨ NOVO
│       └── page.tsx          # Edição de perfil
└── components/
    └── Layouts/
        ├── Header.tsx        # Header público (landing page)
        └── UserHeader.tsx    # ✨ NOVO - Header do usuário autenticado
```

---

## 🔧 Componentes Criados

### 1. **UserHeader** (`components/Layouts/UserHeader.tsx`)

Navbar específica para usuários autenticados com:

#### 🎨 **Design**
- Logo clicável (retorna ao dashboard)
- Ícone de notificações com badge de alerta
- Avatar do usuário + menu dropdown

#### 📋 **Menu do Usuário**
Ao clicar no avatar, o usuário vê:
- **Nome e email** (header do menu)
- **Meu Perfil** → Redireciona para `/pages/profile`
- **Notificações** → (funcionalidade futura)
- **Sair** → Desloga e volta para homepage

#### 🔔 **Notificações**
- Botão com ícone de sino
- Badge vermelho indicando novas notificações
- Funcionalidade será implementada futuramente

---

### 2. **Dashboard** (`pages/dashboard/page.tsx`)

#### ✨ **Atualizações**
- ✅ Agora usa `UserHeader` ao invés do Header público
- ✅ Removido avatar grande da seção de boas-vindas
- ✅ Mantém todas as funcionalidades anteriores

---

### 3. **Página de Perfil** (`pages/profile/page.tsx`)

Página completa para edição de informações do usuário.

#### 📝 **Seções do Formulário**

##### **Header do Perfil**
- Avatar grande (2xl) com botão de câmera para trocar foto
- Nome, email e localização
- Botão "Salvar Alterações" destacado

##### **Informações Pessoais**
- Nome completo
- E-mail
- Telefone
- Localização (cidade, estado)
- Sobre mim (textarea)

##### **Formação Acadêmica**
- Curso e instituição
- Nível (Ensino Médio, Técnico, Graduação, Pós, Mestrado, Doutorado)

##### **Experiência Profissional**
- Cargo atual
- Habilidades (separadas por vírgula)

##### **Redes Sociais**
- LinkedIn
- GitHub

#### 🎯 **Funcionalidades**
- ✅ Formulário completo responsivo
- ✅ Upload de avatar (placeholder - toast de "em desenvolvimento")
- ✅ Validação de campos
- ✅ Toast de sucesso ao salvar
- ✅ Botão "Voltar ao Dashboard"

---

### 4. **Página de Configurações** (`pages/settings/page.tsx`)

Página para gerenciar preferências e segurança da conta.

#### ⚙️ **Categorias**

##### **🔔 Notificações**
- **E-mail**: Receber atualizações por e-mail
- **Push**: Notificações no navegador
- **Resumo Semanal**: E-mail semanal com oportunidades
- **Alertas**: Notificações de novas oportunidades

##### **🔒 Segurança**
- **Autenticação de Dois Fatores** (2FA)
- **Botão**: Alterar Senha

##### **🌐 Preferências Regionais**
- **Idioma**: Português (BR), English (US), Español
- **Fuso Horário**: São Paulo, New York, London, Tokyo

##### **👤 Gerenciar Conta**
- **Desativar Conta Temporariamente** (botão laranja)
- **Excluir Conta Permanentemente** (botão vermelho)

#### 🎯 **Funcionalidades**
- ✅ Switches para toggles (on/off)
- ✅ Selects para idioma e fuso horário
- ✅ Toast de confirmação ao salvar
- ✅ Botão "Voltar ao Dashboard"
- ✅ Ícones visuais por categoria

---

## 🔄 Fluxo de Navegação Atualizado

### **Login/Cadastro → Dashboard**
```
1. Usuário faz login/cadastro
2. Redireciona para /pages/dashboard
3. UserHeader é exibido com foto e nome
```

### **Acessar Perfil**
```
1. No dashboard, clicar no avatar (UserHeader)
2. Selecionar "Meu Perfil"
3. Vai para /pages/profile
4. Editar informações
5. Clicar "Salvar"
6. Toast de sucesso
7. Voltar ao dashboard se desejar
```

### **Acessar Configurações**
```
1. No dashboard, clicar no avatar
2. Selecionar "Configurações"
3. Vai para /pages/settings
4. Alterar preferências
5. Clicar "Salvar Configurações"
6. Toast de sucesso
```

### **Logout**
```
1. Clicar no avatar
2. Selecionar "Sair"
3. Redireciona para homepage (/)
```

---

## 🎨 Design System

### **Cores Utilizadas**
- **Principal**: Teal (verde-azulado)
- **Ações Perigosas**: Red (excluir conta)
- **Avisos**: Orange (desativar conta)
- **Sucesso**: Green (status, confirmações)
- **Info**: Blue (categorias)

### **Componentes Chakra UI**
- `Avatar` com badge de notificação
- `Menu`, `MenuButton`, `MenuList`, `MenuItem`
- `Card`, `CardHeader`, `CardBody`
- `Switch` para toggles
- `Select` para dropdowns
- `Toast` para feedbacks
- `Icon` do react-icons

### **Responsividade**
- ✅ Mobile first
- ✅ Grid adaptativo (1 coluna → 2 colunas)
- ✅ Avatar e texto escondem em mobile
- ✅ Menu funciona em todos os tamanhos

---

## 📊 Dados Mockados

Atualmente usando dados de exemplo que devem ser substituídos por dados reais da API:

```typescript
const MOCK_USER_DATA = {
  name: 'João Silva',
  email: 'joao.silva@email.com',
  phone: '(11) 99999-9999',
  bio: 'Estudante de Tecnologia...',
  location: 'São Paulo, SP',
  education: 'Ciência da Computação - USP',
  experience: 'Estagiário em Desenvolvimento',
  skills: 'JavaScript, React, Node.js, Python',
  linkedin: 'linkedin.com/in/joaosilva',
  github: 'github.com/joaosilva',
  avatar: '',
};
```

---

## 🚀 Como Testar

### **1. Acessar Dashboard**
```
http://localhost:3001/pages/login
→ Login com qualquer credencial
→ Redireciona para /pages/dashboard
→ Navbar agora mostra foto e nome do usuário
```

### **2. Acessar Perfil**
```
No dashboard:
→ Clicar no avatar (canto superior direito)
→ Selecionar "Meu Perfil"
→ Editar informações
→ Clicar em "Salvar Alterações"
→ Ver toast de sucesso
```

### **3. Acessar Configurações**
```
No dashboard:
→ Clicar no avatar
→ Selecionar "Configurações"
→ Ativar/desativar switches
→ Mudar idioma/fuso horário
→ Clicar em "Salvar Configurações"
→ Ver toast de sucesso
```

### **4. Testar Logout**
```
→ Clicar no avatar
→ Selecionar "Sair"
→ Redireciona para homepage
```

---

## 📋 TODOs - Próximas Implementações

### **Autenticação**
- [ ] Integrar com backend real
- [ ] Implementar JWT/sessões
- [ ] Proteção de rotas (middleware)
- [ ] Persistir usuário logado
- [ ] Implementar logout real

### **Upload de Arquivos**
- [ ] Implementar upload de avatar
- [ ] Upload de currículo
- [ ] Upload de certificados

### **Notificações**
- [ ] Sistema de notificações em tempo real
- [ ] Marcar como lida
- [ ] Central de notificações
- [ ] Badge com contador correto

### **Perfil**
- [ ] Validação avançada de campos
- [ ] Preview de mudanças antes de salvar
- [ ] Histórico de alterações
- [ ] Verificação de email
- [ ] Verificação de telefone

### **Configurações**
- [ ] Implementar 2FA real
- [ ] Fluxo de alteração de senha
- [ ] Download de dados (GDPR)
- [ ] Exportar perfil

### **Funcionalidades Extras**
- [ ] Sistema de conquistas/badges
- [ ] Níveis de perfil (iniciante, intermediário, avançado)
- [ ] Integração com calendário Google
- [ ] Modo escuro persistente
- [ ] Temas personalizados

---

## 🎯 Benefícios da Nova Estrutura

### **Organização**
✅ Todas as páginas relacionadas ao usuário em `/pages/`
✅ Separação clara entre área pública e autenticada
✅ Fácil de localizar e manter

### **Experiência do Usuário**
✅ Navbar consistente em todas as páginas autenticadas
✅ Acesso rápido ao perfil e configurações
✅ Notificações visíveis
✅ Logout sempre acessível

### **Escalabilidade**
✅ Fácil adicionar novas páginas em `/pages/`
✅ UserHeader reutilizável
✅ Dados centralizados (fácil integrar com API)

### **Profissionalismo**
✅ Interface completa e polida
✅ Feedback visual consistente (toasts)
✅ Design responsivo em todas as telas

---

## 📸 Hierarquia Visual

```
┌─────────────────────────────────────────┐
│  UserHeader (com avatar e menu)         │
├─────────────────────────────────────────┤
│                                         │
│  [Dashboard / Perfil / Configurações]   │
│                                         │
│  Conteúdo específico de cada página     │
│                                         │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

---

## 🔐 Segurança (Planejado)

### **Proteção de Rotas**
```typescript
// middleware.ts (a implementar)
export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')
  
  if (!token && request.nextUrl.pathname.startsWith('/pages/dashboard')) {
    return NextResponse.redirect(new URL('/pages/login', request.url))
  }
}
```

### **Validação de Sessão**
- [ ] Verificar token em cada requisição
- [ ] Refresh automático de tokens
- [ ] Logout automático após expiração

---

**Estrutura 100% organizada e pronta para crescer! 🚀**

Todos os arquivos agora estão em `pages/` e o usuário tem uma experiência completa de navegação com seu perfil visível em todos os momentos.

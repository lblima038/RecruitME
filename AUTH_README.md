# Sistema de Autenticação - RecruitMe

## Páginas Criadas

Este sistema de autenticação inclui as seguintes páginas:

### 1. Login (`/pages/login`)
- Formulário de login com e-mail e senha
- Opção "Lembrar-me"
- Link para recuperação de senha
- Link para criar conta

**Recursos:**
- Validação de campos obrigatórios
- Toggle de visualização de senha
- Design responsivo
- Gradiente visual moderno

### 2. Cadastro (`/pages/signup`)
- Formulário de registro completo
- Campos: Nome, E-mail, Senha e Confirmação de senha
- Checkbox de aceitação dos termos
- Link para login

**Recursos:**
- Validação de senhas correspondentes
- Dicas de senha forte
- Confirmação de termos de serviço
- Design consistente com a página de login

### 3. Recuperação de Senha (`/pages/forgot-password`)
- Formulário simples com e-mail
- Tela de confirmação após envio
- Opção de reenvio
- Link de retorno ao login

**Recursos:**
- Toast notification de sucesso
- Mensagem de expiração do link
- Interface clara e intuitiva

## Header Atualizado

O componente `Header` foi atualizado para incluir:
- Botão "Login" que redireciona para `/pages/login`
- Logo clicável que retorna à página inicial
- Mantém o botão de registro existente

## Como Usar

### Navegação
```
- Acesse /pages/login para fazer login
- Acesse /pages/signup para criar uma conta
- Acesse /pages/forgot-password para recuperar senha
- Clique em "Login" no header para acessar rapidamente
```

### Próximos Passos - Implementação Backend

Para tornar o sistema de autenticação funcional, você precisará:

1. **Configurar um Provider de Autenticação**
   - NextAuth.js (recomendado)
   - Auth0
   - Firebase Auth
   - Supabase Auth

2. **Exemplo com NextAuth.js:**

```bash
npm install next-auth @next-auth/prisma-adapter
```

3. **Criar arquivo de configuração** (`app/api/auth/[...nextauth]/route.ts`):

```typescript
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Adicione sua lógica de validação aqui
        // Consulte o banco de dados, valide senha, etc.
        return user
      }
    })
  ],
  pages: {
    signIn: '/pages/login',
    signUp: '/pages/signup',
    error: '/pages/login',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

4. **Configurar variáveis de ambiente** (`.env.local`):

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua_chave_secreta_aqui
```

5. **Atualizar as páginas de login/signup** para usar NextAuth:

```typescript
import { signIn } from 'next-auth/react'

// No handleLogin:
await signIn('credentials', {
  email,
  password,
  callbackUrl: '/'
})
```

6. **Proteger rotas privadas:**

```typescript
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/login')
  }
  
  return <div>Conteúdo protegido</div>
}
```

## Banco de Dados

Você precisará de tabelas para:
- Usuários (users)
- Sessões (sessions)
- Contas (accounts) - para OAuth
- Tokens de verificação (verification_tokens)

### Exemplo de Schema Prisma:

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  password      String?
  image         String?
  accounts      Account[]
  sessions      Session[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

## Segurança

Lembre-se de implementar:
- ✅ Hash de senhas (bcrypt)
- ✅ Validação de força de senha
- ✅ Rate limiting para tentativas de login
- ✅ CSRF protection
- ✅ Verificação de e-mail
- ✅ Tokens de recuperação de senha com expiração
- ✅ HTTPS em produção

## Design

As páginas utilizam:
- Chakra UI para componentes
- Gradientes teal/blue para elementos principais
- Design responsivo
- Ícones do Chakra Icons
- Validação de formulários
- Estados de loading e sucesso

## Personalização

Você pode personalizar:
- Cores no `app/styles/theme.ts`
- Textos e mensagens em cada página
- Validações e regras de negócio
- Campos do formulário de cadastro

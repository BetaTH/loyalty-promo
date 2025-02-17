import { Layout } from '@/components/layout/layout'

export default function TermosCondicoes() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Política de Privacidade</h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introdução</h2>
            <p className="leading-relaxed">
              A SA Suplementos está comprometida com a proteção da sua
              privacidade. Esta Política de Privacidade explica como coletamos,
              usamos e protegemos suas informações pessoais ao utilizar nosso
              site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              2. Informações Coletadas
            </h2>
            <p className="leading-relaxed">
              Coletamos apenas as informações necessárias para seu cadastro e
              funcionamento básico do site, que incluem:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Telefone para contato</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Uso de Cookies</h2>
            <p className="leading-relaxed">
              Utilizamos apenas cookies essenciais para manter sua sessão de
              login ativa. Estes cookies são estritamente necessários para o
              funcionamento básico do site e são automaticamente deletados
              quando você faz logout.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              4. Uso das Informações
            </h2>
            <p className="leading-relaxed">
              Suas informações pessoais são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Comunicar o status das suas compras</li>
              <li>Responder a suas dúvidas e solicitações</li>
              <li>Manter seu cadastro atualizado em nossa plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Proteção de Dados</h2>
            <p className="leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para
              proteger suas informações pessoais contra acesso não autorizado,
              alteração, divulgação ou destruição não autorizada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              6. Compartilhamento de Dados
            </h2>
            <p className="leading-relaxed">
              Não compartilhamos, vendemos ou alugamos suas informações pessoais
              para terceiros. Suas informações são utilizadas exclusivamente
              pela SA Suplementos para os fins descritos nesta política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Seus Direitos</h2>
            <p className="leading-relaxed">Você tem direito a:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Acessar seus dados pessoais</li>
              <li>Solicitar a correção de dados incorretos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Contato</h2>
            <p className="leading-relaxed">
              Para questões relacionadas aos seus dados pessoais ou a esta
              Política de Privacidade, entre em contato conosco através dos
              canais de atendimento disponíveis em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              9. Atualizações da Política
            </h2>
            <p className="leading-relaxed">
              Esta política pode ser atualizada ocasionalmente. Recomendamos que
              você revise periodicamente para se manter informado sobre como
              protegemos suas informações.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}

import { Layout } from '@/components/layout/layout'

export default function TermosCondicoes() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Termos de Uso</h1>

        <section className="space-y-6">
          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">1. Introdução</h2>
            <p className="leading-relaxed">
              Bem-vindo ao Programa de Pontuação e Bonificação da SA
              Suplementos. Estes Termos de Uso (&quotTermos&quot) regem a sua
              participação no programa, que visa recompensar clientes fiéis com
              pontos e benefícios adicionais.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">
              2. Aceitação dos Termos
            </h2>
            <p className="leading-relaxed">
              Ao participar do Programa, você concorda em cumprir estes Termos e
              todas as modificações que possam ser feitas. Caso não concorde com
              estes Termos, não deve participar do Programa.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">3. Elegibilidade</h2>
            <p className="leading-relaxed">
              Para participar, você deve ser maior de 18 anos e possuir um
              cadastro válido na SA Suplementos. Funcionários e seus parentes
              diretos podem estar excluídos da participação, dependendo das
              políticas da empresa.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">4. Acúmulo de Pontos</h2>
            <div className="ml-4 space-y-4">
              <div>
                <h3 className="font-medium mb-2">4.1. Geração de Pontos</h3>
                <p className="leading-relaxed">
                  Pontos são acumulados com base em compras realizadas na SA
                  Suplementos. O número de pontos por valor gasto será
                  especificado no momento da compra.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">4.2. Validade dos Pontos</h3>
                <p className="leading-relaxed">
                  Os pontos têm validade de 01 mês a partir da data de
                  aquisição. Pontos expirados não serão reativados.
                </p>
              </div>
            </div>
          </div>

          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">5. Resgate de Pontos</h2>
            <div className="ml-4 space-y-4">
              <div>
                <h3 className="font-medium mb-2">5.1. Benefícios</h3>
                <p className="leading-relaxed">
                  Pontos acumulados podem ser trocados por descontos, produtos
                  gratuitos ou outros benefícios oferecidos pela SA Suplementos.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">5.2. Processo de Resgate</h3>
                <p className="leading-relaxed">
                  O resgate pode ser realizado diretamente no caixa conforme as
                  instruções fornecidas.
                </p>
              </div>
            </div>
          </div>

          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">
              6. Alterações e Encerramento
            </h2>
            <div className="ml-4 space-y-4">
              <div>
                <h3 className="font-medium mb-2">6.1. Modificações</h3>
                <p className="leading-relaxed">
                  O Programa pode ser encerrado a qualquer momento, e os pontos
                  acumulados podem ser cancelados sem compensação.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">6.2. Encerramento</h3>
                <p className="leading-relaxed">
                  Qualquer tentativa de fraude ou uso indevido do Programa
                  resultará no cancelamento da participação e na perda de pontos
                  acumulados.
                </p>
              </div>
            </div>
          </div>
          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">7. Uso Indevido</h2>
            <p className="leading-relaxed">
              Qualquer tentativa de fraude ou uso indevido do Programa resultará
              no cancelamento da participação e na perda de pontos acumulados.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">8. Responsabilidade</h2>
            <p className="leading-relaxed">
              A SA Suplementos não se responsabiliza por erros no processamento
              de pontos ou resgates devido a falhas técnicas ou outros problemas
              fora do controle da empresa.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">9. Privacidade</h2>
            <p className="leading-relaxed">
              Os dados coletados no Programa serão utilizados de acordo com a
              Política de Privacidade da SA Suplementos, podendo ser utilizado
              para campanha internas de forma a oferecer produtos ou serviços.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">10. Contato</h2>
            <p className="leading-relaxed">
              Para dúvidas ou esclarecimentos, entre em contato com o
              atendimento ao cliente da SA Suplementos através dos canais
              informados em nosso site.
            </p>
          </div>
          <div className="terms-section">
            <h2 className="text-xl font-semibold mb-3">11. Lei Aplicável</h2>
            <p className="leading-relaxed">
              Estes Termos são regidos pelas leis do [Brasil/ Piaui], e
              quaisquer disputas serão resolvidas nos tribunais competentes de
              Teresina.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

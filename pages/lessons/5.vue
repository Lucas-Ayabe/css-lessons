<template>
  <main class="main">
    <article class="container">
      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">Espaçamento</h1>
          <p class="section__text">
            Espaçamento é algo importante, ele ajuda a criar agrupamentos
            visuais, a separar e juntar elementos, dar um senso de respiro e
            etc.
          </p>

          <p class="section__text">
            No CSS é possível criar espaçamento interna e externamente.
          </p>

          <AppSection>
            <AppSectionContent>
              <h1 class="section__title">Padding</h1>
              <p class="section__text">
                Para se criar um espaçamento interno com CSS, usamos a
                propriedade padding.
              </p>

              <p class="section__text">
                A propriedade padding segue a seguinte estrutura:
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">padding: &lt;top-value> &lt;right-value> &lt;bottom-value> &lt;left-value>;</prism>
              </client-only>

              <p class="section__text">
                Pois é uma propriedade shorthand, ou seja que serve de atalho,
                para as seguintes propriedades:
              </p>

              <dl>
                <dt>padding-top</dt>
                <dd>
                  Aplica um espaçamento na entre a borda do topo e o conteúdo do
                  elemento.
                </dd>

                <dt>padding-right</dt>
                <dd>
                  Aplica um espaçamento na entre a borda da direita e o conteúdo
                  do elemento.
                </dd>

                <dt>padding-bottom</dt>
                <dd>
                  Aplica um espaçamento na entre a borda de baixo e o conteúdo
                  do elemento.
                </dd>

                <dt>padding-left</dt>
                <dd>
                  Aplica um espaçamento na entre a borda da esquerda e o
                  conteúdo do elemento.
                </dd>
              </dl>
              <br />

              <p class="section__text">
                Para ilustrar toda a explicação acima vou usar o trecho de
                código abaixo:
              </p>
              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">
.padding-example-1 {
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;

  /**
   * padding
   *
   * Cria um espaçamento
   * interno de 20px
   * no topo,
   * na direita,
   * em baixo
   * e na esquerda.
   */
  padding: 20px 20px 20px 20px;
  /**
   * A linha de código
   * acima é equivalente
   * ao seguinte bloco de
   * código:
   * padding-top: 20px;
   * padding-right: 20px;
   * padding-bottom: 20px;
   * padding-left: 20px;
   */
}
                </prism>
              </client-only>
              <div id="padding-example-1">
                <style>
                  .padding-example-1 {
                    background: #eee;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    padding: 20px 20px 20px 20px;
                  }
                </style>
                <div class="padding-example-1">.padding-example-1</div>
              </div>
              <br />
              <p class="section__text">
                Além de poder ser escrita da forma acima, se especificando os
                valores de cada lado explicitamente, é possível utilizar outras
                combinações "como atalhos":
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">
.padding-example-2 {
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;

  /**
    * A linha de código
    * abaixo é equivalente
    * ao seguinte bloco de
    * código:
    * padding-top: 40px;
    * padding-right: 10px;
    * padding-bottom: 40px;
    * padding-left: 10px;
    */
  padding: 40px 10px;
  /**
   * Isso é possível, pois
   * quando usamos apenas
   * dois valores para a
   * propriedade padding,
   * o primeiro valor é o
   * valor dos paddings verticais
   * e o segundo dos horizontais.
   *
   * Sendo assim, neste
   * exemplo o resultado é
   * um espaçamento de
   * padding-top e
   * padding-bottom maior
   * e um espaçamento de
   * padding-left e
   * padding-right menor.
   */
}
                </prism>
              </client-only>

              <div id="padding-example-2">
                <style>
                  .padding-example-2 {
                    background: #eee;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    padding: 40px 10px;
                  }
                </style>
                <div class="padding-example-2">.padding-example-2</div>
              </div>
              <br />

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">
.padding-example-3 {
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;

  /**
    * A linha de código
    * abaixo é equivalente
    * ao seguinte bloco de
    * código:
    * padding-top: 60px;
    * padding-right: 40px;
    * padding-bottom: 20px;
    * padding-left: 40px;
    */
  padding: 60px 40px 20px;
  /**
   * Isso é possível, pois
   * quando usamos tres
   * valores para a
   * propriedade padding,
   * o primeiro valor é o
   * valor do padding-top,
   * o segundo dos horizontais
   * e o terceiro do
   * padding-bottom.
   *
   * Sendo assim, neste
   * exemplo o resultado é
   * um espaçamento de
   * padding-top maior
   * que o resto, um
   * padding-left e
   * padding-right um pouco
   * menor que o do top
   * e um padding-bottom
   * menor que todo o resto.
   */
}
                </prism>
              </client-only>
              <div id="padding-example-3">
                <style>
                  .padding-example-3 {
                    background: #eee;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    padding: 60px 40px 20px;
                  }
                </style>
                <div class="padding-example-3">.padding-example-3</div>
              </div>
              <br />

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">
.padding-example-4 {
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;

  /**
    * A linha de código
    * abaixo é equivalente
    * ao seguinte bloco de
    * código:
    * padding-top: 20px;
    * padding-right: 20px;
    * padding-bottom: 20px;
    * padding-left: 20px;
    */
  padding: 20px;
  /**
   * Isso é possível, pois
   * quando usamos um valor
   * para a propriedade
   * padding, o valor dado
   * é usado em todas as
   * propriedades.
   */
}
                </prism>
              </client-only>
              <div id="padding-example-4">
                <style>
                  .padding-example-4 {
                    background: #eee;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    padding: 20px;
                  }
                </style>
                <div class="padding-example-4">.padding-example-4</div>
              </div>
              <br />
            </AppSectionContent>
          </AppSection>

          <AppSection>
            <AppSectionContent>
              <h1 class="section__title">Margin</h1>
              <p class="section__text">
                Para se criar um espaçamento externo com CSS, usamos a
                propriedade margin.
              </p>

              <p class="section__text">
                A propriedade margin segue a seguinte estrutura:
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">margin: &lt;top-value> &lt;right-value> &lt;bottom-value> &lt;left-value>;</prism>
              </client-only>

              <p class="section__text">
                Pois é uma propriedade shorthand, ou seja que serve de atalho,
                para as seguintes propriedades:
              </p>

              <dl>
                <dt>margin-top</dt>
                <dd>
                  Aplica um espaçamento no entorno entre a borda do topo e o
                  exterior do elemento.
                </dd>

                <dt>margin-right</dt>
                <dd>
                  Aplica um espaçamento no entorno entre a borda da direita e o
                  exterior do elemento.
                </dd>

                <dt>margin-bottom</dt>
                <dd>
                  Aplica um espaçamento no entorno entre a borda de baixo e o
                  exterior do elemento.
                </dd>

                <dt>margin-left</dt>
                <dd>
                  Aplica um espaçamento no entorno entre a borda da esquerda e o
                  exterior do elemento.
                </dd>
              </dl>
              <br />
              <p class="section__text">
                Para ilustrar toda a explicação acima vou usar o trecho de
                código abaixo:
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">
.margin-example-1 {
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px 20px;

  /**
   * margin
   *
   * Cria um espaçamento
   * externo de 20px
   * no topo,
   * na direita,
   * em baixo
   * e na esquerda.
   */
  margin: 20px 20px 20px 20px;
  /**
   * A linha de código
   * acima é equivalente
   * ao seguinte bloco de
   * código:
   * margin-top: 20px;
   * margin-right: 20px;
   * margin-bottom: 20px;
   * margin-left: 20px;
   */
}
                </prism>
              </client-only>

              <div id="margin-example-1" style="background: #333;">
                <style>
                  .margin-example-1 {
                    display: inline-block;
                    background: #eee;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    padding: 10px 20px;
                    margin: 20px 20px 20px 20px;
                  }
                </style>
                <div class="margin-example-1">.margin-example-1</div>
                <div class="margin-example-1">.margin-example-1</div>
                <div class="margin-example-1">.margin-example-1</div>
              </div>
              <br />
              <p class="section__text">
                Além de poder ser escrita da forma acima, se especificando os
                valores de cada lado explicitamente, é possível utilizar outras
                combinações "como atalhos":
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">
.margin-example-2 {
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px 20px;

  /**
    * A linha de código
    * abaixo é equivalente
    * ao seguinte bloco de
    * código:
    * margin-top: 40px;
    * margin-right: 10px;
    * margin-bottom: 40px;
    * margin-left: 10px;
    */
  margin: 40px 10px;
  /**
   * Isso é possível, pois
   * quando usamos apenas
   * dois valores para a
   * propriedade margin,
   * o primeiro valor é o
   * valor dos margins verticais
   * e o segundo dos horizontais.
   *
   * Sendo assim, neste
   * exemplo o resultado é
   * um espaçamento de
   * margin-top e
   * margin-bottom maior
   * e um espaçamento de
   * margin-left e
   * margin-right menor.
   */
}
                </prism>
              </client-only>

              <div id="margin-example-2" style="background: #333;">
                <style>
                  .margin-example-2 {
                    display: inline-block;
                    padding: 10px 20px;
                    background: #eee;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    margin: 40px 10px;
                  }
                </style>
                <div class="margin-example-2">.margin-example-2</div>
                <div class="margin-example-2">.margin-example-2</div>
                <div class="margin-example-2">.margin-example-2</div>
              </div>
              <br />

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">
.margin-example-3 {
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px 20px;

  /**
    * A linha de código
    * abaixo é equivalente
    * ao seguinte bloco de
    * código:
    * margin-top: 60px;
    * margin-right: 40px;
    * margin-bottom: 20px;
    * margin-left: 40px;
    */
  margin: 60px 40px 20px;
  /**
   * Isso é possível, pois
   * quando usamos tres
   * valores para a
   * propriedade margin,
   * o primeiro valor é o
   * valor do margin-top,
   * o segundo dos horizontais
   * e o terceiro do
   * margin-bottom.
   *
   * Sendo assim, neste
   * exemplo o resultado é
   * um espaçamento de
   * margin-top maior
   * que o resto, um
   * margin-left e
   * margin-right um pouco
   * menor que o do top
   * e um margin-bottom
   * menor que todo o resto.
   */
}
                </prism>
              </client-only>

              <div id="margin-example-3" style="background: #333;">
                <style>
                  .margin-example-3 {
                    display: inline-block;
                    padding: 10px 20px;
                    background: #eee;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    margin: 60px 40px 20px;
                  }
                </style>
                <div class="margin-example-3">.margin-example-3</div>
                <div class="margin-example-3">.margin-example-3</div>
                <div class="margin-example-3">.margin-example-3</div>
              </div>
              <br />

              <client-only>
                <!-- prettier-ignore -->
                <prism language="css">
.margin-example-4 {
  background: #eee;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px 20px;

  /**
    * A linha de código
    * abaixo é equivalente
    * ao seguinte bloco de
    * código:
    * margin-top: 20px;
    * margin-right: 20px;
    * margin-bottom: 20px;
    * margin-left: 20px;
    */
  margin: 20px;
  /**
   * Isso é possível, pois
   * quando usamos um valor
   * para a propriedade
   * margin, o valor dado
   * é usado em todas as
   * propriedades.
   */
}
                </prism>
              </client-only>
              <div id="margin-example-4" style="background: #333;">
                <style>
                  .margin-example-4 {
                    display: inline-block;
                    background: #eee;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    padding: 10px 20px;
                    margin: 20px;
                  }
                </style>
                <div class="margin-example-4">.margin-example-4</div>
                <div class="margin-example-4">.margin-example-4</div>
                <div class="margin-example-4">.margin-example-4</div>
              </div>
              <br />

              <h2>Curiosidade</h2>
              <p class="section__text">
                A propriedade margin pode receber valores em números negativos,
                mas a propriedade padding não.
              </p>
            </AppSectionContent>
          </AppSection>

          <AppSection>
            <AppSectionContent>
              <h1 class="section__title">Exercício</h1>
              <p class="section__text">
                Agora que aprendemos sobre as propriedades relacionadas a
                espaçamento, que tal um pouco de pratica?
              </p>
              <p class="section__text">
                O exercício de hoje é o seguinte, tem várias caixas, mas elas
                parecem meio sem-graça e apertadas, use os conhecimentos
                adquiridos para criar um respiro para elas e deixar a visão um
                pouco mais agradável.
              </p>

              <client-only>
                <prism-editor
                  v-model="code"
                  :code="code"
                  :line-numbers="true"
                  language="css"
                ></prism-editor>
              </client-only>
            </AppSectionContent>
          </AppSection>

          <div id="exercise">
            <style ref="style"></style>
            <div class="box">Box 01</div>
            <div class="box">Box 02</div>
            <div class="box">Box 03</div>
            <div class="box">Box 04</div>
            <div class="box">Box 05</div>
          </div>
        </AppSectionContent>
      </AppSection>
    </article>
  </main>
</template>

<script>
import AppSection from '~/components/AppSection'
import AppSectionContent from '~/components/AppSectionContent'
// import AppCardList from '~/components/AppCardList'
// import AppCard from '~/components/AppCard'
// import AppButton from '~/components/AppButton'

export default {
  name: 'Lesson05',
  components: {
    AppSection,
    AppSectionContent
  },
  data() {
    return {
      code: `
#exercise {
  background: #333;
  padding: 20px;
}

.box {
  /*
    faz com que o elemento
    ocupe apenas o espaço
    do seu conteúdo e adiciona
    5px de margin-right no
    elemento
  */
  display: inline-block;
  margin-right: -5px;
  background: #eee;
}
      `
    }
  },
  watch: {
    code() {
      // eslint-disable-next-line no-console
      this.$refs.style.innerHTML = this.code
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    this.$refs.style.innerHTML = this.code
  }
}
</script>

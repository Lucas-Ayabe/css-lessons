<template>
  <main class="main">
    <article class="container">
      <app-section>
        <app-section-content>
          <h2 class="section__title">Dimensões</h2>
          <p class="section__text">
            Agora iremos trabalhar com dimensões no CSS, afinal já vimos como
            alterar as cores, controlar os espaçamentos então agora iremos
            trabalhar com a altura e a largura das coisas.
          </p>
        </app-section-content>
      </app-section>

      <app-section>
        <app-section-content>
          <h2 class="section__title">Largura e Altura</h2>
          <p class="section__text">
            As propriedades que controlam a largura e a altura dos elementos
            como se pode deduzir são <code>width</code> e
            <code>height</code> respectivamente. Nós usamos elas com os valores
            que foram explicados anteriormente como px, em e vw etc. Ex:
          </p>

          <!-- prettier-ignore -->
          <prism language="css">/* A classe abaixo define que a largura é 100% e a altura é 150px */
.half-of-screen {
  width: 100%;
  height: 150px;
  background: #3ad;
}</prism>
          <div id="example-01">
            <div style="width:100%; height: 150px; background: #3ad;"></div>
          </div>
        </app-section-content>
      </app-section>

      <app-section>
        <app-section-content>
          <h2 class="section__title">Dimensões minímas</h2>
          <p class="section__text">
            Ás vezes queremos garantir que algo vai ter no mínimo uma certa
            dimensão e depois disso se precisar que essa dimensão pode aumentar
            quanto precisar. Veja o layout abaixo:
          </p>

          <br />

          <img
            style="max-width: 100%;"
            src="~/static/images/traveler-header.png"
            alt=""
          />

          <br />

          <p class="section__text">
            Nesse site, o cabeçalho ocupa 100% da tela, porém e se por algum
            motivo tivessemos mais conteúdo do que só o titulo, por exemplo um
            texto descritivo, e esse texto seja muito grande tal que ele
            ultrapasse o tamanho total da tela.
          </p>

          <p class="section__text">
            Isso seria um problema, afinal estouraria a imagem e deixaria todo o
            fluxo do documento estranho, para resolver isso, usamos o
            <code>min-height: 100vh;</code>, desta forma, estariamos dizendo ao
            navegador que pelo menos o banner deve ocupar toda a altura da tela
            mesmo que o conteúdo não ocupe todo esse espaço, porém isso poderia
            ser feito simplesmente com o height: <code>100vh;</code>. O especial
            do min-height neste caso é que se o conteúdo escalar mais do que o
            previsto como em nosso exemplo, simplesmente o banner irá continuar
            crescendo acompanhando o conteúdo já que a regra aqui não é apenas
            ter uma determinada altura, mas sim ter no minímo aquela altura,
            depois disso pode crescer o quanto quiser. Lembrando que o mesmo
            vale para o <code>min-width</code>
          </p>

          <!-- prettier-ignore -->
          <prism language="html">&lt;style&gt;
  .banner-sem-min-height {
    width: 100%;
    height: 150px;
    background: #300;
    color: #f00;
  }

  .banner-com-min-height {
    width: 100%;
    min-height: 150px;
    background: #3ad;
  }

  .block-1 {
    padding: 1em;
    height: 300px;
    background: #400;
    border: 1px solid #f00;
  }

  .block-2 {
    padding: 1em;
    height: 300px;
    background: #040;
    border: 1px solid #0f0;
  }
&lt;/style&gt;

&lt;div class="banner-sem-min-height"&gt;
  &lt;div class="block-1"&gt;
    Eu tenho 300px, não caibo nesse banner e ainda atrapalhei o fluxo do documento :(
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="banner-com-min-height"&gt;
  &lt;div class="block-2"&gt;
    Eu tenho 300px e caibo nesse banner :D
  &lt;/div&gt;
&lt;/div&gt;</prism>

          <div id="example-02">
            <div
              style="position: relative; z-index: 2; width: 100%; height: 150px; background: #400; color: #f00;"
            >
              <div
                style="height: 300px; padding: 1em; border: 1px solid rgb(255, 0, 0);"
              >
                Eu tenho 300px, não caibo nesse banner e ainda atrapalhei o
                fluxo do documento :(
              </div>
            </div>

            <div
              style="position: relative; z-index: 1; width: 100%; min-height: 150px; background: #040; color: #0f0;"
            >
              <div style="height: 300px; padding: 1em; border: 1px solid #0f0;">
                Eu tenho 300px e caibo nesse banner :D
              </div>
            </div>
          </div>
        </app-section-content>
      </app-section>

      <app-section>
        <app-section-content>
          <h2 class="section__title">Dimensões máximas</h2>
          <p class="section__text">
            Este aqui é igual ao de cima, porém aqui a limitação é que o valor
            pode ir crescendo mas não pode passar de um certo ponto.
          </p>

          <p class="section__text">
            As propriedades aqui sem nenhuma surpresa são
            <code>max-width</code> e <code>max-height</code>.
          </p>

          <p class="section__text">
            Um caso muito interessante de uso destes caras é quando estamos
            trabalhando com páginas responsivas, termo esse que veremos mais
            para frente e que basicamente significa que nossas páginas podem se
            adaptar teoricamente a qualquer dispositivo, afinal um celular é
            muito menor que um desktop e por isso temos um espaço muito mais
            limitado para trabalhar.
          </p>

          <p class="section__text">
            Uma classe que eu costumo criar bastante é a
            <code>.container</code>, essa classe tem o intuíto de basicamente
            limitar a largura de tudo dentro do elemento afetado e centralizar
            esse conteúdo. Para que em um dispositivo de 300px de largura não
            tenha um texto com 500px de alrgura, afinal isso quebraria o layout
            e causaria uma barra de rolagem.
          </p>

          <!-- prettier-ignore -->
          <prism language="html">&lt;style>
  .container {
    display: block;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .box {
    background: #333;
    color: #eee;
    padding: 1em;
  }
&lt;/style>

&lt;div class="container box" style="width: 150px;">
  &lt;p>Eu não cheguei no máximo mas tudo bem.&lt;/p>
&lt;/div>

&lt;div class="container box" style="width: 300px;">
  &lt;p>Eu cheguei exatamente no máximo :D&lt;/p>
&lt;/div>

&lt;div class="container box" style="width: 500px;">
  &lt;p>Eu deveria crescer mais, porém fui barrado :(&lt;/p>
&lt;/div></prism>

          <div id="example-03">
            <div
              style="
              display: block;
              width: 150px;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              background: #333;
              color: #eee;
              padding: 1em;
            "
            >
              <p>Eu não cheguei no máximo mas tudo bem.</p>
            </div>

            <div
              style="
              margin-top: 1em;
              display: block;
              width: 300px;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              background: #333;
              color: #eee;
              padding: 1em;
            "
            >
              <p>Eu cheguei exatamente no máximo :D</p>
            </div>

            <div
              style="
              margin-top: 1em;
              display: block;
              width: 500px;
              max-width: 300px;
              margin-left: auto;
              margin-right: auto;
              background: #333;
              color: #eee;
              padding: 1em;
            "
            >
              <p>Eu deveria crescer mais, porém fui barrado :(</p>
            </div>
          </div>
        </app-section-content>
      </app-section>

      <app-section>
        <app-section-content>
          <h2 class="section__title">Exercício</h2>
          <p class="section__text">
            Este conteúdo é bem simples então o exercício aqui é apenas deixar a
            div com um height que ocupe metade da altura total da tela e o width
            que ocupe sempre metade do lado(largura ou altura) com o maior
            valor.
          </p>

          <client-only>
            <prism-editor
              v-model="code"
              :code="code"
              :line-numbers="true"
              language="html"
            ></prism-editor>
          </client-only>

          <div ref="exercise1" class="box"></div>
        </app-section-content>
      </app-section>
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
  name: 'Lesson06',
  components: {
    AppSection,
    AppSectionContent
  },
  data() {
    return {
      code: `<style>
  .texto {
    display: block;
    color: #eee;
    background: #333;
    padding: 1em;
    margin: 10px 0;
  }
</style>

<span class="texto">Texto</span>`
    }
  },
  watch: {
    code() {
      // eslint-disable-next-line no-console
      this.$refs.exercise1.innerHTML = this.code
    }
  },
  mounted() {
    this.$refs.exercise1.innerHTML = this.code
  }
}
</script>

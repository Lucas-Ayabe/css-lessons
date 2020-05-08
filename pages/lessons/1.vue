<template>
  <main class="main">
    <article class="container">
      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">Introdução</h1>
          <p class="section__text">
            Agora que finalizamos o básico de HTML, vamos falar de CSS(cascade
            stylesheets), as famosas folhas de estilo CSS.
          </p>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">Sintaxe</h1>
          <p class="section__text">
            Então nada mais justo que começar pelo começo, então vamos de
            sintaxe.
          </p>

          <p class="section__text">
            A sintaxe do CSS é extremamente simples, como pode ver no exemplo
            abaixo, você só diz pro CSS quem você vai estilizar, através do
            <b>seletor</b>, abre chaves e dentro coloca uma <b>propriedade</b> e
            dai após o dois pontos, coloca qual o <b>valor</b> dessa
            propriedade.
          </p>

          <p class="section__text">
            Agora vamos brincar com o exemplo abaixo, na verdade, ele é uma
            caixa de texto, estilizada, então é possível alterar o seu conteúdo.
            Logo, vamos estilizar o texto "Box" localizado abaixo da caixa de
            texto.
          </p>
          <p class="section__text">
            Esse texto, na verdade é uma div com a class box, então a primeira
            coisa que você deve fazer é trocar a palavra seletor por .box,
            depois a palavra propriedade por color e por último a palavra valor
            por red. Se o texto ficou vermelho parabéns você estilizou seu
            primeiro elemento com CSS.
          </p>

          <client-only>
            <prism-editor
              v-model="code"
              :code="code"
              :line-numbers="true"
              language="css"
            ></prism-editor>
          </client-only>

          <div class="box">
            <style ref="style"></style>
            Box
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
  name: 'Lesson01',
  components: {
    AppSection,
    AppSectionContent
  },
  data() {
    return {
      code: 'seletor { propriedade: valor; }'
    }
  },
  watch: {
    code() {
      // eslint-disable-next-line no-console
      this.$refs.style.innerHTML = this.code
    }
  }
}
</script>

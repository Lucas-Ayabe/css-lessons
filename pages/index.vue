<template>
  <main class="main">
    <article class="container">
      <AppSection reverse half align="center">
        <AppSectionContent>
          <h1 class="section__title">Olá, Bem vindo(a) e {{ period }}</h1>
          <p class="section__text">
            Este site foi criado com o intuito de ajudar seu criador(vulgo eu
            que vos escrevo) a ensinar CSS.
          </p>
          <p class="section__text">
            Para se aproveitar bem este site é bem simples, apenas vá para a
            página de aulas, localizada no menu e escolher a aula que deseja
            ler.
          </p>

          <AppButton to="/lessons" raised rounded class="section__button"
            >Vamos lá</AppButton
          >
        </AppSectionContent>

        <AppSectionContent>
          <img
            style="max-width: 35vmax"
            src="~/static/images/welcome.svg"
            alt="Imagem de Bem vindo(a)"
          />
        </AppSectionContent>
      </AppSection>
    </article>
  </main>
</template>

<script>
import AppSection from '~/components/AppSection'
import AppSectionContent from '~/components/AppSectionContent'
import AppButton from '~/components/AppButton'
export default {
  name: 'Index',
  components: {
    AppSection,
    AppSectionContent,
    AppButton
  },
  computed: {
    period() {
      const now = new Date()
      const period = now.getHours()

      if (period >= 0 && period <= 5) {
        return 'boa madrugada'
      } else if (period >= 6 && period <= 11) {
        return 'bom dia'
      } else if (period >= 12 && period <= 18) {
        return 'boa tarde'
      } else {
        return 'boa noite'
      }
    }
  }
}
</script>

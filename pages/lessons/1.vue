<template>
  <main class="main">
    <article class="container">
      <AppSection half align="start">
        <AppSectionContent>
          <h1 class="section__title">Aulas</h1>
          <p class="section__text">
            Aqui se encontram as aulas para se ver, apenas clique no card com a
            que quer acessar e pronto.
          </p>
          <img
            class="section__image -vertical"
            src="~/static/images/placeholders.svg"
            alt=""
          />
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
  }
}
</script>

<template>
  <main class="main">
    <article class="container">
      <app-section align="center">
        <app-section-content>
          <h1 class="section__title">Lições</h1>
        </app-section-content>
      </app-section>
    </article>
  </main>
</template>

<script>
import AppSection from '~/components/AppSection'
import AppSectionContent from '~/components/AppSectionContent'
export default {
  name: 'Index',
  components: {
    AppSection,
    AppSectionContent
  }
}
</script>

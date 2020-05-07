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

        <AppSectionContent>
          <h1 style="margin-left: 20px;" class="section__title">Lista</h1>
          <app-card-list vertical>
            <nuxt-link
              v-for="lesson in lessons"
              :key="lesson.id"
              :to="`/lessons/${lesson.id}`"
            >
              <app-card outline hoverable class="card-list__item">
                <div class="card__body">
                  <h3 class="card__title">
                    Aula 0{{ lesson.id }} - {{ lesson.title }}
                  </h3>
                  <p class="card__text">{{ lesson.desc }}</p>
                  <app-button :to="`/lessons/${lesson.id}`" rounded raised
                    >Ir para a aula</app-button
                  >
                </div>
              </app-card>
            </nuxt-link>
          </app-card-list>
        </AppSectionContent>
      </AppSection>
    </article>
  </main>
</template>

<script>
import AppSection from '~/components/AppSection'
import AppSectionContent from '~/components/AppSectionContent'
import AppCardList from '~/components/AppCardList'
import AppCard from '~/components/AppCard'
import AppButton from '~/components/AppButton'

export default {
  name: 'Index',
  components: {
    AppSection,
    AppSectionContent,
    AppCardList,
    AppCard,
    AppButton
  },
  data() {
    return {
      lessons: [
        {
          id: 1,
          title: 'Introdução',
          desc: 'Nessa aula iremos ver uma introdução sobre CSS.'
        },
        {
          id: 2,
          title: 'Introdução',
          desc: 'Nessa aula iremos ver uma introdução sobre CSS.'
        },
        {
          id: 3,
          title: 'Introdução',
          desc: 'Nessa aula iremos ver uma introdução sobre CSS.'
        },
        {
          id: 4,
          title: 'Introdução',
          desc: 'Nessa aula iremos ver uma introdução sobre CSS.'
        },
        {
          id: 5,
          title: 'Introdução',
          desc: 'Nessa aula iremos ver uma introdução sobre CSS.'
        }
      ]
    }
  }
}
</script>

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
    // TODO lesson - dimensões(width, height, min e max)
    // TODO lesson - positions
    // TODO lesson - display
    // TODO lesson - pseudo-classes e pseudo-elementos
    // TODO lesson - opacidade, bordas arredondades, sombras, gradients
    // TODO lesson - transforms
    // TODO lesson - animações
    // TODO lesson - animações
    // TODO lesson - variaveis
    // TODO lesson - box-model
    // TODO lesson - responsivo
    return {
      lessons: [
        {
          id: 1,
          title: 'Introdução',
          desc: 'Nessa aula iremos ver uma introdução sobre CSS.'
        },
        {
          id: 2,
          title: 'Seletores',
          desc: 'Nessa aula iremos ver sobre seletores.'
        },
        {
          id: 3,
          title: 'Cores',
          desc: 'Nessa aula iremos ver sobre cores no CSS.'
        },
        {
          id: 4,
          title: 'Tipografia',
          desc: 'Nessa aula iremos ver sobre tipografia no CSS.'
        },
        {
          id: 5,
          title: 'Espaçamento',
          desc: 'Nessa aula iremos ver sobre espaçamento no CSS.'
        },
        {
          id: 6,
          title: 'Especifidade e tipos de CSS',
          desc:
            'Nessa aula iremos ver sobre CSS inline, interno, externo e sobre especifidade no CSS.'
        },
        {
          id: 7,
          title: 'Dimensões',
          desc:
            'Nessa aula iremos ver sobre propriedades como width, height e suas variações.'
        }
      ]
    }
  }
}
</script>

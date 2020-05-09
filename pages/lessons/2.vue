<template>
  <main class="main">
    <article class="container">
      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">Seletores e cores</h1>
          <p class="section__text">
            No CSS como visto no exemplo da aula passada, para se começar a
            estilizar um elemento primeiro devemos selecionar o que queremos
            estilizar para depois se escolher quais propriedades e valores que
            iremos adicionar.
          </p>
          <p class="section__text">
            Então vamos conhecer os tipos de seletores, resumidamente são estes:
          </p>
          <ul>
            <li>Simples</li>
            <li>Combinadores</li>
            <li>Pseudo-classes</li>
            <li>Pseudo-elementos</li>
            <li>Atributo</li>
          </ul>

          <p class="section__text">
            Hoje iremos ver somente os simples que são:
          </p>
          <ul>
            <li><a href="#element">Elemento(tag)</a></li>
            <li><a href="#id">Id(#)</a></li>
            <li><a href="#class">Classe(.)</a></li>
            <li><a href="#universal">Universal(*)</a></li>
            <li><a href="#grouping">Agrupamento(,)</a></li>
          </ul>
        </AppSectionContent>
      </AppSection>

      <AppSection id="element" align="start">
        <AppSectionContent>
          <h1 class="section__title">Elemento</h1>
          <p class="section__text">
            Este seletor significa que você irá estilizar todos os elementos com
            o nome que for passado, basicamente é um seletor de tag:
          </p>
          <client-only>
            <prism-editor
              v-model="element"
              :code="element"
              :line-numbers="true"
              language="css"
            ></prism-editor>
          </client-only>

          <div id="element-example">
            <style ref="element"></style>

            <h1>(H1) Titulo 1</h1>
            <h1>(H1) Titulo 2</h1>
            <p>
              (p) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              deserunt minima quasi saepe perspiciatis totam culpa pariatur ad,
              magni, accusamus fuga eos. Voluptates aliquid sapiente, nostrum
              dolorem velit officia quo.
            </p>
          </div>
        </AppSectionContent>
      </AppSection>

      <AppSection id="id" align="start">
        <AppSectionContent>
          <h1 class="section__title">Id</h1>

          <p class="section__text">
            Este seletor significa que você irá estilizar todos os elementos com
            o atributo id com um valor em específico, basicamente para se usar
            esse seletor você coloca # + nome-do-id:
          </p>

          <client-only>
            <prism-editor
              v-model="id"
              :code="id"
              :line-numbers="true"
              language="css"
            ></prism-editor>
          </client-only>

          <div id="id-example">
            <style ref="id"></style>

            <h1 id="titulo-exemplo-1">(#titulo-exemplo-1) Titulo 01</h1>
            <h1 id="titulo-exemplo-2">(#titulo-exemplo-2) Titulo 02</h1>
            <p id="texto-exemplo">
              (#texto-exemplo) Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Ex, deserunt minima quasi saepe perspiciatis
              totam culpa pariatur ad, magni, accusamus fuga eos. Voluptates
              aliquid sapiente, nostrum dolorem velit officia quo.
            </p>
          </div>
        </AppSectionContent>
      </AppSection>

      <AppSection id="class" align="start">
        <AppSectionContent>
          <h1 class="section__title">Classe</h1>

          <p class="section__text">
            Este seletor significa que você irá estilizar todos os elementos com
            o atributo classe com um valor em específico, basicamente para se
            usar esse seletor você coloca . + nome-da-classe:
          </p>

          <client-only>
            <prism-editor
              v-model="classes"
              :code="classes"
              :line-numbers="true"
              language="css"
            ></prism-editor>
          </client-only>

          <div id="class-example">
            <style ref="classes"></style>

            <h1 class="e-titulo">(.e-titulo) Titulo 01</h1>
            <h1 class="e-titulo">(.e-titulo) Titulo 02</h1>
            <p class="e-text">
              (.e-text) Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ex, deserunt minima quasi saepe perspiciatis totam culpa
              pariatur ad, magni, accusamus fuga eos. Voluptates aliquid
              sapiente, nostrum dolorem velit officia quo.
            </p>
          </div>
        </AppSectionContent>
      </AppSection>

      <AppSection id="universal" align="start">
        <AppSectionContent>
          <h1 class="section__title">Universal</h1>
          <p class="section__text">
            Este seletor significa que você irá estilizar todos os elementos na
            página, ou seja tudo:
          </p>

          <client-only>
            <prism-editor
              v-model="universal"
              :code="universal"
              :line-numbers="true"
              language="css"
            ></prism-editor>
          </client-only>

          <div id="universal-example">
            <style ref="universal"></style>

            <h1>(h1) Titulo 01</h1>
            <h1>(h1) Titulo 02</h1>
            <p>
              (p) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              deserunt minima quasi saepe perspiciatis totam culpa pariatur ad,
              magni, accusamus fuga eos. Voluptates aliquid sapiente, nostrum
              dolorem velit officia quo.
            </p>
          </div>
        </AppSectionContent>
      </AppSection>

      <AppSection id="grouping" align="start">
        <AppSectionContent>
          <h1 class="section__title">Agrupamento</h1>
          <p class="section__text">
            Este seletor significa que você irá estilizar todos os elementos na
            página, ou seja tudo:
          </p>

          <client-only>
            <prism-editor
              v-model="grouping"
              :code="grouping"
              :line-numbers="true"
              language="css"
            ></prism-editor>
          </client-only>

          <div id="grouping-example">
            <style ref="grouping"></style>

            <h1>(h1) Titulo 01</h1>
            <h1>(h1) Titulo 02</h1>
            <p>
              (p) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              deserunt minima quasi saepe perspiciatis totam culpa pariatur ad,
              magni, accusamus fuga eos. Voluptates aliquid sapiente, nostrum
              dolorem velit officia quo.
            </p>
            <a href="#">(a) link</a>
            <div>(div) div com separação legal</div>
            <button>(button) click me</button>
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
  name: 'Lesson02',
  components: {
    AppSection,
    AppSectionContent
  },
  data() {
    return {
      element: `h1 { color: #000; }
p {
  color: #000;
  font-size: 1em;
}`,
      classes: `.e-titulo { color: #000; }
.e-text {
  color: #000;
  font-size: 1em;
  margin: 0;
}`,
      id: `#titulo-exemplo-1 { color: #000; }
#titulo-exemplo-2 {
  color: #000;
  font-size: 1em;
}
#texto-exemplo {
  color: #000;
  font-size: 1em;
}`,
      universal: `* { color: #000; }`,
      grouping: `h1, p, a, div, button { color: #000; }`
    }
  },
  watch: {
    element() {
      // eslint-disable-next-line no-console
      this.$refs.element.innerHTML = this.element
    },
    classes() {
      // eslint-disable-next-line no-console
      this.$refs.classes.innerHTML = this.classes
    },
    id() {
      // eslint-disable-next-line no-console
      this.$refs.id.innerHTML = this.id
    },
    universal() {
      // eslint-disable-next-line no-console
      this.$refs.universal.innerHTML = this.universal
    },
    grouping() {
      // eslint-disable-next-line no-console
      this.$refs.grouping.innerHTML = this.grouping
    }
  }
}
</script>

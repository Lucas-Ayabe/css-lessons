<template>
  <main class="main">
    <article class="container">
      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">Especifidade e tipos de CSS</h1>

          <AppSection>
            <AppSectionContent>
              <h2 class="section__title">Inline</h2>
              <p class="section__text">
                Dentre os vários atributos de HTML temos um chamado style, que
                serve para usar CSS em uma TAG em específico, por exemplo se
                quisermos estilizar uma TAG em específico:
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="html">
&lt;span>Span 1&lt;/span>
&lt;span style="color: #f00">Span 2&lt;/span>
&lt;span>Span 3&lt;/span>
                </prism>
              </client-only>

              <p class="section__text">
                Neste exemplo, apenas o span com o texto Span 2 ficará vermelho,
                note que tem algo de diferente do que estivemos fazendo até
                agora, sim está faltando o seletor, afinal se estamos usando o
                style em um elemento, não precisamos de um seletor já que ele é
                o próprio seletor.
              </p>
            </AppSectionContent>
          </AppSection>

          <AppSection>
            <AppSectionContent>
              <h2 class="section__title">Interno</h2>
              <p class="section__text">
                No exemplo anterior vimos que não usamos seletores CSS, pois o
                próprio elemento simboliza o seletor, então onde aplicamos o CSS
                como havíamos aprendido?
              </p>

              <p class="section__text">
                A resposta para isso é usando uma TAG do HTML chamada style,
                onde basicamente podemos escrever CSS que pode ser interpretado
                pelo navegador como no exemplo a seguir:
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="html">
&lt;style>
    span { color: #ff0; }
&lt;/style>

&lt;span>Span 1&lt;/span>
&lt;span style="color: #f00">Span 2&lt;/span>
&lt;span>Span 3&lt;/span>
                </prism>
              </client-only>

              <p class="section__text">
                Neste exemplo, estilizamos todos os span com a for verde com
                excessão do que estava vermelho no exemplo anterior, mas por que
                isso acontece?
              </p>

              <p class="section__text">
                Isso acontece, pois o CSS precisa decidir qual estilização usar
                em cenários onde as regras colidem.
              </p>

              <p class="section__text">
                Só que se no estilo interno os span tem a cor verde, mas no span
                com o atributo style está decidido que a cor dele é vermelho,
                então como o CSS escolhe quem merece prioridade?
              </p>

              <p class="section__text">
                Basicamente o critério usado pelo CSS para isso é a
                especificidade, a ordem de quem tem menos prioridade para quem
                tem mais é:
              </p>

              <ul>
                <li>seletores de atributo (1)</li>
                <li>seletores de classe (10)</li>
                <li>seletores atributo (10)</li>
                <li>seletores de pseudo-classe (10)</li>
                <li>seletores de id (100)</li>
              </ul>
            </AppSectionContent>
          </AppSection>

          <AppSection>
            <AppSectionContent>
              <h2 class="section__title">Externo</h2>
              <p class="section__text">
                Legal, descobrimos que podemos estilizar os elementos inserindo
                o CSS diretamente na TAG que queremos estilizar (inline), mas
                isso é meio limitado, pois daria muito trabalho de estilizar
                todos os span por exemplo, já que teríamos que escrever o mesmo
                style em todos as tags span, e Ainda teríamos o problema dessas
                tags irem aumentando.
              </p>

              <p class="section__text">
                Portanto, usamos uma solução mais inteligente que seleciona
                todos os span da página, independente de quantos tiverem,
                através dos seletores CSS que são possíveis de se colocar em uma
                TAG style, ou seja, embutindo esses estilos de maneira interna,
                porém essa abordagem tem uma falha, e se quiséssemos utilizar os
                estilos em mais de uma página, afinal um site pode ter infinitas
                páginas e seria um caos se toda vez que criássemos uma página
                nova ter que copiar e colar os estilos toda vez e pior ainda
                caso tivéssemos que mudar esses estilos alguma hora, então como
                podemos resolver esse problema?
              </p>
              <p class="section__text">
                A resposta para isso é criar um arquivo externo que contém todo
                o nosso CSS e importar ele em todas as páginas por exemplo, mas
                como faríamos isso?
              </p>
              <p class="section__text">
                Primeiro imagine a seguinte estrutura de pastas:
              </p>

              <ul>
                <li>/meu-site</li>
                <ul>
                  <li>./css</li>
                  <ul>
                    <li>styles.css</li>
                  </ul>
                  <li>index.html</li>
                </ul>
              </ul>

              <p class="section__text">
                Sim, para começar criamos um arquivo com a extensão .css -
                chamado styles.css, que contém todo os nossos códigos CSS que
                teríamos colocado nas tags style anteriormente - e para deixar
                mais organizado colocamos ele em uma pasta chamada CSS.
              </p>
              <p class="section__text">
                A seguir, importamos esse arquivo que contém nossos estilos em
                nosso arquivo index.html da seguinte maneira:
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="html">
&lt;html>
    &lt;head>
        &lt;title>Meu site&lt;/title>
        &lt;meta charset="utf-8" />
        &lt;link rel="stylesheet" href="css/styles.css" />
    &lt;/head>
    &lt;body>
        &lt;!-- O código HTML do meu site... -->
    &lt;/body>
&lt;/html>
                </prism>
              </client-only>

              <p class="section__text">
                Explicando o código acima, geralmente importamos os estilos
                dentro da tag head para que sejam carregados antes da página
                começar a ser rendenizada e para definir que estamos importando
                um arquivo CSS, usamos a TAG link, que é uma TAG inline e
                precisa de dois atributos para funcionar, o rel que diz para o
                HTML que tipo de recurso estamos importamos e por isso no
                exemplo, ele possui o valor stylesheet, pois estamos importando
                uma folha de estilo e o href que assim como na TAG a, define
                onde o nosso arquivo styles.css está localizado, podendo também
                fazer referências a links externos como por exemplo:
              </p>

              <client-only>
                <!-- prettier-ignore -->
                <prism language="html">&lt;link rel="stylesheet" href="https://meu-site.com.br/style.css" /></prism>
              </client-only>

              <p class="section__text">
                E com isso podermos utilizar os mesmos estilos em qualquer
                página nova apenas necessitando que coloquemos a TAG link
                apontando para onde nosso CSS está.
              </p>

              <p class="section__text">
                Essa solução é muito boa, mas e se tivermos os mesmos seletores
                só que em um estilo externo e em um estilo interno, como ficaria
                a especifidade de cada um? A ordem fica assim:
              </p>

              <ul>
                <li>externo (1)</li>
                <li>interno (2)</li>
              </ul>

              <p class="section__text">
                Mas isso ainda não responde a questão dos estilos inline do
                exemplo passado, afinal eles nem ao menos tem seletores, então
                para responder isso, vou modificar a ordem anterior:
              </p>

              <ul>
                <li>externo (1)</li>
                <li>interno (2)</li>
                <li>inline (3)</li>
              </ul>

              <p class="section__text">
                Assim os estilos inline tem mais prioridade que todo o resto,
                seguido dos internos que tem prioridade sobre os externos. E
                para decidir quem tem mais prioridade entre os seletores desses
                tipos de estilos usamos a primeira ordem apresentada. Para
                aprender mais sobre
                <a
                  href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/Specificity"
                  >leia este artigo</a
                >
                e
                <a href="https://www.maujor.com/tutorial/especificidade.php"
                  >este também.</a
                >
              </p>
            </AppSectionContent>
          </AppSection>

          <AppSection>
            <AppSectionContent>
              <h2 class="section__title">Exercício 1</h2>
              <p class="section__text">
                Tente fazer com que a cor do texto fique vermelha, sem alterar
                os estilos atuais, você pode adicionar outros atributos e
                quantas classes quiser ao span, mas não pode retirar a classe
                .texto já existente no código do exercício.
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

              <h2 class="section__title">Exercício 2</h2>
              <p class="section__text">
                Tente recriar o exemplo dado na explicação de CSS externo e
                tente adivinhar outras páginas para que se possa ver o poder do
                CSS externo.
              </p>
            </AppSectionContent>
          </AppSection>
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
  name: 'Lesson06',
  components: {
    AppSection,
    AppSectionContent
  },
  data() {
    return {
      code: `
<style>
    .texto {
        display: inline-block;
         color: #0f0;
         background: #333;
         padding: 10px 20px;
         margin: 10px 0;
     }
</style>

<span class="texto">Texto</span>
      `
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

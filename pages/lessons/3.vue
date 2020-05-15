<template>
  <main class="main">
    <article class="container">
      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">Cores</h1>
          <p class="section__text">
            Cores no CSS é um assunto bem simples e existem várias propriedades
            no CSS que fazem uso de cores como a background, color, border e
            etc.
          </p>

          <p class="section__text">
            Então hoje vamos aprender sobre duas delas, a background-color e a
            color, além dos sistemas de cores utilizados no CSS.
          </p>

          <section>
            <h2>Nome</h2>
            <p class="section__text">
              No CSS há varias maneiras de se representar cores, por exemplo
              podemos deixar a cor de um texto azul através do seguinte código:
            </p>
            <prism language="css">p { color: blue; }</prism>
            <p class="section__text">
              Após ver este exemplo podemos notar que um dos jeitos mais fáceis
              é simplesmente usar o nome da cor em inglês como: red, green,
              blue, yellow e etc. Como existem muitas cores vou deixar uma
              tabela com as cores e seus nomes que você pode acessar
              <a href="https://www.w3schools.com/colors/colors_names.asp"
                >clicando aqui.</a
              >
            </p>
          </section>

          <section>
            <h2>Hexadecimal</h2>
            <p class="section__text">
              Só que utilizar os nomes das cores pode ser algo um pouco limitado
              já que só existem nomes para 140 delas, então vamos ver outro
              sistema de representação das cores, o famoso hexadecimal, que é
              basicamente os códigos das cores que o computador entende. Neste
              sistema as cores são representadas por números inteiros
              hexadecimais, sendo cada 2 digitos a quantidade de red, green,
              blue dessa cor, por exemplo:
            </p>
            <prism language="css">p { color: #0000ff; }</prism>
            <p class="section__text">
              Neste exemplo podemos ver a representação do azul do exemplo
              anterior só que em hexadecimal.
            </p>
          </section>

          <section>
            <h2>RGB</h2>
            <p class="section__text">
              Pegando o gancho do tópico anterior, talvez você tenha ficado
              confuso(a) quando eu falei que cada par de dígitos no hexadecimal
              equivalia a uma certa quantidade de red, green e blue daquela cor.
            </p>
            <p class="section__text">
              Mas o que esses red, green e blue significam?<br />
              A resposta para isso é que um dos sistemas mais clássicos para se
              representar uma cor é o RGB(red, green, blue), pois cores são
              essencialmente luz, você só pode ver uma cor, porque quando a luz
              reflete nos objetos, eles absorvem uma parte dela e por isso as
              frequencias não absorvidas são interpretadas por nós humanos como
              cores.
            </p>
            <p class="section__text">
              Então o sistema RGB se aproveita que as cores exibidas de um
              aparelho eletronico são luz e usa como cores primárias o vermelho,
              o verde e o azul para formar todo o resto(sim, as verdadeiras
              cores primárias não são o azul, vermelho e amarelo, pelo menos não
              no sistema RGB).
            </p>
            <p>
              Então assim como quando misturamos o azul com vermelho e obtemos o
              roxo naquelas aulas de artes no primário, no sistema RGB indicamos
              quanto de cada cor primária queremos e isso forma uma nova cor,
              então novamente o azul do exemplo anterior é representado no RGB
              como:
            </p>
            <prism language="css">p { color: rgb(0, 0, 255); }</prism>
            <p class="section__text">
              Note que nesse sistema fica mais claro que usamos um "azul puro",
              pois usamos 0 de vermelho e verde, ou seja nada e 255 de azul, mas
              por que 255?
            </p>
            <p class="section__text">
              A resposta para isso é simples, no sistema RGB as quantidades de
              cores podem ser representadas usando ou porcentagem ou um número
              inteiro entre 0 e 255.
            </p>
          </section>

          <section>
            <h2>HSL</h2>
            <p class="section__text">
              Então até agora percebemos que cada sistema serve para representar
              a mesma coisa de formas diferentes e uns são mais intuitivos do
              que outros e isso não é diferente no HSL(Hue, Saturation e
              Lightness), nesse aqui é bem mais intuitio de se colocar uma cor,
              pois você coloca um número de graus(Hue) que representa a cor que
              você quer no circulo cromático com todas as cores, um número que
              representa quanto dessa cor você quer(saturation) e quanto de luz
              você quer(Lightness), vamos ao exemplo:
            </p>
            <prism language="css">p { color: hsl(240, 100%, 50%); }</prism>
            <p class="section__text">
              Neste exemplo temos 240 que é a cor azul no ciclo cromático, 100%
              de saturação ou seja a cor na sua quantidade mais pura e 50% de
              luz não pendendo nem para o preto e nem para o branco.
            </p>
          </section>

          <section>
            <h2>background-color</h2>
            <p class="section__text">
              A propriedade background-color serve para definir uma cor de fundo
              de um elemento.
            </p>
          </section>

          <section>
            <h2>color</h2>
            <p class="section__text">
              A propriedade color serve para definir a cor do texto de um
              elemento.
            </p>
          </section>

          <p class="section__text">
            Agora que você aprendeu sobre como representar uma cor e como usar
            essa cor no CSS que tal um pouco de prática, use o exemplo a seguir
            para brincar o quanto quiser, mude a cor do texto, a cor do fundo,
            teste a até ficar satisfeito(a):
          </p>

          <client-only>
            <prism-editor
              v-model="code"
              :code="code"
              :line-numbers="true"
              language="css"
            ></prism-editor>
          </client-only>
          <div id="demo" style="margin-top: 20px; text-align: center;">
            <div class="box">
              <style ref="style"></style>
              Box
            </div>
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
  name: 'Lesson03',
  components: {
    AppSection,
    AppSectionContent
  },
  data() {
    return {
      code: `.box {
  background-color: #333;
  color: #eee;

  /* Estilos extras */
  display: inline-block;
  text-align: center;
  line-height: 100px;
  width: 100px;
  height: 100px;
  vartical-align: middle;
}`
    }
  },
  watch: {
    code() {
      this.$refs.style.innerHTML = this.code
    }
  },
  mounted() {
    this.$refs.style.innerHTML = this.code
  }
}
</script>

<style>
.code {
  color: #f00;
}
</style>

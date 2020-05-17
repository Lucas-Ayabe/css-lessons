<template>
  <main class="main">
    <article class="container">
      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">Tipografia</h1>
          <p class="section__text">
            Aqui um ponto muito importante, afinal a tipografia é 80% do design
            web. Então temos muitas propriedades que atuam em um texto, vamos
            conhece-las a seguir:
          </p>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">font-family</h1>
          <p class="section__text">
            Até agora usamos a mesma fonte para tudo, então que tal mudar um
            pouco?.
          </p>
          <p class="section__text">
            É basicamente isso que a propriedade font-family faz, ela serve para
            definir uma familia de fontes para um elemento. Ex:
          </p>
          <client-only>
            <prism language="css"
              >.box { font-family: Roboto, arial, sans-serif; }</prism
            >
          </client-only>

          <p class="section__text">
            Note que a última fonte que passada se chamava sans-serif. Ela na
            verdade não é o nome de uma fonte e sim um valor especial da
            propriedade font-family.
          </p>
          <p class="section__text">
            Porque a propriedade font-family funciona assim: se a fonte Roboto
            existir ele usa a fonte Roboto, se ela não existir, ele usa a arial,
            mas e se nenhuma dessas existir?
          </p>
          <p class="section__text">
            É por isso que o último valor é sans-serif, isso significa que se
            nenhuma das anteriores existir, ele vai usar qualquer fonte do tipo
            sem serifa que o computador tiver.
          </p>
          <p class="section__text">Os valores especiais são:</p>
          <ul>
            <li>sans-serif(sem serifa)</li>
            <li>serif(serifada)</li>
            <li>monospace(mono espaçada)</li>
            <li>cursive(cursiva)</li>
            <li>fantasy(fantasia)</li>
          </ul>

          <p class="section__text">Agora o que são esses valores especiais?</p>
          <p class="section__text">
            São as categorias que uma fonte pode pertencer:
          </p>
          <dl class="section__text">
            <dt>Serifada</dt>
            <dd>
              São aquelas fontes que tem alguns adereços. Ex:
              <span style="font-family: 'times new roman', serif;"
                >Eu tenho serifas</span
              >
            </dd>

            <dt>Sem Serifa</dt>
            <dd>
              São aquelas fontes sem as serifas citadas no exemplo anterior. Em
              geral, são mais moderna, como a Arial por exemplo. Ex:
              <span style="font-family: Arial, sans-serif;"
                >Eu não tenho serifas</span
              >
            </dd>

            <dt>Mono espaçada</dt>
            <dd>
              São aquelas fontes que tem a mesma altura e largura nos
              caracteres, tipo as fontes de editores de texto, terminais e etc.
              Ex:
              <span style="font-family: consolas, monospace;"
                >Eu tenho o mesmo tamanho que a letra o.</span
              >
            </dd>

            <dt>Cursiva</dt>
            <dd>
              São aquelas fontes que imitam a escrita humana. Ex:
              <span style="font-family: 'Pacifico', cursive;"
                >Eu pareço escrita a mão.</span
              >
            </dd>

            <dt>Fantasia</dt>
            <dd>
              Mais conhecida como decorativa, a fonte fantasia é aquela que não
              se encaixa em nenhuma outra categoria, tipo aquelas fontes da logo
              do star wars, de terror e etc. Ex:
              <span style="font-family: fantasy;"
                >Eu nem sei como pareço para você.</span
              >
            </dd>
          </dl>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">font-size</h1>
          <p class="section__text">
            Podemos alterar o tamanho da fonte também. Ex:
          </p>
          <client-only>
            <prism language="css">.box { font-size: 16pt; }</prism>
          </client-only>
          <p class="section__text">
            Note que usei a unidade de pontos igual no word, mas no CSS a muitas
            outras unidades de medida. Que são divididas em dois tipos:
          </p>
          <dl>
            <dt>absolutas</dt>
            <dd>
              O tamanho definido não muda. Elas são:
              <ul>
                <li>cm - centímetro: 96px/2.54;</li>
                <li>mm - milímetro: 1/10cm;</li>
                <li>q - 1/4 do milímetro: 1/40cm;</li>
                <li>in - polegada: 2,54cm = 96px;</li>
                <li>pc - pica: 12 points ou 1/6in;</li>
                <li>pt - point(aquele do word): 1/72in;</li>
                <li>px - pixel: 1/96in;</li>
              </ul>
            </dd>

            <dt>relativas</dt>
            <dd>
              O tamanho é relativo a alguma coisa. Ex:
              <ul>
                <li>
                  em: ...ao tamanho da fonte ('font-size') do elemento no qual a
                  unidade é declarada;
                </li>
                <li>ex: ...a altura da letra x (xis) da fonte herdada;</li>
                <li>
                  ch: ...a largura acrescida do espaçamanto em volta do número 0
                  (zero) da fonte do elemento no qual a unidade é declarada;
                </li>
                <li>
                  rem: ...ao tamanho da fonte ('font-size') do elemento raiz do
                  documento.
                </li>
                <li>
                  vw: um número em % em relação a largura da tela. Ex: 1vw = 1%
                  da largura da tela.
                </li>
                <li>vh: mesma coisa que o vw, só que com altura.</li>
                <li>
                  vmin: mesma coisa dos anteriores, só que escolhe o menor entre
                  vw e vh.
                </li>
                <li>
                  vmax: mesma coisa do de cima, mas escolhe o maior ao invés do
                  menor.
                </li>
                <li>
                  %(porcentagem): % em relação ao valor da largura do elemento
                  pai. Ex: 100px(no elemento pai) -> 50% (50px no elemento
                  filho).
                </li>
              </ul>
            </dd>
          </dl>
          <p class="section__text">
            As descrições acima foram retiradas do site do Maujor, para mais
            informações
            <a
              href="https://www.maujor.com/tutorial/unidades-de-medidas-css.php"
              >leia a postagem de onde tirei essas explicações</a
            >.
          </p>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">font-style</h1>
          <p class="section__text">
            Deixa a fonte em italico ou não. Seus valores são:
          </p>
          <ul>
            <li>normal: valor padrão, sem italico</li>
            <li>italic: com italico</li>
            <li>
              oblique: com italico obliquo, pois algumas fontes possuem este
              tipo de italico, sendo um italico mais inclinado.
            </li>
          </ul>
          <client-only>
            <prism language="css">.box { font-style: italic; }</prism>
          </client-only>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">font-variation</h1>
          <p class="section__text">
            Deixa a fonte em small-caps ou não. Seus valores são:
          </p>
          <ul>
            <li>normal: valor padrão, sem small-caps</li>
            <li>
              small-caps: se a fonte possuir o small-caps, ele será aplicado.
              Small caps é quando a fonte tem os mesmo carateres maiuscúlos no
              caracteres minusculos e com o tamanho dos caracteres minusculos
              também.
            </li>
          </ul>
          <client-only>
            <prism language="css">.box { font-variation: small-caps; }</prism>
          </client-only>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">font-weight</h1>
          <p class="section__text">
            Define o peso da fonte. Seus valores são:
          </p>
          <ul>
            <li>lighter: fonte finissíma</li>
            <li>light: fonte fina</li>
            <li>normal: valor padrão</li>
            <li>bold: negrito</li>
            <li>bolder: negrito mais grosso</li>
            <li>100: thin (ultra fino)</li>
            <li>200: extra light (extra fino)</li>
            <li>300: light ( fino)</li>
            <li>400: normal (normal)</li>
            <li>500: medium (negrito bem leve)</li>
            <li>600: semibold (quase negrito)</li>
            <li>700: bold (negrito)</li>
            <li>800: extra bold (negrito extra)</li>
            <li>900: black (ultra grosso)</li>
          </ul>
          <client-only>
            <prism language="css">.box { font-weight: 700; }</prism>
          </client-only>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">letter-spacing</h1>
          <p class="section__text">
            cria espaçamento entre letras tipo isso aqui: l e t t e r. Ex:
          </p>

          <prism language="css">.box { letter-spacing: 1px; }</prism>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">line-height</h1>
          <p class="section__text">
            Define o tamanho da linha. Ex:
          </p>

          <prism language="css">.box { line-height: 10px; }</prism>
          <p class="section__text">Pode ter valor fixo</p>
          <!-- prettier-ignore -->
          <prism language="css">
  .box {
    font-size: 10px;
    line-height: 1.4; /* 14px, pois 10px * 1.4 = 14px */
  }
          </prism>
          <p class="section__text">
            Tem um valor de multiplicado pelo proprio font-size
          </p>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">text-align</h1>
          <p class="section__text">
            Define o alinhamento horizontal. Seus valores são:
          </p>
          <ul>
            <li>left(a esquerda)</li>
            <li>center(centralizado)</li>
            <li>right(a direita)</li>
            <li>justify(justificado)</li>
          </ul>
          <prism language="css">.box { text-align: center; }</prism>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">text-decoration</h1>
          <p class="section__text">
            Define o tipo de sublinhado. Seus valores são:
          </p>
          <ul>
            <li>none(sem nada)</li>
            <li>underline(sublinhado)</li>
            <li>overline(sublinhado em cima)</li>
            <li>line-through(sublinhado riscando)</li>
          </ul>
          <prism language="css">.box { text-decoration: underline; }</prism>
          <p class="section__text">
            O jeito mais comum, só um sublinado da cor do texto.
          </p>
          <prism language="css"
            >.box { text-decoration: underline wavy #f00; }</prism
          >
          <div class="section__text">
            O código acima cria um sublinhado vermelho com formato de ondinha.
          </div>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">text-indent</h1>
          <p class="section__text">
            Define quanto de espaço tem na marcação de paragrafo. Ex:
          </p>
          <prism language="css">.box { text-indent: 1ch; }</prism>
          <p class="section__text">Vai gerar algor como:</p>
          <p class="section__text">
            &nbsp; Iniciei o paragrafo<br />Estou em outra linha normalmente<br />Terminei
            o paragrafo.
          </p>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">text-overflow</h1>
          <p class="section__text">
            Caso o texto seja maior que o container dele, em vez de deixar o
            texto vazer, essa propriedade deixa você decidir se quer deixar
            vazar o texto, se quer deixar cortar ou se quer deixar cortar e
            adicionar reticencias(aqueles 3 pontinhos ...). Seus valores são:
          </p>
          <ul>
            <li>clip(só corta o texto)</li>
            <li>ellipsis(corta o texto com ...)</li>
            <li><i>string</i>(corta o texto com o valor que vc digitar)</li>
          </ul>
          <!-- prettier-ignore -->
          <prism language="css">
.box {
  overflow: hidden;
  text-overflow: ellipsis;
}
          </prism>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">text-shadow</h1>
          <p class="section__text">
            Coloca sombra no texto com a seguinte sintaxe: text-shadow: &lt;x>
            &lt;y> &lt;blur> &lt;cor>. Ex:
          </p>
          <prism language="css">.box { text-shadow: 2px 2px 4px #555; }</prism>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">text-transform</h1>
          <p class="section__text">
            Obriga o texto a usar algum estilo tipo tudo maiusculo, tudo
            minusculo, misturado. Ex:
          </p>
          <prism language="css">.box { text-transfom: uppercase; }</prism>
          <ul>
            <li>uppercase(tudo maiúsculo)</li>
            <li>lowercase(tudo minúsculo)</li>
            <li>
              capitalize(Toda primeira letra de uma palavra tem a letra
              maiúscula e o resto minúsculo. Ex: Eu Gosto De Banana.)
            </li>
          </ul>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">white-space</h1>
          <p class="section__text">
            Muda o jeito que o espaço em branco é interpretado. Se você lembrar
            bem no HTML é interpretado apenas 1 espaço e por isso escrever algo
            e colocar 2 espaços, 100 espaços ou 1 espaço não muda nada, porém
            com a propriedade white-space isso pode ser mudado. Ela aceita as
            seguintes propriedades:
          </p>
          <dl>
            <dt>white-space: normal;</dt>
            <dd>
              Padrão igual ao descrito no inicio.
              <div style="white-space: normal; width: 60px; background: #aaa;">
                Olá mundo dei vários espaços.
              </div>
            </dd>

            <dt>white-space: nowrap;</dt>
            <dd>
              Continua ignorando mais de um espaço, mas faz com que ele se
              mantenha em uma linha só mesmo se não houver espaço. Ex:
              <!-- prettier-ignore -->
              <div style="white-space: nowrap; width: 60px; background: #aaa;">Olá mundo

                dei vários espaços.
              </div>
            </dd>
            <dt>white-space: pre;</dt>
            <dd>
              Segue a linha do nowrap, mas agora ele respeita o espaço digitado
              e as puladas de linha.
              <!-- prettier-ignore -->
              <div style="white-space: pre; width: 60px; background: #aaa;">Olá   mundo

                  dei vários espaços.
              </div>
            </dd>

            <dt>white-space: pre-wrap;</dt>
            <dd>
              ele respeita o espaço digitado, as puladas de linha e quebra o
              texto automáticamente caso ele não caiba no container.
              <!-- prettier-ignore -->
              <div style="white-space: pre-wrap; width: 100px; background: #aaa;">Olá   mundo

                  dei vários espaços.
              </div>
            </dd>

            <dt>white-space: pre-line;</dt>
            <dd>
              Respeita somente as quebras de linha, mas mantém a quebra de texto
              automática e continua considerando apenas 1 espaço.
              <!-- prettier-ignore -->
              <div style="white-space: pre-line; width: 100px; background: #aaa;">Olá   mundo

                  dei vários espaços.
              </div>
            </dd>
          </dl>
          <prism language="css">.box { white-space: pre-wrap; }</prism>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h1 class="section__title">word-break</h1>
          <p class="section__text">
            Caso um texto seja tão longo que não caiba em seu container, esta
            propriedade pode fazer com que o texto seja quebrado letra por
            letra. Ex:
          </p>
          <prism language="css">.box { word-break: break-all; }</prism>
          <ul>
            <li>
              break-all(Para previnir overflow, palavra pode quebrar em qualquer
              caracter)
            </li>
            <li>
              break-word(Para previnir overflow, palavra pode ser quebrada em
              qualquer ponto de quebra)
            </li>
            <li>
              keep-all(Quebra de palavra não deveria ser usada para textos
              chineses/japoneses/)(k no ingles)coreanos(CJK). comportamento para
              texto não-CJK é o mesmo que normal.)
            </li>
          </ul>
        </AppSectionContent>
      </AppSection>

      <AppSection align="start">
        <AppSectionContent>
          <h2 class="section__title">Exercício</h2>
          <p class="section__text">
            Agora que você aprendeu todas essas novas propriedades, que tal
            brincar um pouco?
          </p>
          <h3>Exercício 01</h3>
          <p class="section__text">
            O seu primeiro exercício é fazer o texto do editor ter as seguintes
            específicações:
          </p>

          <ul style="margin-bottom: 1rem;">
            <li>
              Tamanho da fonte 2x maior que o tamanho da fonte do documento.
            </li>
            <li>Em negrito</li>
            <li>O espaçamento das letras deve ser 2px</li>
            <li>Deve estar totalmente em caixa-alta(maiúscula)</li>
            <li>Altura de linha de 1.4</li>
            <li>Estar alinhado a esquerda</li>
            <li>Sem a cor cinza de fundo, mas a cor deve estar no texto.</li>
          </ul>

          <h3>Exercício 02</h3>
          <p class="section__text">
            O segundo exercício é criar um titulo de forma livre, de forma
            criativa e utilizando os conhecimentos adiquiridos até aqui.
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
            <span class="box-title">Titulo</span>
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
  name: 'Lesson04',
  components: {
    AppSection,
    AppSectionContent
  },
  data() {
    return {
      code: `
.box {
  background: #333;
  padding: 20px;
}

.box > .box-title {
  background: #eee;
  font-size: 16px;
}
      `
    }
  },
  watch: {
    code() {
      // eslint-disable-next-line no-console
      this.$refs.style.innerHTML = this.code
    }
  },
  mounted() {
    this.$refs.style.innerHTML = this.code
  }
}
</script>

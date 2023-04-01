<script setup lang="ts">
import { NGi, NGrid } from 'naive-ui'
import Riddle from '@/components/TheRiddle.vue'
import img1 from './card-1.jpg'
import img2 from './card-2.jpg'
import img3 from './card-3.jpg'
import img4 from './card-4.jpg'
</script>
<template>
  <n-grid x-gap="12" y-gap="12" :cols="2">
    <n-gi>
      <Riddle
        :image="img1"
        :step="1"
        title="Mit Wem?"
        teaser="In deiner Vergangenheit bist du auf eine Gruppe von Menschen getroffen. Erinnerst du dich noch, wer das war?
      Finde das Codewort heraus!"
        solution="Coac"
        :code="3"
        color="navy"
      >
        Denk an eine Zeit von vor etwa 6 Jahren zurück. Da hast du plötzlich eine Gruppe von
        Menschen kennen gelernt. Es ist wichtig, dass du dich erinnern kannst, du brauchst die
        Vornamen für das Codewort. Sortiere die Vornamen aufsteigend nach Alphabet. Jetzt nimmst du
        jeweils den Buchstaben, der an der Stelle steht, die zur Position des Namens in der eben
        gebildeten Liste passt. Setze diese Buchstaben zusammen, und du erhältst das Codewort.
      </Riddle>
    </n-gi>
    <n-gi>
      <Riddle
        :image="img2"
        :step="2"
        title="Was?"
        teaser="Okay, gut gemacht! Bleiben wir doch noch ein wenig in der Vergangenheit. Es gibt ein weiteres Codewort zu erraten."
        solution="Natur Erleben"
        :code="1"
        color="crimson"
      >
        Es war verrückt: wir haben irgendwie versucht etwas zusammen zu bauen und hatten keinerlei
        Erfahrung, aber jede Menge Bock. Aber wir waren alles Neulinge. Immerhin hatten wir so eine
        Art Kunde, der leider kein Geld für uns hatte, uns aber toll fand. Wie hieß das Projekt, an
        dem wir wenige Monate zusammen gearbeitet haben?
      </Riddle>
    </n-gi>
    <n-gi>
      <Riddle
        :image="img4"
        :step="3"
        title="不可解な"
        teaser="おいしい食べ物
        コードワード?"
        solution="MoschMosch"
        :code="6"
        color="seagreen"
      >
        mmajMmmajM?
      </Riddle>
    </n-gi>
    <n-gi>
      <Riddle
        :image="img3"
        :step="4"
        title="Schöne Zeit!"
        teaser="Ist es nicht toll, wenn man mit lieben Menschen eine schöne Zeit verbringt? Klar! Aber was hat das jetzt noch mit einem Rätsel zu tun?"
        :code="8"
        solution="Cornichons"
        color="black"
      >
        <div class="landscape">
          <pre>
          |
          |
          |
          |
          |
          |
          |
          ▼
        </pre
          >
          <div class="portrait">49.2934512, 6.7940246</div>
        </div>
      </Riddle>
    </n-gi>
  </n-grid>
</template>

<style scoped lang="scss">
.portrait {
  display: none;
}

@media screen and (orientation: portrait) {
  .portrait {
    display: initial;
  }
}
</style>

<script setup lang="ts">
import {NGi, NGrid} from "naive-ui";
import Riddle from "@/components/TheRiddle.vue";
import img1 from "./card-1.jpg"
import img2 from "./card-2.jpg"
import img3 from "./card-3.jpg"
import img4 from "./card-4.jpg"
import {useRiddleStore} from "@/stores/riddle";

const riddleStore = useRiddleStore()
const solve = riddleStore.solve
</script>
<template>

  <n-grid x-gap="12" y-gap="12" :cols="2">
    <n-gi>
      <Riddle :image="img1" step="1" task-description="In deiner Vergangenheit bist du auf eine Gruppe von Menschen getroffen. Erinnerst du dich noch, wer das war?
      Finde das Codewort heraus!" title="Mit Wem?" solution="Coac" code="3"/>
    </n-gi>
    <n-gi>
      <Riddle :image="img2" step="2"/>
    </n-gi>
    <n-gi>
      <Riddle :image="img3" step="3"/>
    </n-gi>
    <n-gi>
      <Riddle :image="img4" step="4"/>
    </n-gi>
  </n-grid>
</template>

<style scoped lang="scss">

</style>

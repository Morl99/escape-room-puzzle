<script setup lang="ts">
import {NButton, NCard, NGi, NGrid, NModal} from "naive-ui";
import card1Image from './card-1.jpg'
import {ref} from "vue";

const showModal1 = ref(false)


</script>
<template>
  <n-modal v-model:show="showModal1">
    <n-card
        style="width: 80vw; height: 80vh;"
        title="Modal"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <template #header-extra>
        Oops!
      </template>
      Content
      <template #footer>
        Footer
      </template>
    </n-card>
  </n-modal>
  <n-grid x-gap="12" :cols="3">
    <n-gi>
      <div class="light-green">
        <n-card title="Mit wem?">
          In deiner Vergangenheit bist du auf eine Gruppe von Menschen getroffen. Erinnerst du dich noch, wer das war?
          Finde das Codewort heraus!
          <template #cover>
            <img :src=card1Image>
          </template>
          <template #footer>
            <div class="footer">
              <n-button @click="showModal1 = true" type="primary">Klick mich!</n-button>
              <div class="step-indicator">1</div>
            </div>
          </template>
        </n-card>
      </div>
    </n-gi>
    <n-gi>
      <div class="green"/>
    </n-gi>
    <n-gi>
      <div class="light-green"/>
    </n-gi>
    <n-gi>
      <div class="green"/>
    </n-gi>
  </n-grid>
</template>

<style scoped lang="scss">
@import "@/assets/vars.scss";

.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}

.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}

.step-indicator {
  border-radius: 50%;
  background: $primary;
  color: white;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  justify-content: space-between;
}
</style>

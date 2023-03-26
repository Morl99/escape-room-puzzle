<template>
  <div>
    <n-card :title="title" class="riddle" :class="status">
      {{ teaser }}
      <template #cover>
        <img :src=image>
      </template>
      <template #footer>
        <div class="footer">
          <n-button @click="showModal = true" type="primary" :disabled="status !== 'next'">
            {{ status === 'solved' ? 'Gelöst :)' : 'Klick mich!' }}
          </n-button>
          <div class="step-indicator">{{ status === 'solved' ? code : step }}</div>
        </div>
      </template>
    </n-card>
    <n-modal v-model:show="showModal" preset="card" :title="title">
      <template #cover>
        <img :src="image">
      </template>

      <p>
        <slot/>
      </p>

      <n-form
          ref="formRef"
          inline
          :label-width="80"
          :model="form"
          :rules="rules"
      >
        <n-form-item path="input">
          <n-input v-model:value="form.input" placeholder="Codewort"/>
        </n-form-item>
        <n-button round type="primary" @click="validate">
          Validate
        </n-button>
      </n-form>
    </n-modal>
  </div>
</template>
<script setup lang="ts">
import {computed, ref} from 'vue'
import type {Status} from '@/stores/riddle'
import {useRiddleStore} from "@/stores/riddle";
import {
  type FormInst,
  type FormItemRule,
  type FormValidationError,
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NModal,
  useMessage
} from 'naive-ui'

const props = defineProps<{
  image: string
  title: string
  teaser: string
  step: number
  code: number
  solution: string
  status: Status
}>()

const showModal = ref(false)
const form = ref({input: ''})
const formRef = ref<FormInst | null>(null)
const message = useMessage()
const riddleStore = useRiddleStore()
const status = computed(() => riddleStore.riddles[props.step - 1])
const rules = {
  input: {
    validator(rule: FormItemRule, value: String) {
      return value === props.solution
    },
    message: ""
  }
}
const validate = (e: MouseEvent) => {
  console.log("test")
  e.preventDefault()
  formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
    if (!errors) {
      message.success('Richtig, du hast das Rätsel gelöst')
      riddleStore.solve(props.step - 1)
      setTimeout(() => showModal.value = false, 3000)
    } else {
      console.log(errors)
      message.error('Falsche Antwort! Denk nochmal drüber nach.')
    }
  })
}
</script>
<style scoped lang="scss">
@import "@/assets/vars.scss";

:global(.n-modal-mask) {
  background-color: rgba(0, 0, 0, 0.8);
}

.riddle {
  height: 45vh;

  &.disabled {
    filter: brightness(50%);
  }

  img {
    height: 195px;
    object-fit: cover;
  }
}

.n-modal {
  img {
    height: 300px;
    object-fit: cover;
  }
}

.step-indicator {
  .solved & {
    background: $primary;
  }

  .next &, .disabled & {
    background: gray;
  }

  border-radius: 50%;
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

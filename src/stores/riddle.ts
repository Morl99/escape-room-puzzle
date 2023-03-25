import {ref, type Ref} from 'vue'
import {defineStore} from 'pinia'

export type Status = "solved" | "next" | "disabled"
export const useRiddleStore = defineStore('riddle', () => {
  const riddles = ref([
    "next",
    "disabled",
    "disabled",
    "disabled"
  ]) as Ref<Array<Status>>

  function solve(number: number) {
    riddles.value[number] = "solved"
    if (number + 1 < riddles.value.length) {
      riddles.value[number + 1] = "next"
    }
  }

  return {solve, riddles}
})

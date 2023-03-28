import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export type Status = 'solved' | 'next' | 'disabled'
export const useRiddleStore = defineStore('riddle', () => {
  const defaultRiddles = ['next', 'disabled', 'disabled', 'disabled'] as Array<Status>
  const riddles = useLocalStorage('riddles', defaultRiddles)

  function solve(number: number) {
    riddles.value[number] = 'solved'
    if (number + 1 < riddles.value.length) {
      riddles.value[number + 1] = 'next'
    }
  }

  return { solve, riddles }
})

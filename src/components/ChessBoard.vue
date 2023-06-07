<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { type Square } from '@/types/square';

export default defineComponent({
  name: 'ChessBoard',
  components: {},
  props: {
    squares: {
      required: true,
      type: Array as PropType<Square[]>
    },
    activeSquares: {
      required: false,
      type: Array as PropType<string[]>
    }
  },
  emits: ['setActive'],
  methods: {
    activateSquare(square: Square) {
      this.$emit('setActive', square);
    },
    squareColor(index: number) {
      const modResult = index % 16 < 8 ? 1 : 0;
      return index % 2 === modResult ? 'dark' : 'light';
    },
    isSquareActive(square: Square) {
      return this.activeSquares?.includes(square.key);
    }
  }
});
</script>

<template>
  <section class="board">
    <button
      v-for="(square, index) in squares"
      :key="square.key"
      class="square"
      :class="[isSquareActive(square) ? 'active' : '', squareColor(index)]"
      @click="activateSquare(square)"
    >{{ square.key }}</button>
  </section>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  aspect-ratio: 1;
}
.square {
  border: none;
  background-color: var(--color-light-square);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: var(--color-text-square);
  outline: none;
}
.square:focus-visible {
  outline: none;
  border: 3px solid var(--app-active-border);
}

.square.dark {
  --color-active-square: var(--color-dark-active-square);
  background-color: var(--color-dark-square);
}

.square:active {
  background-color: var(--color-active-square);
  border: 3px solid var(--app-active-border);
}
.square.active {
  background-color: var(--color-active-square);
}
</style>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Square } from '@/types/square';

export default defineComponent({
  name: 'ChessBoard',
  components: {},
  props: {
    squares: {
      require: true,
      type: Array as PropType<Square[]>
    }
  },
  emits: ['setActive'],
  methods: {
    activateSquare(square: Square) {
      this.$emit('setActive', square);
    },
    squareColor(index: number){
      const modResult = index % 16 < 8 ? 1 : 0;
      return index % 2 === modResult ? 'dark' : 'light';
    }
  },
});
</script>

<template>
  <section class="board">
    <div v-for="(square, index) in squares" :key="square.key" class="square" :class="squareColor(index)" @click="activateSquare(square)">
      {{ square.key }}
    </div>
  </section>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  aspect-ratio: 1;
}
.square {
  background-color: var(--color-light-square);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  color: var(--color-text-square);
}

.square.dark {
  background-color: var(--color-dark-square);
}

.square:active {
  background-color: var(--color-active-square);
}
</style>

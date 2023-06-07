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
    }
  }
});
</script>

<template>
  <section class="board">
    <div v-for="square in squares" :key="square.key" class="square" @click="activateSquare(square)">
      {{ square.file }}{{ square.rank }}
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
  color: var(--app-black);
  cursor: pointer;
  user-select: none;
}



.square:nth-child(16n + 2),
.square:nth-child(16n + 4),
.square:nth-child(16n + 6),
.square:nth-child(16n + 8),
.square:nth-child(16n + 9),
.square:nth-child(16n + 11),
.square:nth-child(16n + 13),
.square:nth-child(16n + 15) {
  background-color: var(--color-dark-square);
}

.square:active{
  /*todo style this*/
  background-color: white;
}
</style>

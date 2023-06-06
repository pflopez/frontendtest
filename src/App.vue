<script lang="ts">
import { defineComponent } from 'vue';
import ChessBoard from '@/components/ChessBoard.vue';
import { boardSquares } from '@/board';

export default defineComponent({
  name: 'App',
  components: { ChessBoard },
  data() {
    return { boardSquares };
  }
});
</script>

<template>
  <main>
    <ChessBoard :squares="boardSquares"></ChessBoard>
  </main>
</template>

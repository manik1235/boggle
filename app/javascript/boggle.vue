<template>
  <div id="app">
    <div v-for="line in board" :key="line">
      {{ line }}
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      board: [
          'R E A D',
          'Y T O P',
          'L A Y B',
          'O G L E'
        ]
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

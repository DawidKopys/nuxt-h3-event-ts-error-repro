<template>
  <div>
    This is an app.
    <div>
      <button @click="fetchFoo">Fetch Foo</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const fetchFoo = () => $fetch('/api/foo')
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Home Page</h2>
    <button @click.prevent="setUsers()">Set Users</button>
    <button style="margin-left: 1rem;" @click.prevent="clearUsers()">Clear Users</button>

    <!-- Loop users data from store -->
    <h3>Users in store</h3>
    <ul>
      <li v-for="(user,index) in $store.getters.getUsers" :key="index">{{user.firstName}} {{user.lastName}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      users: [
        // Mockup Data
        {firstName: 'Siwakorn', lastName: 'Jindajamorn'},
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Lisa', lastName: 'Backpink'},
      ]
    }
  },
  methods: {
    setUsers() {
      // Set users data in store
      this.$store.dispatch('setUsers', this.users)
    },
    clearUsers() {
      // Clear users data in store
      this.$store.dispatch('clearUsers')
    }
  }
}
</script>

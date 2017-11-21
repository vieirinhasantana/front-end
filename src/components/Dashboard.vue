<template>
    <div id="app-wrapper">
      <sidebar></sidebar>
      <navbar></navbar>
    </div>
</template>
<script>
import SideBar from './SideBar'
import NavBar from './NavBar'
export default {
  components: {
    sidebar: SideBar,
    navbar: NavBar
  }
}
</script>

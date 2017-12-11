<template>
  <div>
    <navbar></navbar>
    <sidebar></sidebar>
  </div>
</template>
<script>
import { isLoggedIn } from '../utils/authentication'
import SideBar from './SideBar'
import NavBar from './NavBar'
export default {
  components: {
    sidebar: SideBar,
    navbar: NavBar
  },
  created: function () {
    isLoggedIn()
    .then(result => {
      console.log('Unibak-Ok')
    })
    .catch(err => {
      if (err || err !== null) {
        this.$router.replace({
          path: '/sign-in'
        })
      }
    })
  }
}
</script>
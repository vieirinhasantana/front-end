<template>
  <div>
    <script type="text/x-template" id="vue-page-dashboard">
      <section class="main-content" v-cloak>
        <div class="grid-stack">
          <div class="grid-stack-item" data-gs-no-resize="1" data-gs-no-move="1" data-gs-x="0" data-gs-y="0"
                data-gs-width="12" data-gs-height="10"
                data-gs-min-width="8" data-gs-min-height="10">
              <div class="grid-stack-item-content">
                  <card-chart-billing data-preload></card-chart-billing>
              </div>
          </div>
          <div class="grid-stack-item" data-gs-no-resize="1" data-gs-no-move="1" data-gs-x="12" data-gs-y="0"
                data-gs-width="12" data-gs-height="10"
                data-gs-min-width="8" data-gs-min-height="10">
              <div class="grid-stack-item-content">
                  <card-chart-subscriptions data-preload></card-chart-subscriptions>
              </div>
          </div>
          <div class="grid-stack-item" data-gs-no-resize="1" data-gs-no-move="1" data-gs-x="0" data-gs-y="10"
                data-gs-width="12" data-gs-height="10"
                data-gs-min-width="8" data-gs-min-height="10">
              <div class="grid-stack-item-content">
                  <card-chart-orders data-preload></card-chart-orders>
              </div>
          </div>
          <div class="grid-stack-item" data-gs-no-resize="1" data-gs-no-move="1" data-gs-x="12" data-gs-y="10"
                data-gs-width="12" data-gs-height="10"
                data-gs-min-width="8" data-gs-min-height="10">
              <div class="grid-stack-item-content">
                  <card-chart-tickets data-preload></card-chart-tickets>
              </div>
          </div>
          <div class="grid-stack-item" data-gs-no-resize="1" data-gs-no-move="1" data-gs-x="0" data-gs-y="20"
                data-gs-width="6" data-gs-height="10"
                data-gs-min-width="6" data-gs-min-height="7" style="z-index: 1;">
              <div class="grid-stack-item-content">
                  <card-info data-preload></card-info>
              </div>
          </div>
          <div class="grid-stack-item" data-gs-no-resize="1" data-gs-no-move="1" data-gs-x="6" data-gs-y="20"
                data-gs-width="6" data-gs-height="10"
                data-gs-min-width="6" data-gs-min-height="10">
              <div class="grid-stack-item-content">
                  <card-news data-preload></card-news>
              </div>
          </div>
          <div class="grid-stack-item" data-gs-no-resize="1" data-gs-no-move="1" data-gs-x="12" data-gs-y="20"
                data-gs-width="12" data-gs-height="12"
                data-gs-min-width="8" data-gs-min-height="6" data-card-name="system-logs"
                data-anijs="if: mouseover, on: body, do: swing animated">
              <div class="grid-stack-item-content">
                  <card-logs data-preload></card-logs>
              </div>
          </div>
        </div>
      </section>
    </script>
    <div id="app-wrapper">
      <sidebar></sidebar>
      <navbar></navbar>
      <div id="dashboard-container">
        <section class="main-content">
        </section>
      </div>
    </div>
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

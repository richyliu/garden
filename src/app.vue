<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal theme-dark>
      <f7-view url="/panel-left/"></f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover theme-dark>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel>

    <!-- Views/Tabs container -->
    <f7-views tabs ios-edges>
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels>
        <f7-link tab-link="#view-home" tab-link-active icon="far fa-tint" text="Home" class="fa-lg"></f7-link>
        <f7-link tab-link="#view-web" icon-ios="fa:home" text="Web" class="fa-lg"></f7-link>
      </f7-toolbar>

      <!-- Home View -->
      <f7-view id="view-home" url="/" main tab tab-active></f7-view>
      <!-- Web View -->
      <f7-view id="view-web" url="/web/" tab></f7-view>
    </f7-views>

  </f7-app>
</template>

<script>
// Import Routes
import routes from "./routes.js";

export default {
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: "liu.richard.garden", // App bundle ID
        name: "Garden", // App name
        theme: "auto", // Automatic theme detection
        // App routes
        routes: routes
      }
    };
  }
};
</script>

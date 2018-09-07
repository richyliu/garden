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
        <f7-link tab-link="#view-home" tab-link-active icon-f7="home">
          <f7-icon ios="f7:home_fill" class="icon-ios-fill"></f7-icon>
          <span class="tabbar-label">Home</span>
        </f7-link>
        <f7-link tab-link="#view-catalog" icon-f7="book">
          <f7-icon ios="f7:book_fill" class="icon-ios-fill"></f7-icon>
          <span class="tabbar-label">Catalog</span>
        </f7-link>
        <f7-link tab-link="#view-settings" icon-f7="settings">
          <f7-icon ios="f7:settings_fill" class="icon-ios-fill"></f7-icon>
          <span class="tabbar-label">Settings</span>
        </f7-link>
      </f7-toolbar>

      <f7-view id="view-home" url="/" main tab tab-active></f7-view>
      <f7-view id="view-catalog" url="/catalog/" tab></f7-view>
      <f7-view id="view-settings" url="/settings/" tab></f7-view>
    </f7-views>

  </f7-app>
</template>

<script>
// Import Routes
import routes from "./js/routes.js";

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

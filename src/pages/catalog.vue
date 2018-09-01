<template>
  <f7-page>
    <f7-navbar title="Catalog"></f7-navbar>

    <f7-list media-list>
      <f7-list-item
        v-for="plant in plants"
        :key="plant.id"
        :title="plant.name"
        :after="plant.growTimeMin"
        :subtitle="plant.location.name"
        :text="plant.description">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
    export default {
      name: "catalog",
      data() {
        return {
          plants: [
            {
              id: "000a",
              name: "Asparagus",
              growTimeMin: 80,
              location: {
                name: "Plot 1",
                id: 0,
                location: {
                  x: 23,
                  y: 24,
                  width: 4,
                  height: 4
                }
              },
              description: "Perennial, short green stalks"
            },
            {
              id: "001a",
              name: "Brussels Sprouts",
              growTimeMin: 60,
              location: {
                name: "Plot 2",
                id: 1,
                location: {
                  x: 12,
                  y: 24,
                  width: 3,
                  height: 8
                }
              },
              description: "Biannual grown as annual for small heads"
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>

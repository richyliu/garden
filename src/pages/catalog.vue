<template>
  <f7-page>
    <f7-navbar title="Catalog"></f7-navbar>

    <f7-list media-list>
      <f7-list-item
        v-for="(plant, key) in plants"
        :key="key"
        :title="plant.name + ' ' + plant.variety"
        :subtitle="plant.species"
        :after="plant.growTimeMin + ' days'"
        :text="plant.description"
        :link="`/catalog-detail/${key}/`">
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
    export default {
      name: 'catalog',
      data() {
        return {
          plants: {
            // same numbered plants have same name, varieties are distinguished by letter
            '000a': {

              // common name
              name: 'Asparagus',
              // variety (changes letter)
              variety: 'Common',
              // scientific genus species name
              species: 'foo',

              // mininum time in days from germination to harvest
              growTimeMin: 80,
              // maximum time
              growTimeMax: 90,

              // minimum germination temperature (F)
              germTempMin: 45,
              // optimal germination
              germTempOptimal: 60,
              // maximum
              germTempMax: 90,
              
              // minimum height in feet
              heightMin: 1,
              // maximum
              heightMax: 2,
              // minimum spread in feet
              spreadMin: 1,
              // maximum
              spreadMax: 1.5,

              // optimal seed planting depth
              depth: 1/4,
              // space 1 plant takes up
              spacing: 1/4,
              // seed acquire date(s)
              date: [ new Date('2018-08-24') ],
              
              // if plant needs shade, partial sun, or full sun
              shade: true,
              partSun: true,
              sun: false,
              // trellis needed
              trellis: false,
              // trellis optional
              trellisOptional: false,
              // perennial
              perennial: true,

              // description
              description: 'Perennial, short green stalks',
              // special planting notes
              notes: 'Don\'t plant too deep!'
            },
            '001a': {
              name: 'Brussels Sprouts',
              growTimeMin: 60,
              location: 0,
              locationSubdivs: [ 0 ],
              description: 'Biannual grown as annual for small heads'
            }
          },
          locations: [
            {
              name: 'Plot 1',
              id: 0,
              // number of subdivisions for planting
              subdivs: 16,
              coords: {
                x: 23,
                y: 24,
                width: 4,
                height: 4
              }
            },
            {
              name: 'Plot 2',
              id: 1,
              subdivs: 24,
              coords: {
                x: 12,
                y: 24,
                width: 3,
                height: 8
              }
            }
          ] 
        }
      }
    }
</script>

<style scoped>

</style>

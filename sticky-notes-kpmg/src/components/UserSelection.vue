<template>
    <v-container class="m-0" fluid>
        <v-combobox
            outlined
          :items="items"
          multiple
          chips
          class="pt-0"
        >
        <template v-slot:selection="data">
            <v-chip
              close
              color="primary"
              @click:close="data.parent.selectItem(data.item)"
            >
            {{ data.item }}
            </v-chip>
          </template>
        </v-combobox>
    </v-container>
</template>

<script>
    export default {
    data () {
      return {
        select: [],
        items: [
            'Philip Fry',
            'Hermes Conrad'
        ]
      }
    }
  }
</script>
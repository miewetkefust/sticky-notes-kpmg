<template>
    <v-container fluid>
        <v-combobox
          v-model="select"
          :items="items"
          multiple
          chips
        >
        <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
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
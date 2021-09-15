<template>
    <div>
        <p v-for="(note, index) in notes" :key="index"></p>
    </div>
</template>

<script>
export default {
    name: "NotesList",
    data: function(){
        return {
            notes: []
        }
    },
    async created(){
        const response = await fetch('http://localhost:3000')
        const json = await response.json()
        this.notes = json
    }
}
</script>
<template>
<div>
    <v-container 
        v-for="(note, index) in notes" :key="index">

        <v-row class="d-flex align-center">
             <!--checkbox and title-->
             <v-col>
                 <v-checkbox 
                :label="note.title"/>
             </v-col>
            

            <!--type-->
            <v-col>
                <v-chip
                class="ma-2"
                color="secondary"
                label>
                {{note.type}}
                </v-chip>
            </v-col>
            
            <!--status-->
            <v-col>
                <v-chip
                :color="statusColor(note.status)"
                class="ma-2"
                label>
                {{note.status}}
                </v-chip>
            </v-col>

            <!--priority-->
            <v-col>
                <v-chip
                :color="priorityColor(note.priority)"
                class="ma-2"
                label>
                {{note.priority.text}}
                </v-chip>
            </v-col>

            <!--duedate-->
            <v-col>
                <v-chip
                class="ma-2"
                label>
                {{dueDateText(note.dueDate)}}
                </v-chip>
            </v-col>
        </v-row>
       
    </v-container>
</div>
</template>

<script>
export default {
    name: "NotesList",
    data: function(){
        return {
            notes: [],
            dueDateColor: ""
        }
    },
    async created(){
        const response = await fetch('http://localhost:3000')
        const json = await response.json()
        this.notes = json
    },
    methods: {
        statusColor: function(status){
            switch(status.toLowerCase()){
                case "in progress":
                    return "primary"
                case "pending documentation":
                    return "orange"
                case "not started":
                    return "secondary"
                case "closed":
                    return "red"
                default:
                    return ""
            }
        },
        priorityColor: function(priority){
            switch(priority.sortKey){
                case 1:
                    return "red"
                case 2:
                    return "orange"
                case 3:
                    return "green"
                default:
                    return ""
            }
        },
        dueDateText: function(dueDate){
            if(dueDate === "") return "No due date"
            
            const today = new Date()
            const due = new Date(dueDate)
            if(today.getDay() > due.getDay()){
                return "Past due: " + dueDate
            } else {
                return dueDate
            }
        }
    }
}
</script>
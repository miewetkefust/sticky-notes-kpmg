<template>
<div>
    <v-container 
        v-for="(note, index) in notes.slice(0, this.loadCounter)" :key="index">

        <v-row 
        no-gutters
        class="d-flex align-center"
        >
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
                <p
                class="ma-2">
                {{dueDateText(note.dueDate)}}
                </p>
            </v-col>

            <!--reporter-->
            <v-col >
                <v-avatar>
                    <img 
                    :src="note.reporterId.photo"/>
                </v-avatar>
            </v-col>

            <!--assignees-->
            <v-col >
                <v-avatar>
                    <img v-for="(assignee, index) in note.assignees" :key="index"
                    :src="assignee.photo"/>
                </v-avatar>
            </v-col>

            <!--sectionRef-->
            <v-col>
                <v-chip
                color="secondary"
                class="ma-2"
                label>
                {{sectionRefText(note.sectionRef)}}
                </v-chip>
            </v-col>

            <!--createdAt-->
            <v-col>
                <p
                class="ma-2">
                {{dateToString(note.createdAt)}}
                </p>
            </v-col>

            <!--updatedAt-->
            <v-col>
                <p
                class="ma-2">
                {{dateToString(note.updatedAt)}}
                </p>
            </v-col>
        </v-row>
       
    </v-container>

    <v-btn
        v-on:click="updateLoadCounter()"
        v-show="this.showLoad"
        block>
        Load more
    </v-btn>
</div>
</template>

<script>
export default {
    name: "NotesList",
    data: function(){
        return {
            loadCounter: 3,
            showLoad: true
        }
    },
    props: [notes],
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
        },
        sectionRefText: function(sectionRef){
            if(sectionRef === null | sectionRef === ""){
                return "No section reference"
            } else {
                const stringArr = sectionRef.split("-")
                let newString = ""
                stringArr.forEach(s => {
                    if(s === "app")
                        return
                    else
                        newString += s
                })
                return newString
            }
        },
        dateToString: function(jsonDate){
            const date = new Date(jsonDate.$date)
            return date.getFullYear() +"-"+ date.getMonth() + "-" + date.getDay()
        },
        updateLoadCounter(){
            if (this.loadCounter < this.notes.length){
                const increase = Math.min(this.loadCounter+10, this.notes.length)
                this.loadCounter = increase

                if(this.loadCounter === this.notes.length){
                    this.showLoad = false
                }
            }
        }
    }
}
</script>